// Module ID: 5565
// Function ID: 5566
// Name: FormSubLabel
// Dependencies: [19, 21, 4441, 2]
// Exports: default

// Module 5565 (FormSubLabel)
import noopAll from "noop" /* 19 */;
import Text from "Text" /* 4441 */;
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
