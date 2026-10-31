// Module ID: 7311
// Function ID: 7312
// Name: FormLabel
// Dependencies: [19, 21, 5624, 2]
// Exports: default

// Module 7311 (FormLabel)
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 5624 */;
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
  return jsx(Text_Text.Text, { variant: "heading-md/semibold", color, lineClamp, style, maxFontSizeMultiplier: 2, accessible, children });
};
