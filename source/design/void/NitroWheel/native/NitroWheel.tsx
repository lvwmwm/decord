// Module ID: 13255
// Function ID: 13256
// Name: NitroWheel
// Dependencies: [19, 21, 5221, 8594, 2]
// Exports: default

// Module 13255 (NitroWheel)
import "noop";
import { jsx } from "jsxProd";

const result = require("preload").fileFinishedImporting("design/void/NitroWheel/native/NitroWheel.tsx");

export default function NitroWheel(style) {
  const obj = { source: null, style: null, resizeMode: "contain" };
  obj[0] = importDefault(8594);
  obj[1] = style.style;
  return jsx(importDefault(5221), { source: null, style: null, resizeMode: "contain" });
};
