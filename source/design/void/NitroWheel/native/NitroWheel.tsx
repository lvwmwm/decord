// Module ID: 13443
// Function ID: 13444
// Name: NitroWheel
// Dependencies: [19, 21, 5307, 8745, 2]
// Exports: default

// Module 13443 (NitroWheel)
import "noop";
import { jsx } from "jsxProd";

const result = require("preload").fileFinishedImporting("design/void/NitroWheel/native/NitroWheel.tsx");

export default function NitroWheel(style) {
  const obj = { source: null, style: null, resizeMode: "contain" };
  obj[0] = importDefault(8745);
  obj[1] = style.style;
  return jsx(importDefault(5307), { source: null, style: null, resizeMode: "contain" });
};
