// Module ID: 5996
// Function ID: 49959
// Name: DevSdkTallAbstractUI
// Dependencies: [33, 5085, 5997, 2]
// Exports: DevSdkTallAbstractUI

// Module 5996 (DevSdkTallAbstractUI)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/DevSdkTallAbstractUI.native.tsx");

export const DevSdkTallAbstractUI = function DevSdkTallAbstractUI(width) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 140;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 120;
  }
  let num3 = width.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  let obj = { fadeDuration: 0 };
  obj = { uri: importDefault(5997) };
  obj.source = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(5085), { width: num * num3, height: num2 * num3 });
};
