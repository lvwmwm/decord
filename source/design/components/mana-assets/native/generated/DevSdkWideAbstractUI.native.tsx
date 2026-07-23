// Module ID: 5998
// Function ID: 49951
// Name: DevSdkWideAbstractUI
// Dependencies: [33, 5085, 5999, 2]
// Exports: DevSdkWideAbstractUI

// Module 5998 (DevSdkWideAbstractUI)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/DevSdkWideAbstractUI.native.tsx");

export const DevSdkWideAbstractUI = function DevSdkWideAbstractUI(width) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 192;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 150;
  }
  let num3 = width.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  let obj = { fadeDuration: 0 };
  obj = { uri: importDefault(5999) };
  obj.source = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(5085), { width: num * num3, height: num2 * num3 });
};
