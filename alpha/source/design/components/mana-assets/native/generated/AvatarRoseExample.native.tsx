// Module ID: 20107
// Function ID: 20108
// Name: AvatarRoseExample
// Dependencies: [19, 21, 20108, 20109, 20110, 7230, 5699, 2]
// Exports: AvatarRoseExample

// Module 20107 (AvatarRoseExample)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7230 */;
import _modDef20108 from "module_20108" /* 20108 */;
import _modDef20109 from "module_20109" /* 20109 */;
import _modDef20110 from "module_20110" /* 20110 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef20108 };
obj[1] = obj2;
let obj3 = { uri: _modDef20109 };
obj[2] = obj3;
obj[3] = { uri: _modDef20110 };
({ uri: _modDef20110 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/AvatarRoseExample.native.tsx");

export function AvatarRoseExample(width) {
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
    size = { width, height, scale: num, intrinsicWidth: 100, intrinsicHeight: 100 };
    obj = react_native;
    return obj.getAssetSizeStyle(size);
  }, items);
  obj = { fadeDuration: 0, source: obj2.getAssetSource(obj), style: memo, accessible, accessibilityLabel, resizeMode: obj3.getAssetResizeMode(resizeMode) };
  height(num[6]);
  obj2 = width(num[5]);
  obj3 = width(num[5]);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={obj3.getAssetResizeMode(resizeMode)} />;
}
