// Module ID: 15431
// Function ID: 15432
// Name: TreasureChestBannerSpotIllustration
// Dependencies: [19, 21, 15432, 15433, 15434, 7069, 5717, 2]
// Exports: TreasureChestBannerSpotIllustration

// Module 15431 (TreasureChestBannerSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7069 */;
import _modDef15432 from "module_15432" /* 15432 */;
import _modDef15433 from "module_15433" /* 15433 */;
import _modDef15434 from "module_15434" /* 15434 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef15432 };
obj[1] = obj2;
let obj3 = { uri: _modDef15433 };
obj[2] = obj3;
obj[3] = { uri: _modDef15434 };
({ uri: _modDef15434 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/TreasureChestBannerSpotIllustration.native.tsx");

export function TreasureChestBannerSpotIllustration(width) {
  let accessibilityLabel;
  let accessible;
  let obj2;
  let obj3;
  let resizeMode;
  width = width.width;
  const height = width.height;
  let num = width.scale;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 1;
  }
  const items = [width, height, num];
  const memo = react.useMemo(() => {
    size = { width, height, scale: num, intrinsicWidth: 173, intrinsicHeight: 138 };
    obj = react_native;
    return obj.getAssetSizeStyle(size);
  }, items);
  obj = { fadeDuration: 0, source: obj2.getAssetSource(obj), style: memo, accessible, accessibilityLabel, resizeMode: obj3.getAssetResizeMode(resizeMode) };
  height(num[6]);
  obj2 = width(num[5]);
  obj3 = width(num[5]);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={obj3.getAssetResizeMode(resizeMode)} />;
}
