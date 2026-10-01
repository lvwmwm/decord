// Module ID: 13644
// Function ID: 13645
// Name: WarningCircle
// Dependencies: [19, 21, 7909, 2]
// Exports: default

// Module 13644 (WarningCircle)
import Fragment from "Fragment" /* 21 */;
import inlineStyles from "inlineStyles" /* 7909 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/void/WarningCircle/native/WarningCircle.tsx");

export default function WarningCircle(width) {
  let num = width.width;
  if (num === undefined) {
    num = 20;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 20;
  }
  let str = width.color;
  if (str === undefined) {
    str = "currentColor";
  }
  const merged = Object.assign(width, Object.assign({ width: 0, height: 0, color: 0 }));
  const Svg = inlineStyles.Svg;
  const merged1 = Object.assign(merged);
  return <Svg width={num} height={num2} viewBox="0 0 20 20">{jsx(inlineStyles.Path, { d: "M10 0C4.486 0 0 4.486 0 10C0 15.515 4.486 20 10 20C15.514 20 20 15.515 20 10C20 4.486 15.514 0 10 0ZM9 4H11V11H9V4ZM10 15.25C9.31 15.25 8.75 14.691 8.75 14C8.75 13.31 9.31 12.75 10 12.75C10.69 12.75 11.25 13.31 11.25 14C11.25 14.691 10.69 15.25 10 15.25Z", fillRule: "evenodd", clipRule: "evenodd", fill: str })}</Svg>;
};
