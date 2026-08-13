// Module ID: 5428
// Function ID: 5429
// Name: FormSubLabel
// Dependencies: [19, 21, 4338, 2]
// Exports: default

// Module 5428 (FormSubLabel)
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
  return jsx(require(4338) /* Text */.Text, { color, variant: "text-xs/normal", lineClamp, style, accessible, children });
};
