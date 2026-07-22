// Module ID: 6163
// Function ID: 50177
// Name: GemLeftUpwards3dIllustration
// Dependencies: [4294967295, 0, 4294967295, 0]
// Exports: GemLeftUpwards3dIllustration

// Module 6163 (GemLeftUpwards3dIllustration)
const jsx = require(dependencyMap[0]).jsx;
const result = require("__exportStarResult1").fileFinishedImporting("design/components/mana-assets/native/generated/GemLeftUpwards3dIllustration.native.tsx");

export const GemLeftUpwards3dIllustration = function GemLeftUpwards3dIllustration(width) {
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
