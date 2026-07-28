// Module ID: 6848
// Function ID: 59543
// Name: BadgePacksAbstractUI
// Dependencies: [33, 5119, 6849, 2]
// Exports: BadgePacksAbstractUI

// Module 6848 (BadgePacksAbstractUI)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/BadgePacksAbstractUI.native.tsx");

export const BadgePacksAbstractUI = function BadgePacksAbstractUI(width) {
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
    num2 = 192;
  }
  let num3 = width.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  let obj = { fadeDuration: 0 };
  obj = { uri: importDefault(6849) };
  obj.source = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(5119), { width: num * num3, height: num2 * num3 });
};
