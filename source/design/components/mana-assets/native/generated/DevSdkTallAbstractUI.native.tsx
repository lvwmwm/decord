// Module ID: 6952
// Function ID: 59699
// Name: DevSdkTallAbstractUI
// Dependencies: [33, 5119, 6953, 2]
// Exports: DevSdkTallAbstractUI

// Module 6952 (DevSdkTallAbstractUI)
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
  obj = { uri: importDefault(6953) };
  obj.source = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(5119), { width: num * num3, height: num2 * num3 });
};
