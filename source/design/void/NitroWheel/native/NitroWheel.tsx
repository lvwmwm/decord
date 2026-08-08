// Module ID: 13376
// Function ID: 13377
// Name: NitroWheel
// Dependencies: [19, 21, 5268, 8700, 2]
// Exports: default

// Module 13376 (NitroWheel)
import "noop";
import { jsx } from "jsxProd";

const result = require("preload").fileFinishedImporting("design/void/NitroWheel/native/NitroWheel.tsx");

export default function NitroWheel(style) {
  const obj = { source: null, style: null, resizeMode: "contain" };
  obj[0] = importDefault(8700);
  obj[1] = style.style;
  return jsx(importDefault(5268), { source: null, style: null, resizeMode: "contain" });
};
