const users = {
  madec: { pw: "crm2025", role: "user" },
  admin: { pw: "super2025", role: "supervisor" }
};

function doLogin() {
  const login = document.getElementById('login').value;
  const password = document.getElementById('password').value;
  const user = users[login];

  if (user && user.pw === password) {
    localStorage.setItem('userRole', user.role);
    window.location.href = user.role === 'supervisor' ? 'consultation.html' : 'formulaire.html';
  } else {
    document.getElementById('alertMsg').innerText = "Identifiants incorrects.";
  }
}

function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}