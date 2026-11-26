// Module ID: 19976
// Function ID: 19977
// Name: AvatarLokyExample
// Dependencies: [19, 21, 19977, 19978, 19979, 7357, 5600, 2]
// Exports: AvatarLokyExample

// Module 19976 (AvatarLokyExample)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7357 */;
import _modDef19977 from "module_19977" /* 19977 */;
import _modDef19978 from "module_19978" /* 19978 */;
import _modDef19979 from "module_19979" /* 19979 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef19977 };
obj[1] = obj2;
let obj3 = { uri: _modDef19978 };
obj[2] = obj3;
obj[3] = { uri: _modDef19979 };
({ uri: _modDef19979 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/AvatarLokyExample.native.tsx");

export function AvatarLokyExample(width) {
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
