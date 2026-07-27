// Module ID: 13062
// Function ID: 101009
// Name: Checkbox
// Dependencies: [31, 27, 33, 13063, 13064, 2]
// Exports: default

// Module 13062 (Checkbox)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const result = require("jsxProd").fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style };
  if (style.selected) {
    obj.source = tmp3(13063);
    let tmp5 = obj;
  } else {
    obj.source = tmp3(13064);
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
};
