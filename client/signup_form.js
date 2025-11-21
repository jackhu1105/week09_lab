const form = document.getElementById("signupForm");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");
const btnList = document.getElementById("btnList");

const API_BASE = "http://localhost:3000/api/signup";

let isSubmitting = false;

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (isSubmitting) return;
  isSubmitting = true;

  submitBtn.disabled = true;
  submitBtn.textContent = "送出中...";

  const payload = {
    name: name.value,
    email: email.value,
    password: password.value,
    studentId: studentId.value,
  };

  try {
    const res = await fetch(API_BASE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      result.textContent = "❌ 錯誤：" + data.error;
    } else {
      result.textContent = "✅ 成功：" + data.message + "\n目前總數：" + data.total;
      form.reset();
    }
  } catch (err) {
    result.textContent = "❌ 系統錯誤：" + err.message;
  }

  submitBtn.disabled = false;
  submitBtn.textContent = "送出";
  isSubmitting = false;
});

btnList.addEventListener("click", async () => {
  const res = await fetch(API_BASE);
  const data = await res.json();
  result.textContent = JSON.stringify(data, null, 2);
});
