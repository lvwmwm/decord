// Module ID: 20381
// Function ID: 20382
// Name: MarketStallSpotIllustration
// Dependencies: [19, 21, 20382, 20383, 20384, 7168, 5874, 2]
// Exports: MarketStallSpotIllustration

// Module 20381 (MarketStallSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7168 */;
import _modDef20382 from "module_20382" /* 20382 */;
import _modDef20383 from "module_20383" /* 20383 */;
import _modDef20384 from "module_20384" /* 20384 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef20382 };
obj[1] = obj2;
let obj3 = { uri: _modDef20383 };
obj[2] = obj3;
obj[3] = { uri: _modDef20384 };
({ uri: _modDef20384 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/MarketStallSpotIllustration.native.tsx");

export function MarketStallSpotIllustration(width) {
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
