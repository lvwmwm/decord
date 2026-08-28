// Module ID: 5578
// Function ID: 5579
// Name: FormSubLabel
// Dependencies: [19, 21, 4442, 2]
// Exports: default

// Module 5578 (FormSubLabel)
import noopAll from "noop" /* 19 */;
import Text from "Text" /* 4442 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/void/Form/native/FormSubLabel.tsx");

export default function FormSubLabel(color) {
  color = color.color;
  ({ text, numberOfLines, style, accessible } = color);
  if (color === undefined) {
    color = "text-subtle";
  }
  return jsx(Text.Text, { color, variant: "text-xs/normal", lineClamp, style, accessible, children });
};
