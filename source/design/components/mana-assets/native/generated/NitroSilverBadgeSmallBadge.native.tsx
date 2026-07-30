// Module ID: 7329
// Function ID: 7330
// Name: NitroSilverBadgeSmallBadge
// Dependencies: [21, 5141, 7330, 2]
// Exports: NitroSilverBadgeSmallBadge

// Module 7329 (NitroSilverBadgeSmallBadge)
import { jsx } from "jsxProd";

const result = require("vanityUrl").fileFinishedImporting("design/components/mana-assets/native/generated/NitroSilverBadgeSmallBadge.native.tsx");

export const NitroSilverBadgeSmallBadge = function NitroSilverBadgeSmallBadge(width) {
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
  obj[0] = importDefault(7330);
  obj[1] = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj[2] = items;
  obj[3] = accessible;
  obj[4] = accessibilityLabel;
  obj[5] = resizeMode;
  return jsx(importDefault(5141), { width: num * num3, height: num2 * num3 });
};
