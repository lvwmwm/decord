// Module ID: 6484
// Function ID: 50691
// Name: ServerIconLilQuackSPondverseExample
// Dependencies: [33, 5085, 6485, 2]
// Exports: ServerIconLilQuackSPondverseExample

// Module 6484 (ServerIconLilQuackSPondverseExample)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/ServerIconLilQuackSPondverseExample.native.tsx");

export const ServerIconLilQuackSPondverseExample = function ServerIconLilQuackSPondverseExample(width) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 100;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 100;
  }
  let num3 = width.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  let obj = { fadeDuration: 0 };
  obj = { uri: importDefault(6485) };
  obj.source = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(5085), { width: num * num3, height: num2 * num3 });
};
