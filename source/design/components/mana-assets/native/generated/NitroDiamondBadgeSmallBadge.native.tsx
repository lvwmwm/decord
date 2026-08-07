// Module ID: 6478
// Function ID: 6479
// Name: NitroDiamondBadgeSmallBadge
// Dependencies: [21, 5267, 6479, 2]
// Exports: NitroDiamondBadgeSmallBadge

// Module 6478 (NitroDiamondBadgeSmallBadge)
import { jsx } from "jsxProd";

const result = require("vanityUrl").fileFinishedImporting("design/components/mana-assets/native/generated/NitroDiamondBadgeSmallBadge.native.tsx");

export const NitroDiamondBadgeSmallBadge = function NitroDiamondBadgeSmallBadge(width) {
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
  let obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj = { uri: null };
  obj[0] = importDefault(6479);
  obj[1] = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj[2] = items;
  obj[3] = accessible;
  obj[4] = accessibilityLabel;
  obj[5] = resizeMode;
  return jsx(importDefault(5267), { width: num * num3, height: num2 * num3 });
};
