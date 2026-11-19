// Module ID: 20021
// Function ID: 20022
// Name: AvatarGraggleExample
// Dependencies: [19, 21, 20022, 20023, 20024, 7238, 5479, 2]
// Exports: AvatarGraggleExample

// Module 20021 (AvatarGraggleExample)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7238 */;
import _modDef20022 from "module_20022" /* 20022 */;
import _modDef20023 from "module_20023" /* 20023 */;
import _modDef20024 from "module_20024" /* 20024 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef20022 };
obj[1] = obj2;
let obj3 = { uri: _modDef20023 };
obj[2] = obj3;
obj[3] = { uri: _modDef20024 };
({ uri: _modDef20024 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/AvatarGraggleExample.native.tsx");

export function AvatarGraggleExample(width) {
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
