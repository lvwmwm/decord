// Module ID: 6946
// Function ID: 59690
// Name: DevIdentityWideAbstractUI
// Dependencies: [33, 5119, 6947, 2]
// Exports: DevIdentityWideAbstractUI

// Module 6946 (DevIdentityWideAbstractUI)
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
  obj = { uri: importDefault(6947) };
  obj.source = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(5119), { width: num * num3, height: num2 * num3 });
};
