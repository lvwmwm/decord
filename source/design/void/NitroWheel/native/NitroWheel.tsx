// Module ID: 13444
// Function ID: 13445
// Name: NitroWheel
// Dependencies: [19, 21, 5308, 8749, 2]
// Exports: default

// Module 13444 (NitroWheel)
import "noop";
import { jsx } from "jsxProd";

const result = require("preload").fileFinishedImporting("design/void/NitroWheel/native/NitroWheel.tsx");

export default function NitroWheel(style) {
  const obj = { source: null, style: null, resizeMode: "contain" };
  obj[0] = importDefault(8749);
  obj[1] = style.style;
  return jsx(importDefault(5308), { source: null, style: null, resizeMode: "contain" });
};
