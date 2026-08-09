import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const app = express();
const PORT = 3000;
app.use(express.json());
const users = [];
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        message: "Username and Password are required",
      });
    }

    // Check if user already exists
    const existingUser = users.find((user) => user.username === username);

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    users.push({
      username,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User Registered Successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = users.find((u) => u.username === username);

    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid Password",
      });
    }

    // Generate JWT Token
    const token = jwt.sign(
      { username: user.username },
      "secretkey",
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login Successful",
      token,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// Home Route
app.get("/", (req, res) => {
  res.send("JWT Authentication Server Running 🚀");
});

app.get("/dill", (req, res) => {
  res.send("dengy ra");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});