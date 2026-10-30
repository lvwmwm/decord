// Module ID: 19849
// Function ID: 19850
// Name: AvatarMoatmonsturrExample
// Dependencies: [19, 21, 19850, 19851, 19852, 7063, 5712, 2]
// Exports: AvatarMoatmonsturrExample

// Module 19849 (AvatarMoatmonsturrExample)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7063 */;
import _modDef19850 from "module_19850" /* 19850 */;
import _modDef19851 from "module_19851" /* 19851 */;
import _modDef19852 from "module_19852" /* 19852 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef19850 };
obj[1] = obj2;
let obj3 = { uri: _modDef19851 };
obj[2] = obj3;
obj[3] = { uri: _modDef19852 };
({ uri: _modDef19852 });
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
