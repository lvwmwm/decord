// Module ID: 13418
// Function ID: 13419
// Name: Checkbox
// Dependencies: [19, 17, 21, 13419, 13420, 2]
// Exports: default

// Module 13418 (Checkbox)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const result = require("jsxProd").fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style, source: null };
  if (style.selected) {
    obj[1] = tmp3(13419);
    let tmp5 = obj;
  } else {
    obj[1] = tmp3(13420);
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
};
