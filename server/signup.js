import { Router } from "express";
const router = Router();

let signupList = [];

router.post("/", (req, res) => {
  const { name, email, password, studentId } = req.body;

  if (!name || !email || !password || !studentId) {
    return res.status(400).json({ error: "All fields are required." });
  }

  if (!email.includes("@")) {
    return res.status(400).json({ error: "Invalid email format." });
  }

  signupList.push({
    id: signupList.length + 1,
    name,
    email,
    studentId,
    createdAt: new Date().toISOString(),
  });

  res.json({ message: "Signup success", total: signupList.length });
});

router.get("/", (req, res) => {
  res.json({ total: signupList.length, data: signupList });
});

export default router;
