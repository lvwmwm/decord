// Module ID: 5990
// Function ID: 49939
// Name: DevIdentityWideAbstractUI
// Dependencies: [33, 5085, 5991, 2]
// Exports: DevIdentityWideAbstractUI

// Module 5990 (DevIdentityWideAbstractUI)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/DevIdentityWideAbstractUI.native.tsx");

export const DevIdentityWideAbstractUI = function DevIdentityWideAbstractUI(width) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 220;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 152;
  }
  let num3 = width.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  let obj = { fadeDuration: 0 };
  obj = { uri: importDefault(5991) };
  obj.source = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(5085), { width: num * num3, height: num2 * num3 });
};
