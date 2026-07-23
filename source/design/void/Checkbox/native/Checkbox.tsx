// Module ID: 12998
// Function ID: 100554
// Name: Checkbox
// Dependencies: [31, 27, 33, 12999, 13000, 2]
// Exports: default

// Module 12998 (Checkbox)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const result = require("jsxProd").fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style };
  if (style.selected) {
    obj.source = tmp3(12999);
    let tmp5 = obj;
  } else {
    obj.source = tmp3(13000);
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
};
