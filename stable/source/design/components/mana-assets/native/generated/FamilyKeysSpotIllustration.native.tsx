// Module ID: 20036
// Function ID: 20037
// Name: FamilyKeysSpotIllustration
// Dependencies: [19, 21, 20037, 20038, 20039, 7168, 5874, 2]
// Exports: FamilyKeysSpotIllustration

// Module 20036 (FamilyKeysSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7168 */;
import _modDef20037 from "module_20037" /* 20037 */;
import _modDef20038 from "module_20038" /* 20038 */;
import _modDef20039 from "module_20039" /* 20039 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef20037 };
obj[1] = obj2;
let obj3 = { uri: _modDef20038 };
obj[2] = obj3;
obj[3] = { uri: _modDef20039 };
({ uri: _modDef20039 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/FamilyKeysSpotIllustration.native.tsx");

export function FamilyKeysSpotIllustration(width) {
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
