// Module ID: 13701
// Function ID: 13702
// Name: NitroWheel
// Dependencies: [19, 21, 5458, 8161, 2]
// Exports: default

// Module 13701 (NitroWheel)
import noopAll from "noop" /* 19 */;
import preloadDefault from "preload" /* 5458 */;
import registerAssetDefault from "registerAsset" /* 8161 */;
import { jsx } from "jsxProd" /* 21 */;

noopAll;
const result = require("set").fileFinishedImporting("design/void/NitroWheel/native/NitroWheel.tsx");

export default function NitroWheel(style) {
  const obj = { source: registerAssetDefault, style: style.style, resizeMode: "contain" };
  return jsx(preloadDefault, { source: registerAssetDefault, style: style.style, resizeMode: "contain" });
};
