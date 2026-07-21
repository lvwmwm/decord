// Module ID: 6019
// Function ID: 49942
// Name: DisplayNameStylesV2AbstractUI
// Dependencies: []
// Exports: DisplayNameStylesV2AbstractUI

// Module 6019 (DisplayNameStylesV2AbstractUI)
const jsx = require(dependencyMap[0]).jsx;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("design/components/mana-assets/native/generated/DisplayNameStylesV2AbstractUI.native.tsx");

export const DisplayNameStylesV2AbstractUI = function DisplayNameStylesV2AbstractUI(width) {
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
