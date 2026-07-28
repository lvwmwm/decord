// Module ID: 7280
// Function ID: 60191
// Name: NitroEmeraldBadgeSmallBadge
// Dependencies: [33, 5119, 7281, 2]
// Exports: NitroEmeraldBadgeSmallBadge

// Module 7280 (NitroEmeraldBadgeSmallBadge)
import { jsx } from "jsxProd";

const result = require("vanityUrl").fileFinishedImporting("design/components/mana-assets/native/generated/NitroEmeraldBadgeSmallBadge.native.tsx");

export const NitroEmeraldBadgeSmallBadge = function NitroEmeraldBadgeSmallBadge(width) {
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
  obj = { uri: importDefault(7281) };
  obj.source = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(5119), { width: num * num3, height: num2 * num3 });
};
