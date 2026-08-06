// Module ID: 13292
// Function ID: 13293
// Name: NitroWheel
// Dependencies: [19, 21, 5251, 8623, 2]
// Exports: default

// Module 13292 (NitroWheel)
import "noop";
import { jsx } from "jsxProd";

const result = require("preload").fileFinishedImporting("design/void/NitroWheel/native/NitroWheel.tsx");

export default function NitroWheel(style) {
  const obj = { source: null, style: null, resizeMode: "contain" };
  obj[0] = importDefault(8623);
  obj[1] = style.style;
  return jsx(importDefault(5251), { source: null, style: null, resizeMode: "contain" });
};
