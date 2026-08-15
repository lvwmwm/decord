// Module ID: 5628
// Function ID: 5629
// Name: DevIdentityTallAbstractUI
// Dependencies: [21, 5449, 5629, 2]
// Exports: DevIdentityTallAbstractUI

// Module 5628 (DevIdentityTallAbstractUI)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/DevIdentityTallAbstractUI.native.tsx");

export const DevIdentityTallAbstractUI = function DevIdentityTallAbstractUI(width) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 126;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 184;
  }
  let num3 = width.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  let obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj = { uri: null };
  obj[0] = importDefault(5629);
  obj[1] = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj[2] = items;
  obj[3] = accessible;
  obj[4] = accessibilityLabel;
  obj[5] = resizeMode;
  return jsx(importDefault(5449), { width: num * num3, height: num2 * num3 });
};
