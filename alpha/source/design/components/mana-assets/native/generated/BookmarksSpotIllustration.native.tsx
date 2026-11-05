// Module ID: 11378
// Function ID: 11379
// Name: BookmarksSpotIllustration
// Dependencies: [19, 21, 11379, 11380, 11381, 7213, 5854, 2]
// Exports: BookmarksSpotIllustration

// Module 11378 (BookmarksSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7213 */;
import _modDef11379 from "module_11379" /* 11379 */;
import _modDef11380 from "module_11380" /* 11380 */;
import _modDef11381 from "module_11381" /* 11381 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef11379 };
obj[1] = obj2;
let obj3 = { uri: _modDef11380 };
obj[2] = obj3;
obj[3] = { uri: _modDef11381 };
({ uri: _modDef11381 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/BookmarksSpotIllustration.native.tsx");

export function BookmarksSpotIllustration(width) {
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
    size = { width, height, scale: num, intrinsicWidth: 288, intrinsicHeight: 192 };
    obj = react_native;
    return obj.getAssetSizeStyle(size);
  }, items);
  obj = { fadeDuration: 0, source: obj2.getAssetSource(obj), style: memo, accessible, accessibilityLabel, resizeMode: obj3.getAssetResizeMode(resizeMode) };
  height(num[6]);
  obj2 = width(num[5]);
  obj3 = width(num[5]);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={obj3.getAssetResizeMode(resizeMode)} />;
}
