// Module ID: 5234
// Function ID: 5235
// Name: FormSubLabel
// Dependencies: [19, 21, 4185, 2]
// Exports: default

// Module 5234 (FormSubLabel)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Text").fileFinishedImporting("design/void/Form/native/FormSubLabel.tsx");

export default function FormSubLabel(color) {
  let accessible;
  let numberOfLines;
  let style;
  let text;
  color = color.color;
  ({ text, numberOfLines, style, accessible } = color);
  if (color === undefined) {
    color = "text-subtle";
  }
  return jsx(require(4185) /* Text */.Text, { color, variant: "text-xs/normal", lineClamp, style, accessible, children });
};
