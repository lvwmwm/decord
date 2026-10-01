// Module ID: 6561
// Function ID: 6562
// Name: FormSubLabel
// Dependencies: [19, 21, 4832, 2]
// Exports: default

// Module 6561 (FormSubLabel)
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 4832 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/void/Form/native/FormSubLabel.tsx");

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
  return jsx(Text_Text.Text, { color, variant: "text-xs/normal", lineClamp, style, accessible, children });
};
