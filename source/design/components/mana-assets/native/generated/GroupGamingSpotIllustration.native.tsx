// Module ID: 6235
// Function ID: 50226
// Name: GroupGamingSpotIllustration
// Dependencies: [33554456, 1946157056, 33, 5231]
// Exports: GroupGamingSpotIllustration

// Module 6235 (GroupGamingSpotIllustration)
import preload from "preload";

const jsx = require(dependencyMap[0]).jsx;
const result = preload.fileFinishedImporting("design/components/mana-assets/native/generated/GroupGamingSpotIllustration.native.tsx");

export const GroupGamingSpotIllustration = function GroupGamingSpotIllustration(width) {
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
