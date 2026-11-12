// Module ID: 16030
// Function ID: 16031
// Name: QrSuccessSpotIllustration
// Dependencies: [19, 21, 16031, 16032, 16033, 7168, 5874, 2]
// Exports: QrSuccessSpotIllustration

// Module 16030 (QrSuccessSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7168 */;
import _modDef16031 from "module_16031" /* 16031 */;
import _modDef16032 from "module_16032" /* 16032 */;
import _modDef16033 from "module_16033" /* 16033 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef16031 };
obj[1] = obj2;
let obj3 = { uri: _modDef16032 };
obj[2] = obj3;
obj[3] = { uri: _modDef16033 };
({ uri: _modDef16033 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/QrSuccessSpotIllustration.native.tsx");

export function QrSuccessSpotIllustration(width) {
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
