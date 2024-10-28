document.getElementById('masterPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var enteredPassword = document.getElementById('masterPassword').value;
  
    chrome.storage.local.get(['masterPasswordSalt', 'masterPassword'], function(data) {
      if (data.masterPasswordSalt && data.masterPassword) {
        // Verify password
        var salt = sjcl.codec.base64.toBits(data.masterPasswordSalt);
        var key = sjcl.misc.pbkdf2(enteredPassword, salt, 10000, 256);
        try {
          var decryptedPassword = sjcl.decrypt(key, data.masterPassword);
          if (decryptedPassword === enteredPassword) {
            console.log("Master password verified.");
            chrome.runtime.sendMessage({ action: "masterPasswordVerified" });
            window.close(); 
          } else {
            // Show error message
            console.error("Incorrect master password.");
          }
        } catch (e) {
          // Show error message 
          console.error("Incorrect master password.");
        }
      } else {
        // Set password
        setMasterPassword(enteredPassword);
        window.close();
      }
    });
  });
  
  function setMasterPassword(password) {
    var salt = sjcl.random.randomWords(8);
    var key = sjcl.misc.pbkdf2(password, salt, 10000, 256);
    var encryptedPassword = sjcl.encrypt(key, password);
    chrome.storage.local.set({
      'masterPasswordSalt': sjcl.codec.base64.fromBits(salt),
      'masterPassword': encryptedPassword
    }, function() {
      console.log('Master password set successfully.');
      chrome.runtime.sendMessage({ action: "masterPasswordVerified" });
    });
  }