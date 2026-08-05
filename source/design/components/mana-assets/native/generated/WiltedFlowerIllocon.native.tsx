// Module ID: 6738
// Function ID: 6739
// Name: WiltedFlowerIllocon
// Dependencies: [21, 5221, 6739, 2]
// Exports: WiltedFlowerIllocon

// Module 6738 (WiltedFlowerIllocon)
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
  let obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj = { uri: null };
  obj[0] = importDefault(6739);
  obj[1] = obj;
  const items = [{ width: num, height: num }];
  obj[2] = items;
  obj[3] = accessible;
  obj[4] = accessibilityLabel;
  obj[5] = resizeMode;
  return jsx(importDefault(5221), { uri: null });
};
