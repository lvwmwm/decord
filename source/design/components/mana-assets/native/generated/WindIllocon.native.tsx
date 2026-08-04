// Module ID: 6755
// Function ID: 6756
// Name: WindIllocon
// Dependencies: [21, 5236, 6756, 2]
// Exports: WindIllocon

// Module 6755 (WindIllocon)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/WindIllocon.native.tsx");

export const WindIllocon = function WindIllocon(size) {
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
  obj[0] = importDefault(6756);
  obj[1] = obj;
  const items = [{ width: num, height: num }];
  obj[2] = items;
  obj[3] = accessible;
  obj[4] = accessibilityLabel;
  obj[5] = resizeMode;
  return jsx(importDefault(5236), { uri: null });
};
