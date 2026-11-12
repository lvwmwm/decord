// Module ID: 15748
// Function ID: 15749
// Name: TreasureChestBannerSpotIllustration
// Dependencies: [19, 21, 15749, 15750, 15751, 7168, 5874, 2]
// Exports: TreasureChestBannerSpotIllustration

// Module 15748 (TreasureChestBannerSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7168 */;
import _modDef15749 from "module_15749" /* 15749 */;
import _modDef15750 from "module_15750" /* 15750 */;
import _modDef15751 from "module_15751" /* 15751 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef15749 };
obj[1] = obj2;
let obj3 = { uri: _modDef15750 };
obj[2] = obj3;
obj[3] = { uri: _modDef15751 };
({ uri: _modDef15751 });
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
