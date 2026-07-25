// Module ID: 6968
// Function ID: 59687
// Name: ExperimentalMarvelRivalsWidgetAbstractUI
// Dependencies: [33, 5085, 6969, 2]
// Exports: ExperimentalMarvelRivalsWidgetAbstractUI

// Module 6968 (ExperimentalMarvelRivalsWidgetAbstractUI)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/ExperimentalMarvelRivalsWidgetAbstractUI.native.tsx");

export const ExperimentalMarvelRivalsWidgetAbstractUI = function ExperimentalMarvelRivalsWidgetAbstractUI(width) {
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
  obj = { uri: importDefault(6969) };
  obj.source = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(5085), { width: num * num3, height: num2 * num3 });
};
