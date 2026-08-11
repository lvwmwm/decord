// Module ID: 13386
// Function ID: 13387
// Name: NitroWheel
// Dependencies: [19, 21, 5268, 8706, 2]
// Exports: default

// Module 13386 (NitroWheel)
import "noop";
import { jsx } from "jsxProd";

const result = require("preload").fileFinishedImporting("design/void/NitroWheel/native/NitroWheel.tsx");

export default function NitroWheel(style) {
  const obj = { source: null, style: null, resizeMode: "contain" };
  obj[0] = importDefault(8706);
  obj[1] = style.style;
  return jsx(importDefault(5268), { source: null, style: null, resizeMode: "contain" });
};
