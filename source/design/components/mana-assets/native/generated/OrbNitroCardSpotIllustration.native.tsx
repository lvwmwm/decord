// Module ID: 6521
// Function ID: 6522
// Name: OrbNitroCardSpotIllustration
// Dependencies: [21, 5236, 6522, 2]
// Exports: OrbNitroCardSpotIllustration

// Module 6521 (OrbNitroCardSpotIllustration)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/OrbNitroCardSpotIllustration.native.tsx");

export const OrbNitroCardSpotIllustration = function OrbNitroCardSpotIllustration(width) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 144;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 144;
  }
  let num3 = width.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  let obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj = { uri: null };
  obj[0] = importDefault(6522);
  obj[1] = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj[2] = items;
  obj[3] = accessible;
  obj[4] = accessibilityLabel;
  obj[5] = resizeMode;
  return jsx(importDefault(5236), { width: num * num3, height: num2 * num3 });
};
