// Module ID: 7000
// Function ID: 59771
// Name: ExperimentalGameWidgetsAbstractUI
// Dependencies: [33, 5119, 7001, 2]
// Exports: ExperimentalGameWidgetsAbstractUI

// Module 7000 (ExperimentalGameWidgetsAbstractUI)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/ExperimentalGameWidgetsAbstractUI.native.tsx");

export const ExperimentalGameWidgetsAbstractUI = function ExperimentalGameWidgetsAbstractUI(width) {
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
    num2 = 162;
  }
  let num3 = width.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  let obj = { fadeDuration: 0 };
  obj = { uri: importDefault(7001) };
  obj.source = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(5119), { width: num * num3, height: num2 * num3 });
};
