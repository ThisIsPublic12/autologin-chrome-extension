# AutoLogin Chrome Extension

This Chrome extension automatically fills in login forms for websites using your saved Google Passwords. It also includes a master password feature for enhanced security.

## Features

* Autofills login forms using Google Passwords.
* Master password protection for added security.
* Encrypts the master password using SJCL.
* Simple and easy-to-use interface.

## Installation

1. Clone or download this repository to your local machine.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the directory where you cloned/downloaded this repository.

## Usage

1. Once installed, the extension will automatically detect login forms on websites.
2. If you have a Google Password saved for the website, it will be automatically filled in.
3. If this is the first time you're using the extension, you'll be prompted to set a master password.
4. Enter your desired master password and remember it securely.
5. Subsequently, you'll need to enter the master password to unlock the extension's functionality.

## Security

* The master password is encrypted using SJCL before being stored locally.
* The extension uses the `chrome.passwords` API to access your Google Passwords, which are already securely stored by Chrome.
* No sensitive information is transmitted or stored outside of your local machine.

## Disclaimer

* This extension is provided "as is" without any warranty.
* Use it at your own risk.
* The developers are not responsible for any loss or damage caused by this extension.

## Contributing

* Feel free to contribute to this project by submitting bug reports, feature requests, or pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 1