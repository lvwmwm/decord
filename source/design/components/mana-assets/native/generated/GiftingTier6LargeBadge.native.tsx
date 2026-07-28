// Module ID: 7192
// Function ID: 60059
// Name: GiftingTier6LargeBadge
// Dependencies: [33, 5119, 7193, 2]
// Exports: GiftingTier6LargeBadge

// Module 7192 (GiftingTier6LargeBadge)
import { jsx } from "jsxProd";

const result = require("vanityUrl").fileFinishedImporting("design/components/mana-assets/native/generated/GiftingTier6LargeBadge.native.tsx");

export const GiftingTier6LargeBadge = function GiftingTier6LargeBadge(width) {
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
  obj = { uri: importDefault(7193) };
  obj.source = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(5119), { width: num * num3, height: num2 * num3 });
};
