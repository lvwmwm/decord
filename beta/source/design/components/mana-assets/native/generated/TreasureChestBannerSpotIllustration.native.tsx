// Module ID: 14153
// Function ID: 14154
// Name: TreasureChestBannerSpotIllustration
// Dependencies: [19, 21, 14154, 14155, 14156, 7357, 5600, 2]
// Exports: TreasureChestBannerSpotIllustration

// Module 14153 (TreasureChestBannerSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7357 */;
import _modDef14154 from "module_14154" /* 14154 */;
import _modDef14155 from "module_14155" /* 14155 */;
import _modDef14156 from "module_14156" /* 14156 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14154 };
obj[1] = obj2;
let obj3 = { uri: _modDef14155 };
obj[2] = obj3;
obj[3] = { uri: _modDef14156 };
({ uri: _modDef14156 });
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
