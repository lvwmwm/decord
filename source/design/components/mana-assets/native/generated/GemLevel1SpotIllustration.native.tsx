// Module ID: 6167
// Function ID: 50172
// Name: GemLevel1SpotIllustration
// Dependencies: [4294967295, 0, 0, 0]
// Exports: GemLevel1SpotIllustration

// Module 6167 (GemLevel1SpotIllustration)
import result from "result";

const jsx = require(dependencyMap[0]).jsx;
result = result.fileFinishedImporting("design/components/mana-assets/native/generated/GemLevel1SpotIllustration.native.tsx");

export const GemLevel1SpotIllustration = function GemLevel1SpotIllustration(width) {
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
