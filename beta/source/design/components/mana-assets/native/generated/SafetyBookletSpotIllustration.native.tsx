// Module ID: 11276
// Function ID: 11277
// Name: SafetyBookletSpotIllustration
// Dependencies: [19, 21, 11277, 11278, 11279, 7069, 5717, 2]
// Exports: SafetyBookletSpotIllustration

// Module 11276 (SafetyBookletSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7069 */;
import _modDef11277 from "module_11277" /* 11277 */;
import _modDef11278 from "module_11278" /* 11278 */;
import _modDef11279 from "module_11279" /* 11279 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef11277 };
obj[1] = obj2;
let obj3 = { uri: _modDef11278 };
obj[2] = obj3;
obj[3] = { uri: _modDef11279 };
({ uri: _modDef11279 });
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
