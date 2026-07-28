// Module ID: 5212
// Function ID: 45134
// Name: FormSubLabel
// Dependencies: [31, 33, 4161, 2]
// Exports: default

// Module 5212 (FormSubLabel)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Text").fileFinishedImporting("design/void/Form/native/FormSubLabel.tsx");

export default function FormSubLabel(color) {
  let accessible;
  let numberOfLines;
  let style;
  let text;
  let str = color.color;
  ({ text, numberOfLines, style, accessible } = color);
  if (str === undefined) {
    str = "text-subtle";
  }
  const obj = { color: str, variant: "text-xs/normal", lineClamp: numberOfLines, style, accessible, children: text };
  return jsx(require(4161) /* Text */.Text, { color: str, variant: "text-xs/normal", lineClamp: numberOfLines, style, accessible, children: text });
};
