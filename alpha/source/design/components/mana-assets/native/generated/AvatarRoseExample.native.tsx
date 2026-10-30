// Module ID: 19837
// Function ID: 19838
// Name: AvatarRoseExample
// Dependencies: [19, 21, 19838, 19839, 19840, 7063, 5712, 2]
// Exports: AvatarRoseExample

// Module 19837 (AvatarRoseExample)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7063 */;
import _modDef19838 from "module_19838" /* 19838 */;
import _modDef19839 from "module_19839" /* 19839 */;
import _modDef19840 from "module_19840" /* 19840 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef19838 };
obj[1] = obj2;
let obj3 = { uri: _modDef19839 };
obj[2] = obj3;
obj[3] = { uri: _modDef19840 };
({ uri: _modDef19840 });
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
