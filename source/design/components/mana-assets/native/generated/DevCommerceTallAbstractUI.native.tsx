// Module ID: 6940
// Function ID: 59681
// Name: DevCommerceTallAbstractUI
// Dependencies: [33, 5119, 6941, 2]
// Exports: DevCommerceTallAbstractUI

// Module 6940 (DevCommerceTallAbstractUI)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/DevCommerceTallAbstractUI.native.tsx");

export const DevCommerceTallAbstractUI = function DevCommerceTallAbstractUI(width) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 122;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 180;
  }
  let num3 = width.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  let obj = { fadeDuration: 0 };
  obj = { uri: importDefault(6941) };
  obj.source = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(5119), { width: num * num3, height: num2 * num3 });
};
