// Module ID: 7196
// Function ID: 60065
// Name: GoatIllocon
// Dependencies: [33, 5119, 7197, 2]
// Exports: GoatIllocon

// Module 7196 (GoatIllocon)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/GoatIllocon.native.tsx");

export const GoatIllocon = function GoatIllocon(size) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let num = size.size;
  ({ accessible, accessibilityLabel, resizeMode } = size);
  if (num === undefined) {
    num = 64;
  }
  let obj = { fadeDuration: 0 };
  obj = { uri: importDefault(7197) };
  obj.source = obj;
  obj = { width: num, height: num };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(5119), { width: num, height: num });
};
