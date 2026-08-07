// Module ID: 5387
// Function ID: 5388
// Name: FormSubLabel
// Dependencies: [19, 21, 4298, 2]
// Exports: default

// Module 5387 (FormSubLabel)
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
  return jsx(require(4298) /* Text */.Text, { color, variant: "text-xs/normal", lineClamp, style, accessible, children });
};
