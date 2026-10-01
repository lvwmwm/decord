// Module ID: 13631
// Function ID: 13632
// Name: CloseIcon
// Dependencies: [19, 21, 7909, 2]
// Exports: default

// Module 13631 (CloseIcon)
import Fragment from "Fragment" /* 21 */;
import inlineStyles from "inlineStyles" /* 7909 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/void/CloseIcon/native/CloseIcon.tsx");

export default function Close(width) {
  let num = width.width;
  if (num === undefined) {
    num = 24;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 24;
  }
  let str = width.color;
  if (str === undefined) {
    str = "currentColor";
  }
  const merged = Object.assign(width, Object.assign({ width: 0, height: 0, color: 0 }));
  const Svg = inlineStyles.Svg;
  const merged1 = Object.assign(merged);
  return <Svg width={num} height={num2} viewBox="0 0 24 24">{jsx(inlineStyles.Path, { fill: str, d: "M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z" })}</Svg>;
};
