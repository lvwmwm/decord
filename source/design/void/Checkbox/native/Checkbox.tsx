// Module ID: 13106
// Function ID: 101182
// Name: Checkbox
// Dependencies: [31, 27, 33, 13107, 13108, 2]
// Exports: default

// Module 13106 (Checkbox)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const result = require("jsxProd").fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style };
  if (style.selected) {
    obj.source = tmp3(13107);
    let tmp5 = obj;
  } else {
    obj.source = tmp3(13108);
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
};
