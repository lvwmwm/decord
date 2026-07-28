// Module ID: 6976
// Function ID: 59735
// Name: DisplayNameLockeAbstractUI
// Dependencies: [33, 5119, 6977, 2]
// Exports: DisplayNameLockeAbstractUI

// Module 6976 (DisplayNameLockeAbstractUI)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/DisplayNameLockeAbstractUI.native.tsx");

export const DisplayNameLockeAbstractUI = function DisplayNameLockeAbstractUI(width) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 288;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 123;
  }
  let num3 = width.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  let obj = { fadeDuration: 0 };
  obj = { uri: importDefault(6977) };
  obj.source = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(5119), { width: num * num3, height: num2 * num3 });
};
