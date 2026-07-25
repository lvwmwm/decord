// Module ID: 13061
// Function ID: 101004
// Name: Checkbox
// Dependencies: [31, 27, 33, 13062, 13063, 2]
// Exports: default

// Module 13061 (Checkbox)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const result = require("jsxProd").fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style };
  if (style.selected) {
    obj.source = tmp3(13062);
    let tmp5 = obj;
  } else {
    obj.source = tmp3(13063);
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
};
