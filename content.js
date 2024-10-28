chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "fillLogin") {
      let loginData = request.data;
      document.getElementById('usernameField').value = loginData.username; 
      document.getElementById('passwordField').value = loginData.password;
      document.getElementById('loginButton').click(); 
    }
  });