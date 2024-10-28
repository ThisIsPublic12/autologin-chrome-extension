chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "login") {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.passwords.getAutofillableLoginCredentials(function(credentials) {
          for (let credential of credentials) {
            if (credential.url === tabs[0].url) { 
              chrome.tabs.sendMessage(tabs[0].id, { 
                action: "fillLogin", 
                data: { 
                  username: credential.username, 
                  password: credential.password 
                } 
              });
              return; 
            }
          }
        });
      });
    } else if (request.action === "masterPasswordVerified") {
      // Store a flag in storage to indicate that the master password has been verified
      chrome.storage.local.set({ masterPasswordVerified: true });
    }
  });