// Module ID: 6948
// Function ID: 59693
// Name: DevQuestsTallAbstractUI
// Dependencies: [33, 5119, 6949, 2]
// Exports: DevQuestsTallAbstractUI

// Module 6948 (DevQuestsTallAbstractUI)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/DevQuestsTallAbstractUI.native.tsx");

export const DevQuestsTallAbstractUI = function DevQuestsTallAbstractUI(width) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 116;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 172;
  }
  let num3 = width.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  let obj = { fadeDuration: 0 };
  obj = { uri: importDefault(6949) };
  obj.source = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(5119), { width: num * num3, height: num2 * num3 });
};
