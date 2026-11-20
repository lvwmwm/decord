// Module ID: 7386
// Function ID: 7387
// Name: FormSubLabel
// Dependencies: [19, 21, 5385, 2]
// Exports: default

// Module 7386 (FormSubLabel)
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 5385 */;
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
  return jsx(Text_Text.Text, { color, variant: "body-xs/normal", lineClamp, style, accessible, children });
};
