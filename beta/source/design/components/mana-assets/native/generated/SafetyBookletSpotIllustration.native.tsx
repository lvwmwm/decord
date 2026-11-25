// Module ID: 11808
// Function ID: 11809
// Name: SafetyBookletSpotIllustration
// Dependencies: [19, 21, 11809, 11810, 11811, 7357, 5600, 2]
// Exports: SafetyBookletSpotIllustration

// Module 11808 (SafetyBookletSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7357 */;
import _modDef11809 from "module_11809" /* 11809 */;
import _modDef11810 from "module_11810" /* 11810 */;
import _modDef11811 from "module_11811" /* 11811 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef11809 };
obj[1] = obj2;
let obj3 = { uri: _modDef11810 };
obj[2] = obj3;
obj[3] = { uri: _modDef11811 };
({ uri: _modDef11811 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/SafetyBookletSpotIllustration.native.tsx");

export function SafetyBookletSpotIllustration(width) {
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
