// Module ID: 11231
// Function ID: 11232
// Name: FavoritesSpotIllustration
// Dependencies: [19, 21, 11232, 11233, 11234, 7357, 5600, 2]
// Exports: FavoritesSpotIllustration

// Module 11231 (FavoritesSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7357 */;
import _modDef11232 from "module_11232" /* 11232 */;
import _modDef11233 from "module_11233" /* 11233 */;
import _modDef11234 from "module_11234" /* 11234 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef11232 };
obj[1] = obj2;
let obj3 = { uri: _modDef11233 };
obj[2] = obj3;
obj[3] = { uri: _modDef11234 };
({ uri: _modDef11234 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/FavoritesSpotIllustration.native.tsx");

export function FavoritesSpotIllustration(width) {
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
    size = { width, height, scale: num, intrinsicWidth: 288, intrinsicHeight: 162 };
    obj = react_native;
    return obj.getAssetSizeStyle(size);
  }, items);
  obj = { fadeDuration: 0, source: obj2.getAssetSource(obj), style: memo, accessible, accessibilityLabel, resizeMode: obj3.getAssetResizeMode(resizeMode) };
  height(num[6]);
  obj2 = width(num[5]);
  obj3 = width(num[5]);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={obj3.getAssetResizeMode(resizeMode)} />;
}
