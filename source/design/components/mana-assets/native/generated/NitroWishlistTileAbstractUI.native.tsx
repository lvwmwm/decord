// Module ID: 7322
// Function ID: 60254
// Name: NitroWishlistTileAbstractUI
// Dependencies: [33, 5119, 7323, 2]
// Exports: NitroWishlistTileAbstractUI

// Module 7322 (NitroWishlistTileAbstractUI)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/NitroWishlistTileAbstractUI.native.tsx");

export const NitroWishlistTileAbstractUI = function NitroWishlistTileAbstractUI(width) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 133;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 175;
  }
  let num3 = width.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  let obj = { fadeDuration: 0 };
  obj = { uri: importDefault(7323) };
  obj.source = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(5119), { width: num * num3, height: num2 * num3 });
};
