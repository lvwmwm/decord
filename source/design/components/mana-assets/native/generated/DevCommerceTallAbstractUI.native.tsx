// Module ID: 5984
// Function ID: 49941
// Name: DevCommerceTallAbstractUI
// Dependencies: [33, 5085, 5985, 2]
// Exports: DevCommerceTallAbstractUI

// Module 5984 (DevCommerceTallAbstractUI)
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
  obj = { uri: importDefault(5985) };
  obj.source = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(5085), { width: num * num3, height: num2 * num3 });
};
