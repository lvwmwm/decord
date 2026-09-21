// Module ID: 6228
// Function ID: 6229
// Name: FavoritesSpotIllustration
// Dependencies: [21, 5804, 6229, 2]
// Exports: FavoritesSpotIllustration

// Module 6228 (FavoritesSpotIllustration)
import jsxProd from "jsxProd" /* 21 */;
import FastImageDefault from "FastImage" /* 5804 */;
import _modDef6229 from "module_6229" /* 6229 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/FavoritesSpotIllustration.native.tsx");

export const FavoritesSpotIllustration = function FavoritesSpotIllustration(width) {
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 288;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 162;
  }
  let num3 = width.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  const obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  const obj2 = { uri: _modDef6229 };
  obj.source = obj2;
  const size = { width: num * num3, height: num2 * num3 };
  const items = [size];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(FastImageDefault, { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null });
};
