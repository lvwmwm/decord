// Module ID: 13337
// Function ID: 13338
// Name: Checkbox
// Dependencies: [19, 17, 21, 13338, 13339, 2]
// Exports: default

// Module 13337 (Checkbox)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const result = require("jsxProd").fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style, source: null };
  if (style.selected) {
    obj[1] = tmp3(13338);
    let tmp5 = obj;
  } else {
    obj[1] = tmp3(13339);
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
};
