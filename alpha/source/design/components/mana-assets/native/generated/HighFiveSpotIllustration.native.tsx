// Module ID: 12247
// Function ID: 12248
// Name: HighFiveSpotIllustration
// Dependencies: [19, 21, 12248, 12249, 12250, 7357, 5600, 2]
// Exports: HighFiveSpotIllustration

// Module 12247 (HighFiveSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7357 */;
import _modDef12248 from "module_12248" /* 12248 */;
import _modDef12249 from "module_12249" /* 12249 */;
import _modDef12250 from "module_12250" /* 12250 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef12248 };
obj[1] = obj2;
let obj3 = { uri: _modDef12249 };
obj[2] = obj3;
obj[3] = { uri: _modDef12250 };
({ uri: _modDef12250 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/HighFiveSpotIllustration.native.tsx");

export function HighFiveSpotIllustration(width) {
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
