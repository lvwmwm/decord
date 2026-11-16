// Module ID: 20342
// Function ID: 20343
// Name: CoinsAndBagSpotIllustration
// Dependencies: [19, 21, 20343, 20344, 20345, 7168, 5874, 2]
// Exports: CoinsAndBagSpotIllustration

// Module 20342 (CoinsAndBagSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7168 */;
import _modDef20343 from "module_20343" /* 20343 */;
import _modDef20344 from "module_20344" /* 20344 */;
import _modDef20345 from "module_20345" /* 20345 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef20343 };
obj[1] = obj2;
let obj3 = { uri: _modDef20344 };
obj[2] = obj3;
obj[3] = { uri: _modDef20345 };
({ uri: _modDef20345 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/CoinsAndBagSpotIllustration.native.tsx");

export function CoinsAndBagSpotIllustration(width) {
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
    size = { width, height, scale: num, intrinsicWidth: 288, intrinsicHeight: 192 };
    obj = react_native;
    return obj.getAssetSizeStyle(size);
  }, items);
  obj = { fadeDuration: 0, source: obj2.getAssetSource(obj), style: memo, accessible, accessibilityLabel, resizeMode: obj3.getAssetResizeMode(resizeMode) };
  height(num[6]);
  obj2 = width(num[5]);
  obj3 = width(num[5]);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={obj3.getAssetResizeMode(resizeMode)} />;
}
