// Module ID: 13968
// Function ID: 13969
// Name: Checkbox
// Dependencies: [19, 17, 21, 13969, 13970, 2]
// Exports: default

// Module 13968 (Checkbox)
import noopAll from "noop" /* 19 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

noopAll;
const result = require("set").fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style, source: null };
  if (style.selected) {
    obj[1] = tmp3(13969);
    let tmp5 = obj;
  } else {
    obj[1] = tmp3(13970);
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
};
