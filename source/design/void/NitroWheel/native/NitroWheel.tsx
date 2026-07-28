// Module ID: 13145
// Function ID: 101310
// Name: NitroWheel
// Dependencies: [31, 33, 5119, 9353, 2]
// Exports: default

// Module 13145 (NitroWheel)
import "result";
import { jsx } from "jsxProd";

const result = require("preload").fileFinishedImporting("design/void/NitroWheel/native/NitroWheel.tsx");

export default function NitroWheel(style) {
  const obj = { source: importDefault(9353), style: style.style, resizeMode: "contain" };
  return jsx(importDefault(5119), { source: importDefault(9353), style: style.style, resizeMode: "contain" });
};
