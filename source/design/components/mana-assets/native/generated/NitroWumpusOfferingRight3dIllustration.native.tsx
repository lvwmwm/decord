// Module ID: 7304
// Function ID: 60191
// Name: NitroWumpusOfferingRight3dIllustration
// Dependencies: [33, 5085, 7305, 2]
// Exports: NitroWumpusOfferingRight3dIllustration

// Module 7304 (NitroWumpusOfferingRight3dIllustration)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/NitroWumpusOfferingRight3dIllustration.native.tsx");

export const NitroWumpusOfferingRight3dIllustration = function NitroWumpusOfferingRight3dIllustration(width) {
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
  let obj = { fadeDuration: 0 };
  obj = { uri: importDefault(7305) };
  obj.source = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(5085), { width: num * num3, height: num2 * num3 });
};
