// Module ID: 13187
// Function ID: 13188
// Name: NitroWheel
// Dependencies: [19, 21, 5145, 9388, 2]
// Exports: default

// Module 13187 (NitroWheel)
import "noop";
import { jsx } from "jsxProd";

const result = require("preload").fileFinishedImporting("design/void/NitroWheel/native/NitroWheel.tsx");

export default function NitroWheel(style) {
  const obj = { source: null, style: null, resizeMode: "contain" };
  obj[0] = importDefault(9388);
  obj[1] = style.style;
  return jsx(importDefault(5145), { source: null, style: null, resizeMode: "contain" });
};
