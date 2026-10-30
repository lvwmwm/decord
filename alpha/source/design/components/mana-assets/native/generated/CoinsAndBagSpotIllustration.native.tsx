// Module ID: 19832
// Function ID: 19833
// Name: CoinsAndBagSpotIllustration
// Dependencies: [19, 21, 19833, 19834, 19835, 7063, 5712, 2]
// Exports: CoinsAndBagSpotIllustration

// Module 19832 (CoinsAndBagSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7063 */;
import _modDef19833 from "module_19833" /* 19833 */;
import _modDef19834 from "module_19834" /* 19834 */;
import _modDef19835 from "module_19835" /* 19835 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef19833 };
obj[1] = obj2;
let obj3 = { uri: _modDef19834 };
obj[2] = obj3;
obj[3] = { uri: _modDef19835 };
({ uri: _modDef19835 });
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
