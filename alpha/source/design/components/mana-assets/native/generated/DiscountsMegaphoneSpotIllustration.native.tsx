// Module ID: 15317
// Function ID: 15318
// Name: DiscountsMegaphoneSpotIllustration
// Dependencies: [19, 21, 15318, 15319, 15320, 7135, 5842, 2]
// Exports: DiscountsMegaphoneSpotIllustration

// Module 15317 (DiscountsMegaphoneSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7135 */;
import _modDef15318 from "module_15318" /* 15318 */;
import _modDef15319 from "module_15319" /* 15319 */;
import _modDef15320 from "module_15320" /* 15320 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef15318 };
obj[1] = obj2;
let obj3 = { uri: _modDef15319 };
obj[2] = obj3;
obj[3] = { uri: _modDef15320 };
({ uri: _modDef15320 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/DiscountsMegaphoneSpotIllustration.native.tsx");

export function DiscountsMegaphoneSpotIllustration(width) {
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
