// Module ID: 6544
// Function ID: 50781
// Name: StreamingTier1SmallBadge
// Dependencies: [33, 5085, 6545, 2]
// Exports: StreamingTier1SmallBadge

// Module 6544 (StreamingTier1SmallBadge)
import { jsx } from "jsxProd";

const result = require("vanityUrl").fileFinishedImporting("design/components/mana-assets/native/generated/StreamingTier1SmallBadge.native.tsx");

export const StreamingTier1SmallBadge = function StreamingTier1SmallBadge(width) {
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
  obj = { uri: importDefault(6545) };
  obj.source = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(5085), { width: num * num3, height: num2 * num3 });
};
