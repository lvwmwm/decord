// Module ID: 7417
// Function ID: 7418
// Name: FormSubLabel
// Dependencies: [19, 21, 4784, 2]
// Exports: default

// Module 7417 (FormSubLabel)
import Text_Text from "Text/Text" /* 4784 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormSubLabel.tsx");

export default function FormSubLabel(color) {
  color = color.color;
  ({ text, numberOfLines, style, accessible } = color);
  if (color === undefined) {
    color = "text-subtle";
  }
  return jsx(Text_Text.Text, { color, variant: "text-xs/normal", lineClamp, style, accessible, children });
};
