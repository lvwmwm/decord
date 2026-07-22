// Module ID: 6551
// Function ID: 50759
// Name: StreamingTier4SmallBadge
// Dependencies: [0, 0, 4294967295, 0]
// Exports: StreamingTier4SmallBadge

// Module 6551 (StreamingTier4SmallBadge)
import { jsx } from "__exportStarResult1";

const result = require("__exportStarResult1").fileFinishedImporting("design/components/mana-assets/native/generated/StreamingTier4SmallBadge.native.tsx");

export const StreamingTier4SmallBadge = function StreamingTier4SmallBadge(width) {
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
