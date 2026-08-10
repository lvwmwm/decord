// Module ID: 13339
// Function ID: 13340
// Name: Checkbox
// Dependencies: [19, 17, 21, 13340, 13341, 2]
// Exports: default

// Module 13339 (Checkbox)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const result = require("jsxProd").fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style, source: null };
  if (style.selected) {
    obj[1] = tmp3(13340);
    let tmp5 = obj;
  } else {
    obj[1] = tmp3(13341);
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
};
