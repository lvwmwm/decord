// Module ID: 6591
// Function ID: 6592
// Name: GiftingTier4SmallBadge
// Dependencies: [21, 5374, 6592, 2]
// Exports: GiftingTier4SmallBadge

// Module 6591 (GiftingTier4SmallBadge)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import preloadDefault from "preload" /* 5374 */;
import vanityUrlDefault from "vanityUrl" /* 6592 */;

const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("design/components/mana-assets/native/generated/GiftingTier4SmallBadge.native.tsx");

export const GiftingTier4SmallBadge = function GiftingTier4SmallBadge(width) {
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 24;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 24;
  }
  let num3 = width.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  let obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj = { uri: vanityUrlDefault };
  obj[1] = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj[2] = items;
  obj[3] = accessible;
  obj[4] = accessibilityLabel;
  obj[5] = resizeMode;
  return jsx(preloadDefault, { width: num * num3, height: num2 * num3 });
};
