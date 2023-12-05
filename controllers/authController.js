const generateToken = () => { 
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };
  
  const register = (req, res) => {
    const { username, password } = req.body;
   
  
    res.json({ success: true, message: 'Registrasi berhasil' });
  };
  
  const login = (req, res) => {
    const { username, password } = req.body; 
    const token = generateToken();
  
    res.json({ success: true, message: 'Login berhasil', token });
  };
  
  const logout = (req, res) => {
    const currentUser = req.currentUser;
    currentUser.token = null;
  
    res.json({ success: true, message: 'Logout berhasil' });
  };
  
  module.exports = { register, login, logout };
  