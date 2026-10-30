// Module ID: 11164
// Function ID: 11165
// Name: BookmarksSpotIllustration
// Dependencies: [19, 21, 11165, 11166, 11167, 7063, 5712, 2]
// Exports: BookmarksSpotIllustration

// Module 11164 (BookmarksSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7063 */;
import _modDef11165 from "module_11165" /* 11165 */;
import _modDef11166 from "module_11166" /* 11166 */;
import _modDef11167 from "module_11167" /* 11167 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef11165 };
obj[1] = obj2;
let obj3 = { uri: _modDef11166 };
obj[2] = obj3;
obj[3] = { uri: _modDef11167 };
({ uri: _modDef11167 });
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
