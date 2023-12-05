const generateToken = () => { 
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };
  
  const register = async (req, res) => {
    try {
      const { username, password } = req.body;
   
      if (!username || !password) {
        throw new Error('Username dan password harus diisi');
      }
   
      const newUser = { username, password, token: null };
   
      if (username === 'user1') {
        throw new Error('Username sudah digunakan');
      }
   
      newUser.token = generateToken();
  
      res.json({ success: true, message: 'Registrasi berhasil', user: newUser });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };
  
  const login = (req, res) => { 
  };
  
  const logout = (req, res) => { 
  };
  
  module.exports = { register, login, logout };
  
