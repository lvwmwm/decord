// Module ID: 7274
// Function ID: 60182
// Name: NitroDiamondBadgeLargeBadge
// Dependencies: [33, 5119, 7275, 2]
// Exports: NitroDiamondBadgeLargeBadge

// Module 7274 (NitroDiamondBadgeLargeBadge)
import { jsx } from "jsxProd";

const result = require("vanityUrl").fileFinishedImporting("design/components/mana-assets/native/generated/NitroDiamondBadgeLargeBadge.native.tsx");

export const NitroDiamondBadgeLargeBadge = function NitroDiamondBadgeLargeBadge(width) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 114;
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
  obj = { uri: importDefault(7275) };
  obj.source = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(5119), { width: num * num3, height: num2 * num3 });
};
