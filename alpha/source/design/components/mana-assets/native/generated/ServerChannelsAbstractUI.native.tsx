// Module ID: 14852
// Function ID: 14853
// Name: ServerChannelsAbstractUI
// Dependencies: [19, 21, 14853, 14854, 14855, 7357, 5600, 2]
// Exports: ServerChannelsAbstractUI

// Module 14852 (ServerChannelsAbstractUI)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7357 */;
import _modDef14853 from "module_14853" /* 14853 */;
import _modDef14854 from "module_14854" /* 14854 */;
import _modDef14855 from "module_14855" /* 14855 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14853 };
obj[1] = obj2;
let obj3 = { uri: _modDef14854 };
obj[2] = obj3;
obj[3] = { uri: _modDef14855 };
({ uri: _modDef14855 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ServerChannelsAbstractUI.native.tsx");

export function ServerChannelsAbstractUI(width) {
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
