// Module ID: 13101
// Function ID: 101137
// Name: NitroWheel
// Dependencies: [31, 33, 5085, 9309, 2]
// Exports: default

// Module 13101 (NitroWheel)
import "result";
import { jsx } from "jsxProd";

const result = require("preload").fileFinishedImporting("design/void/NitroWheel/native/NitroWheel.tsx");

export default function NitroWheel(style) {
  const obj = { source: importDefault(9309), style: style.style, resizeMode: "contain" };
  return jsx(importDefault(5085), { source: importDefault(9309), style: style.style, resizeMode: "contain" });
};
