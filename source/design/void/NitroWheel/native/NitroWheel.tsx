// Module ID: 13089
// Function ID: 101005
// Name: NitroWheel
// Dependencies: [31, 33, 5085, 8057, 2]
// Exports: default

// Module 13089 (NitroWheel)
import "result";
import { jsx } from "jsxProd";

const result = require("preload").fileFinishedImporting("design/void/NitroWheel/native/NitroWheel.tsx");

export default function NitroWheel(style) {
  const obj = { source: importDefault(8057), style: style.style, resizeMode: "contain" };
  return jsx(importDefault(5085), { source: importDefault(8057), style: style.style, resizeMode: "contain" });
};
