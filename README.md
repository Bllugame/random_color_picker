# Random Color Picker

This is a simple web page that generates a random hex color and sets it as the background color of the page. The hex color value is also displayed on the page.

## Getting Started

To use the random color picker, simply open the `index.html` file in a web browser and click the "Click me" button.

## How It Works

The `randomcolor()` function in `script.js` generates a random hex color by randomly selecting six values between 0 and 15 and converting them to their hexadecimal representation. The values are then concatenated to form a hex color string. The function sets this string as the background color of the page and updates the text content of the `#paragraph` element with the hex color value in uppercase.
