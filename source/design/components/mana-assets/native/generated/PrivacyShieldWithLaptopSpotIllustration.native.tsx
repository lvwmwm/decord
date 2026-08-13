// Module ID: 6689
// Function ID: 6690
// Name: PrivacyShieldWithLaptopSpotIllustration
// Dependencies: [21, 5308, 6690, 2]
// Exports: PrivacyShieldWithLaptopSpotIllustration

// Module 6689 (PrivacyShieldWithLaptopSpotIllustration)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/PrivacyShieldWithLaptopSpotIllustration.native.tsx");

export const PrivacyShieldWithLaptopSpotIllustration = function PrivacyShieldWithLaptopSpotIllustration(width) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 288;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 192;
  }
  let num3 = width.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  let obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj = { uri: null };
  obj[0] = importDefault(6690);
  obj[1] = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj[2] = items;
  obj[3] = accessible;
  obj[4] = accessibilityLabel;
  obj[5] = resizeMode;
  return jsx(importDefault(5308), { width: num * num3, height: num2 * num3 });
};
