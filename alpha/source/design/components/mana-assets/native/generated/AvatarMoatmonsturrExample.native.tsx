// Module ID: 20119
// Function ID: 20120
// Name: AvatarMoatmonsturrExample
// Dependencies: [19, 21, 20120, 20121, 20122, 7230, 5699, 2]
// Exports: AvatarMoatmonsturrExample

// Module 20119 (AvatarMoatmonsturrExample)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7230 */;
import _modDef20120 from "module_20120" /* 20120 */;
import _modDef20121 from "module_20121" /* 20121 */;
import _modDef20122 from "module_20122" /* 20122 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef20120 };
obj[1] = obj2;
let obj3 = { uri: _modDef20121 };
obj[2] = obj3;
obj[3] = { uri: _modDef20122 };
({ uri: _modDef20122 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/AvatarMoatmonsturrExample.native.tsx");

export function AvatarMoatmonsturrExample(width) {
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
