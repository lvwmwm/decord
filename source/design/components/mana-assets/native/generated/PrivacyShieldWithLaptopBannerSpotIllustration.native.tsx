// Module ID: 7378
// Function ID: 60338
// Name: PrivacyShieldWithLaptopBannerSpotIllustration
// Dependencies: [33, 5119, 7379, 2]
// Exports: PrivacyShieldWithLaptopBannerSpotIllustration

// Module 7378 (PrivacyShieldWithLaptopBannerSpotIllustration)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/PrivacyShieldWithLaptopBannerSpotIllustration.native.tsx");

export const PrivacyShieldWithLaptopBannerSpotIllustration = function PrivacyShieldWithLaptopBannerSpotIllustration(width) {
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
  obj = { uri: importDefault(7379) };
  obj.source = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(5119), { width: num * num3, height: num2 * num3 });
};
