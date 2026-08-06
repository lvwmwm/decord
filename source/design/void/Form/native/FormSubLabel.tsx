// Module ID: 5368
// Function ID: 5369
// Name: FormSubLabel
// Dependencies: [19, 21, 4281, 2]
// Exports: default

// Module 5368 (FormSubLabel)
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
  return jsx(require(4281) /* Text */.Text, { color, variant: "text-xs/normal", lineClamp, style, accessible, children });
};
