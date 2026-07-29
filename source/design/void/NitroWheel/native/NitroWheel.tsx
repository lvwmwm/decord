// Module ID: 13168
// Function ID: 13169
// Name: NitroWheel
// Dependencies: [19, 21, 5141, 9377, 2]
// Exports: default

// Module 13168 (NitroWheel)
import "noop";
import { jsx } from "jsxProd";

const result = require("preload").fileFinishedImporting("design/void/NitroWheel/native/NitroWheel.tsx");

export default function NitroWheel(style) {
  const obj = { source: null, style: null, resizeMode: "contain" };
  obj[0] = importDefault(9377);
  obj[1] = style.style;
  return jsx(importDefault(5141), { source: null, style: null, resizeMode: "contain" });
};
