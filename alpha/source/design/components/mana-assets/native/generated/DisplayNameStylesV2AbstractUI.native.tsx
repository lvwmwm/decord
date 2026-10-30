// Module ID: 18977
// Function ID: 18978
// Name: DisplayNameStylesV2AbstractUI
// Dependencies: [19, 21, 18978, 18979, 18980, 7063, 5712, 2]
// Exports: DisplayNameStylesV2AbstractUI

// Module 18977 (DisplayNameStylesV2AbstractUI)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7063 */;
import _modDef18978 from "module_18978" /* 18978 */;
import _modDef18979 from "module_18979" /* 18979 */;
import _modDef18980 from "module_18980" /* 18980 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18978 };
obj[1] = obj2;
let obj3 = { uri: _modDef18979 };
obj[2] = obj3;
obj[3] = { uri: _modDef18980 };
({ uri: _modDef18980 });
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
