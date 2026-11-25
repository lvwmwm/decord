// Module ID: 19980
// Function ID: 19981
// Name: AvatarMoatmonsturrExample
// Dependencies: [19, 21, 19981, 19982, 19983, 7357, 5600, 2]
// Exports: AvatarMoatmonsturrExample

// Module 19980 (AvatarMoatmonsturrExample)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7357 */;
import _modDef19981 from "module_19981" /* 19981 */;
import _modDef19982 from "module_19982" /* 19982 */;
import _modDef19983 from "module_19983" /* 19983 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef19981 };
obj[1] = obj2;
let obj3 = { uri: _modDef19982 };
obj[2] = obj3;
obj[3] = { uri: _modDef19983 };
({ uri: _modDef19983 });
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
