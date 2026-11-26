// Module ID: 19972
// Function ID: 19973
// Name: AvatarRoseExample
// Dependencies: [19, 21, 19973, 19974, 19975, 7357, 5600, 2]
// Exports: AvatarRoseExample

// Module 19972 (AvatarRoseExample)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7357 */;
import _modDef19973 from "module_19973" /* 19973 */;
import _modDef19974 from "module_19974" /* 19974 */;
import _modDef19975 from "module_19975" /* 19975 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef19973 };
obj[1] = obj2;
let obj3 = { uri: _modDef19974 };
obj[2] = obj3;
obj[3] = { uri: _modDef19975 };
({ uri: _modDef19975 });
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
