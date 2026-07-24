// Module ID: 13050
// Function ID: 100877
// Name: Checkbox
// Dependencies: [31, 27, 33, 13051, 13052, 2]
// Exports: default

// Module 13050 (Checkbox)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const result = require("jsxProd").fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style };
  if (style.selected) {
    obj.source = tmp3(13051);
    let tmp5 = obj;
  } else {
    obj.source = tmp3(13052);
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
};
