// Module ID: 6549
// Function ID: 50745
// Name: StreamingTier4LargeBadge
// Dependencies: [0, 0, 4294967295, 0]
// Exports: StreamingTier4LargeBadge

// Module 6549 (StreamingTier4LargeBadge)
import { jsx } from "result";
import result from "result";

result = result.fileFinishedImporting("design/components/mana-assets/native/generated/StreamingTier4LargeBadge.native.tsx");

export const StreamingTier4LargeBadge = function StreamingTier4LargeBadge(width) {
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
