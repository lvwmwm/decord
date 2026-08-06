// Module ID: 6561
// Function ID: 6562
// Name: PrivacyShieldBannerSpotIllustration
// Dependencies: [21, 5251, 6562, 2]
// Exports: PrivacyShieldBannerSpotIllustration

// Module 6561 (PrivacyShieldBannerSpotIllustration)
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
  let obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj = { uri: null };
  obj[0] = importDefault(6562);
  obj[1] = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj[2] = items;
  obj[3] = accessible;
  obj[4] = accessibilityLabel;
  obj[5] = resizeMode;
  return jsx(importDefault(5251), { width: num * num3, height: num2 * num3 });
};
