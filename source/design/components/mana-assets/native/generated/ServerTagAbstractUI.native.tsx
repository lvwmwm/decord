// Module ID: 6493
// Function ID: 50661
// Name: ServerTagAbstractUI
// Dependencies: [33554457, 1946157056, 33, 5232]
// Exports: ServerTagAbstractUI

// Module 6493 (ServerTagAbstractUI)
import preload from "preload";

const jsx = require(dependencyMap[0]).jsx;
const result = preload.fileFinishedImporting("design/components/mana-assets/native/generated/ServerTagAbstractUI.native.tsx");

export const ServerTagAbstractUI = function ServerTagAbstractUI(width) {
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
