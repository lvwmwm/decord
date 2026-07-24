// Module ID: 6204
// Function ID: 50271
// Name: GiftCardSingle3dIllustration
// Dependencies: [33, 5085, 6205, 2]
// Exports: GiftCardSingle3dIllustration

// Module 6204 (GiftCardSingle3dIllustration)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/GiftCardSingle3dIllustration.native.tsx");

export const GiftCardSingle3dIllustration = function GiftCardSingle3dIllustration(width) {
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
  obj = { uri: importDefault(6205) };
  obj.source = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(5085), { width: num * num3, height: num2 * num3 });
};
