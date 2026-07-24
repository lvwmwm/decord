// Module ID: 5988
// Function ID: 49947
// Name: DevIdentityTallAbstractUI
// Dependencies: [33, 5085, 5989, 2]
// Exports: DevIdentityTallAbstractUI

// Module 5988 (DevIdentityTallAbstractUI)
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
  let obj = { fadeDuration: 0 };
  obj = { uri: importDefault(5989) };
  obj.source = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(5085), { width: num * num3, height: num2 * num3 });
};
