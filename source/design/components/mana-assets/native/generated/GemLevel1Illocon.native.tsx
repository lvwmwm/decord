// Module ID: 7126
// Function ID: 59960
// Name: GemLevel1Illocon
// Dependencies: [33, 5119, 7127, 2]
// Exports: GemLevel1Illocon

// Module 7126 (GemLevel1Illocon)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/GemLevel1Illocon.native.tsx");

export const GemLevel1Illocon = function GemLevel1Illocon(size) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let num = size.size;
  ({ accessible, accessibilityLabel, resizeMode } = size);
  if (num === undefined) {
    num = 64;
  }
  let obj = { fadeDuration: 0 };
  obj = { uri: importDefault(7127) };
  obj.source = obj;
  obj = { width: num, height: num };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(5119), { width: num, height: num });
};
