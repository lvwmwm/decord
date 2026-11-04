// Module ID: 19033
// Function ID: 19034
// Name: DisplayNameStylesV2AbstractUI
// Dependencies: [19, 21, 19034, 19035, 19036, 7069, 5717, 2]
// Exports: DisplayNameStylesV2AbstractUI

// Module 19033 (DisplayNameStylesV2AbstractUI)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7069 */;
import _modDef19034 from "module_19034" /* 19034 */;
import _modDef19035 from "module_19035" /* 19035 */;
import _modDef19036 from "module_19036" /* 19036 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef19034 };
obj[1] = obj2;
let obj3 = { uri: _modDef19035 };
obj[2] = obj3;
obj[3] = { uri: _modDef19036 };
({ uri: _modDef19036 });
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
