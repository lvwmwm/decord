// Module ID: 14007
// Function ID: 14008
// Name: NitroWheel
// Dependencies: [19, 21, 5502, 8228, 2]
// Exports: default

// Module 14007 (NitroWheel)
import noopAll from "noop" /* 19 */;
import preloadDefault from "preload" /* 5502 */;
import registerAssetDefault from "registerAsset" /* 8228 */;
import { jsx } from "jsxProd" /* 21 */;

noopAll;
const result = require("set").fileFinishedImporting("design/void/NitroWheel/native/NitroWheel.tsx");

export default function NitroWheel(style) {
  const obj = { source: registerAssetDefault, style: style.style, resizeMode: "contain" };
  return jsx(preloadDefault, { source: registerAssetDefault, style: style.style, resizeMode: "contain" });
};
