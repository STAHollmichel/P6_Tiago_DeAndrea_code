const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const passwordSchema = require('../middleware/password');

router.post('/signup', passwordSchema, userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;