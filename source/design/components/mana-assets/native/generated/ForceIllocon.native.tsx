// Module ID: 7022
// Function ID: 59804
// Name: ForceIllocon
// Dependencies: [33, 5119, 7023, 2]
// Exports: ForceIllocon

// Module 7022 (ForceIllocon)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/ForceIllocon.native.tsx");

export const ForceIllocon = function ForceIllocon(size) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let num = size.size;
  ({ accessible, accessibilityLabel, resizeMode } = size);
  if (num === undefined) {
    num = 64;
  }
  let obj = { fadeDuration: 0 };
  obj = { uri: importDefault(7023) };
  obj.source = obj;
  obj = { width: num, height: num };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(5119), { width: num, height: num });
};
