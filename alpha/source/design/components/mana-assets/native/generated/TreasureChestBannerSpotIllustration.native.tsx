// Module ID: 15388
// Function ID: 15389
// Name: TreasureChestBannerSpotIllustration
// Dependencies: [19, 21, 15389, 15390, 15391, 7063, 5712, 2]
// Exports: TreasureChestBannerSpotIllustration

// Module 15388 (TreasureChestBannerSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7063 */;
import _modDef15389 from "module_15389" /* 15389 */;
import _modDef15390 from "module_15390" /* 15390 */;
import _modDef15391 from "module_15391" /* 15391 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef15389 };
obj[1] = obj2;
let obj3 = { uri: _modDef15390 };
obj[2] = obj3;
obj[3] = { uri: _modDef15391 };
({ uri: _modDef15391 });
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
