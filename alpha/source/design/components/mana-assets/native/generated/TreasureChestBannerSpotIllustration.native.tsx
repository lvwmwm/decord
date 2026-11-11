// Module ID: 15306
// Function ID: 15307
// Name: TreasureChestBannerSpotIllustration
// Dependencies: [19, 21, 15307, 15308, 15309, 7689, 5957, 2]
// Exports: TreasureChestBannerSpotIllustration

// Module 15306 (TreasureChestBannerSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7689 */;
import _modDef15307 from "module_15307" /* 15307 */;
import _modDef15308 from "module_15308" /* 15308 */;
import _modDef15309 from "module_15309" /* 15309 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef15307 };
obj[1] = obj2;
let obj3 = { uri: _modDef15308 };
obj[2] = obj3;
obj[3] = { uri: _modDef15309 };
({ uri: _modDef15309 });
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
