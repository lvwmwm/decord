// Module ID: 6359
// Function ID: 50412
// Name: NitroWishlistTileAbstractUI
// Dependencies: []
// Exports: NitroWishlistTileAbstractUI

// Module 6359 (NitroWishlistTileAbstractUI)
const jsx = require(dependencyMap[0]).jsx;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("design/components/mana-assets/native/generated/NitroWishlistTileAbstractUI.native.tsx");

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
  obj = { uri: importDefault(dependencyMap[2]) };
  obj.source = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(dependencyMap[1]), obj);
};
