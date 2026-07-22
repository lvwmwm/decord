// Module ID: 6547
// Function ID: 50753
// Name: StreamingTier3SmallBadge
// Dependencies: [0, 0, 4294967295, 0]
// Exports: StreamingTier3SmallBadge

// Module 6547 (StreamingTier3SmallBadge)
import { jsx } from "__exportStarResult1";

const result = require("__exportStarResult1").fileFinishedImporting("design/components/mana-assets/native/generated/StreamingTier3SmallBadge.native.tsx");

export const StreamingTier3SmallBadge = function StreamingTier3SmallBadge(width) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 24;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 24;
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
