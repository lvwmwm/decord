// Module ID: 13129
// Function ID: 13130
// Name: Checkbox
// Dependencies: [19, 17, 21, 13130, 13131, 2]
// Exports: default

// Module 13129 (Checkbox)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const result = require("jsxProd").fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style, source: null };
  if (style.selected) {
    obj[1] = tmp3(13130);
    let tmp5 = obj;
  } else {
    obj[1] = tmp3(13131);
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
};
