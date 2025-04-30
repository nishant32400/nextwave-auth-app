const express = require('express');
const router = express.Router();
const multer = require('multer');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Multer setup for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage: storage });

// --- Create Account ---
router.post('/register', upload.single('image'), async (req, res) => {
  const { name, email, password, company, age, dob } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  
  try {
    const user = new User({
      name,
      email,
      password: hashedPassword,
      company,
      age,
      dob,
      image: req.file.path,
    });
    await user.save();
    res.status(201).json({ message: 'User Registered' });
  } catch (error) {
    res.status(400).json({ message: 'Error registering user', error });
  }
});

// --- Login ---
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiry = new Date();
    expiry.setMinutes(expiry.getMinutes() + 10);

    user.otp = otp;
    user.otpExpiry = expiry;
    await user.save();

    res.json({ message: 'OTP sent', otp });  // You can hide OTP if you send by email
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// --- Verify OTP ---
router.post('/verify-otp', async (req, res) => {
  const { email, otp } = req.body;

  try {
    const user = await User.findOne({ email, otp });
    if (!user) return res.status(400).json({ message: 'Invalid OTP' });

    if (user.otpExpiry < new Date()) {
      return res.status(400).json({ message: 'OTP Expired' });
    }

    res.json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// --- Delete User ---
router.delete('/delete/:email', async (req, res) => {
  const { email } = req.params;
  try {
    await User.deleteOne({ email });
    res.json({ message: 'Account deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
