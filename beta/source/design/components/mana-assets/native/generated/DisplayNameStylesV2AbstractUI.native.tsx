// Module ID: 19438
// Function ID: 19439
// Name: DisplayNameStylesV2AbstractUI
// Dependencies: [19, 21, 19439, 19440, 19441, 7168, 5874, 2]
// Exports: DisplayNameStylesV2AbstractUI

// Module 19438 (DisplayNameStylesV2AbstractUI)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7168 */;
import _modDef19439 from "module_19439" /* 19439 */;
import _modDef19440 from "module_19440" /* 19440 */;
import _modDef19441 from "module_19441" /* 19441 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef19439 };
obj[1] = obj2;
let obj3 = { uri: _modDef19440 };
obj[2] = obj3;
obj[3] = { uri: _modDef19441 };
({ uri: _modDef19441 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/DisplayNameStylesV2AbstractUI.native.tsx");

export function DisplayNameStylesV2AbstractUI(width) {
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
