// Module ID: 13284
// Function ID: 13285
// Name: NitroWheel
// Dependencies: [19, 21, 5236, 8622, 2]
// Exports: default

// Module 13284 (NitroWheel)
import "noop";
import { jsx } from "jsxProd";

const result = require("preload").fileFinishedImporting("design/void/NitroWheel/native/NitroWheel.tsx");

export default function NitroWheel(style) {
  const obj = { source: null, style: null, resizeMode: "contain" };
  obj[0] = importDefault(8622);
  obj[1] = style.style;
  return jsx(importDefault(5236), { source: null, style: null, resizeMode: "contain" });
};
