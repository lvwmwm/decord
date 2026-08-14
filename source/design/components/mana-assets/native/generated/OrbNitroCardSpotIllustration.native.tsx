// Module ID: 6678
// Function ID: 6679
// Name: OrbNitroCardSpotIllustration
// Dependencies: [21, 5329, 6679, 2]
// Exports: OrbNitroCardSpotIllustration

// Module 6678 (OrbNitroCardSpotIllustration)
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
  obj[0] = importDefault(6679);
  obj[1] = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj[2] = items;
  obj[3] = accessible;
  obj[4] = accessibilityLabel;
  obj[5] = resizeMode;
  return jsx(importDefault(5329), { width: num * num3, height: num2 * num3 });
};
