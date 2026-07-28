// Module ID: 5211
// Function ID: 45132
// Name: FormLabel
// Dependencies: [31, 33, 4161, 2]
// Exports: default

// Module 5211 (FormLabel)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Text").fileFinishedImporting("design/void/Form/native/FormLabel.tsx");

export default function FormLabel(numberOfLines) {
  let accessible;
  let color;
  let style;
  let num = numberOfLines.numberOfLines;
  if (num === undefined) {
    num = 0;
  }
  ({ color, style, accessible } = numberOfLines);
  if (color === undefined) {
    color = "mobile-text-heading-primary";
  }
  const obj = { variant: "heading-md/semibold", color, lineClamp: num, style, maxFontSizeMultiplier: 2, accessible, children: numberOfLines.text };
  return jsx(require(4161) /* Text */.Text, { variant: "heading-md/semibold", color, lineClamp: num, style, maxFontSizeMultiplier: 2, accessible, children: numberOfLines.text });
};
