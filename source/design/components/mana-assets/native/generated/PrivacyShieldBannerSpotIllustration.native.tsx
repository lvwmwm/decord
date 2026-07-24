// Module ID: 6420
// Function ID: 50595
// Name: PrivacyShieldBannerSpotIllustration
// Dependencies: [33, 5085, 6421, 2]
// Exports: PrivacyShieldBannerSpotIllustration

// Module 6420 (PrivacyShieldBannerSpotIllustration)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/PrivacyShieldBannerSpotIllustration.native.tsx");

export const PrivacyShieldBannerSpotIllustration = function PrivacyShieldBannerSpotIllustration(width) {
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
  obj = { uri: importDefault(6421) };
  obj.source = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(5085), { width: num * num3, height: num2 * num3 });
};
