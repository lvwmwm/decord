// Module ID: 6212
// Function ID: 6213
// Name: DevQuestsWideAbstractUI
// Dependencies: [21, 5268, 6213, 2]
// Exports: DevQuestsWideAbstractUI

// Module 6212 (DevQuestsWideAbstractUI)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/DevQuestsWideAbstractUI.native.tsx");

export const DevQuestsWideAbstractUI = function DevQuestsWideAbstractUI(width) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 244;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 132;
  }
  let num3 = width.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  let obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj = { uri: null };
  obj[0] = importDefault(6213);
  obj[1] = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj[2] = items;
  obj[3] = accessible;
  obj[4] = accessibilityLabel;
  obj[5] = resizeMode;
  return jsx(importDefault(5268), { width: num * num3, height: num2 * num3 });
};
