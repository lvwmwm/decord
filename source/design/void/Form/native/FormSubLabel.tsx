// Module ID: 6979
// Function ID: 6980
// Name: FormSubLabel
// Dependencies: [19, 21, 4739, 2]
// Exports: default

// Module 6979 (FormSubLabel)
import noopAll from "noop" /* 19 */;
import Text from "Text" /* 4739 */;
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
