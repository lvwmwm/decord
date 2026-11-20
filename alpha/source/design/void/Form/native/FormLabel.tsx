// Module ID: 7385
// Function ID: 7386
// Name: FormLabel
// Dependencies: [19, 21, 5385, 2]
// Exports: default

// Module 7385 (FormLabel)
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 5385 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/void/Form/native/FormLabel.tsx");

export default function FormLabel(numberOfLines) {
  let accessible;
  let color;
  let style;
  let lineClamp = numberOfLines.numberOfLines;
  const children = numberOfLines.text;
  if (lineClamp === undefined) {
    lineClamp = 0;
  }
  ({ color, style, accessible } = numberOfLines);
  if (color === undefined) {
    color = "mobile-text-heading-primary";
  }
  return jsx(Text_Text.Text, { variant: "heading-sm/semibold", color, lineClamp, style, maxFontSizeMultiplier: 2, accessible, children });
};
