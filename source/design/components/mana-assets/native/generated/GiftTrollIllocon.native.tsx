// Module ID: 6341
// Function ID: 6342
// Name: GiftTrollIllocon
// Dependencies: [21, 5236, 6342, 2]
// Exports: GiftTrollIllocon

// Module 6341 (GiftTrollIllocon)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/GiftTrollIllocon.native.tsx");

export const GiftTrollIllocon = function GiftTrollIllocon(size) {
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
  obj[0] = importDefault(6342);
  obj[1] = obj;
  const items = [{ width: num, height: num }];
  obj[2] = items;
  obj[3] = accessible;
  obj[4] = accessibilityLabel;
  obj[5] = resizeMode;
  return jsx(importDefault(5236), { uri: null });
};
