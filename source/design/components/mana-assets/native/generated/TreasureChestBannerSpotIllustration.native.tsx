// Module ID: 7554
// Function ID: 60602
// Name: TreasureChestBannerSpotIllustration
// Dependencies: [33, 5119, 7555, 2]
// Exports: TreasureChestBannerSpotIllustration

// Module 7554 (TreasureChestBannerSpotIllustration)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/TreasureChestBannerSpotIllustration.native.tsx");

export const TreasureChestBannerSpotIllustration = function TreasureChestBannerSpotIllustration(width) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 173;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 138;
  }
  let num3 = width.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  let obj = { fadeDuration: 0 };
  obj = { uri: importDefault(7555) };
  obj.source = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(5119), { width: num * num3, height: num2 * num3 });
};
