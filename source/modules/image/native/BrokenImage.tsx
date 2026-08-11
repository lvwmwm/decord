// Module ID: 11474
// Function ID: 11475
// Name: BrokenImage
// Dependencies: [19, 21, 7837, 2]
// Exports: default

// Module 11474 (BrokenImage)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("inlineStyles").fileFinishedImporting("modules/image/native/BrokenImage.tsx");

export default function BrokenImage(arg0) {
  const obj = { width: 24, height: 24, fill: "hsl(217, 7.6%, 33.5%)" };
  const merged = Object.assign(arg0);
  obj.children = jsx(require(7837) /* inlineStyles */.Path, { d: "M21 5v6.59l-3-3-4 4-4-4-4 4-3-3V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Zm-3 6.42 3 3V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6.58l3 3 4-4 4 4 4-4Z" });
  return jsx(importDefault(7837), { width: 24, height: 24, fill: "hsl(217, 7.6%, 33.5%)" });
};
