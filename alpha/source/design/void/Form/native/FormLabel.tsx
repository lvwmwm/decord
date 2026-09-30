// Module ID: 6756
// Function ID: 6757
// Name: FormLabel
// Dependencies: [19, 21, 4862, 2]
// Exports: default

// Module 6756 (FormLabel)
import Text_Text from "Text/Text" /* 4862 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormLabel.tsx");

export default function FormLabel(children) {
  let lineClamp = children.numberOfLines;
  if (lineClamp === undefined) {
    lineClamp = 0;
  }
  ({ color, style, accessible } = children);
  if (color === undefined) {
    color = "mobile-text-heading-primary";
  }
  return jsx(Text_Text.Text, { variant: "heading-md/semibold", color, lineClamp, style, maxFontSizeMultiplier: 2, accessible, children: children.text });
};
