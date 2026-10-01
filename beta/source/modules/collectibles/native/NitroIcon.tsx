// Module ID: 12714
// Function ID: 12715
// Name: NitroIcon
// Dependencies: [19, 21, 7909, 2]
// Exports: default

// Module 12714 (NitroIcon)
import Fragment from "Fragment" /* 21 */;
import inlineStylesDefault from "inlineStyles" /* 7909 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/collectibles/native/NitroIcon.tsx");

export default function NitroIcon(width) {
  let num = width.width;
  if (num === undefined) {
    num = 106;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 26;
  }
  let str = width.color;
  if (str === undefined) {
    str = "#ffffff";
  }
  inlineStylesDefault;
  return <tmp width={num} height={num2} viewBox="0 0 106 26">{null}</tmp>;
};
