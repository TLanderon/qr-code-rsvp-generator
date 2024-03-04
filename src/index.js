// Importing required library
const myQRCodeGenerator = require('my-qrcode-generator');
const crypto = require('crypto');

// Function to generate a unique RSVP code
function generateRSVPCode(attendeeInfo) {
    const hash = crypto.createHash('sha256');
    hash.update(JSON.stringify(attendeeInfo));
    return hash.digest('hex');
}

// Function to generate QR Code with RSVP code
function generateQRCode(attendeeInfo) {
    const rsvpCode = generateRSVPCode(attendeeInfo);
    return myQRCodeGenerator(rsvpCode);
}

// Exporting the function
module.exports = generateQRCode;

// Example usage
// generateQRCode({ name: "John Doe", email: "john@example.com" }).then((url) => {
//     console.log(url);
// }).catch((err) => {
//     console.error(err);
// });
