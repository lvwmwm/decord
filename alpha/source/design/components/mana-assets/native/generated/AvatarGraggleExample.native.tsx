// Module ID: 19845
// Function ID: 19846
// Name: AvatarGraggleExample
// Dependencies: [19, 21, 19846, 19847, 19848, 7063, 5712, 2]
// Exports: AvatarGraggleExample

// Module 19845 (AvatarGraggleExample)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7063 */;
import _modDef19846 from "module_19846" /* 19846 */;
import _modDef19847 from "module_19847" /* 19847 */;
import _modDef19848 from "module_19848" /* 19848 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef19846 };
obj[1] = obj2;
let obj3 = { uri: _modDef19847 };
obj[2] = obj3;
obj[3] = { uri: _modDef19848 };
({ uri: _modDef19848 });
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
