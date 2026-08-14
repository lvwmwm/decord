// Module ID: 13457
// Function ID: 13458
// Name: NitroWheel
// Dependencies: [19, 21, 5329, 8763, 2]
// Exports: default

// Module 13457 (NitroWheel)
import "noop";
import { jsx } from "jsxProd";

const result = require("preload").fileFinishedImporting("design/void/NitroWheel/native/NitroWheel.tsx");

export default function NitroWheel(style) {
  const obj = { source: null, style: null, resizeMode: "contain" };
  obj[0] = importDefault(8763);
  obj[1] = style.style;
  return jsx(importDefault(5329), { source: null, style: null, resizeMode: "contain" });
};
