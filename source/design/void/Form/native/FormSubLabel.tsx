// Module ID: 5580
// Function ID: 5581
// Name: FormSubLabel
// Dependencies: [19, 21, 4444, 2]
// Exports: default

// Module 5580 (FormSubLabel)
import noopAll from "noop" /* 19 */;
import Text from "Text" /* 4444 */;
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
