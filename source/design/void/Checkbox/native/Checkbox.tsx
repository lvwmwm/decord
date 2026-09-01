// Module ID: 13729
// Function ID: 13730
// Name: Checkbox
// Dependencies: [19, 17, 21, 13730, 13731, 2]
// Exports: default

// Module 13729 (Checkbox)
import noopAll from "noop" /* 19 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

noopAll;
const result = require("set").fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style, source: null };
  if (style.selected) {
    obj[1] = tmp3(13730);
    let tmp5 = obj;
  } else {
    obj[1] = tmp3(13731);
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
};
