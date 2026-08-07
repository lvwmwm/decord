// Module ID: 13306
// Function ID: 13307
// Name: NitroWheel
// Dependencies: [19, 21, 5267, 8640, 2]
// Exports: default

// Module 13306 (NitroWheel)
import "noop";
import { jsx } from "jsxProd";

const result = require("preload").fileFinishedImporting("design/void/NitroWheel/native/NitroWheel.tsx");

export default function NitroWheel(style) {
  const obj = { source: null, style: null, resizeMode: "contain" };
  obj[0] = importDefault(8640);
  obj[1] = style.style;
  return jsx(importDefault(5267), { source: null, style: null, resizeMode: "contain" });
};
