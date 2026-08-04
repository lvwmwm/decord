// Module ID: 6057
// Function ID: 6058
// Name: CampfireSceneSpotIllustration
// Dependencies: [21, 5236, 6058, 2]
// Exports: CampfireSceneSpotIllustration

// Module 6057 (CampfireSceneSpotIllustration)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/CampfireSceneSpotIllustration.native.tsx");

export const CampfireSceneSpotIllustration = function CampfireSceneSpotIllustration(width) {
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
    num2 = 123;
  }
  let num3 = width.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  let obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj = { uri: null };
  obj[0] = importDefault(6058);
  obj[1] = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj[2] = items;
  obj[3] = accessible;
  obj[4] = accessibilityLabel;
  obj[5] = resizeMode;
  return jsx(importDefault(5236), { width: num * num3, height: num2 * num3 });
};
