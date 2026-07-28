// Module ID: 7576
// Function ID: 60635
// Name: WiltedFlowerIllocon
// Dependencies: [33, 5119, 7577, 2]
// Exports: WiltedFlowerIllocon

// Module 7576 (WiltedFlowerIllocon)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/WiltedFlowerIllocon.native.tsx");

export const WiltedFlowerIllocon = function WiltedFlowerIllocon(size) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let num = size.size;
  ({ accessible, accessibilityLabel, resizeMode } = size);
  if (num === undefined) {
    num = 64;
  }
  let obj = { fadeDuration: 0 };
  obj = { uri: importDefault(7577) };
  obj.source = obj;
  obj = { width: num, height: num };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(5119), { width: num, height: num });
};
