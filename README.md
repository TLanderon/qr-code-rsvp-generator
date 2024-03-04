# QR Code RSVP Generator

A simple QR Code RSVP Generator written in JavaScript.

## Installation

You can install this package via npm:

```
npm install qr-code-rsvp-generator
```

## Usage

```javascript
const generateQRCode = require('qr-code-rsvp-generator');

generateQRCode({ name: "John Doe", email: "john@example.com" }).then((url) => {
    console.log(url);
}).catch((err) => {
    console.error(err);
});
```

## API

### `generateQRCode(attendeeInfo)`

Generates a QR Code containing an RSVP code for the provided attendee information.

- `attendeeInfo`: An object containing attendee information (e.g., name, email).

Returns a Promise that resolves with the data URL of the generated QR Code image.

## Example

Generate a QR Code RSVP for an event attendee:

```javascript
generateQRCode({ name: "John Doe", email: "john@example.com" }).then((url) => {
    console.log(url);
}).catch((err) => {
    console.error(err);
});
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
