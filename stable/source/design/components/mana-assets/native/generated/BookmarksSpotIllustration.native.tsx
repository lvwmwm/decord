// Module ID: 11347
// Function ID: 11348
// Name: BookmarksSpotIllustration
// Dependencies: [19, 21, 11348, 11349, 11350, 7168, 5874, 2]
// Exports: BookmarksSpotIllustration

// Module 11347 (BookmarksSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7168 */;
import _modDef11348 from "module_11348" /* 11348 */;
import _modDef11349 from "module_11349" /* 11349 */;
import _modDef11350 from "module_11350" /* 11350 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef11348 };
obj[1] = obj2;
let obj3 = { uri: _modDef11349 };
obj[2] = obj3;
obj[3] = { uri: _modDef11350 };
({ uri: _modDef11350 });
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
