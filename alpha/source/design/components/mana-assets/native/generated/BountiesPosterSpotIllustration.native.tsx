// Module ID: 16258
// Function ID: 16259
// Name: BountiesPosterSpotIllustration
// Dependencies: [19, 21, 16259, 16260, 16261, 7237, 5481, 2]
// Exports: BountiesPosterSpotIllustration

// Module 16258 (BountiesPosterSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7237 */;
import _modDef16259 from "module_16259" /* 16259 */;
import _modDef16260 from "module_16260" /* 16260 */;
import _modDef16261 from "module_16261" /* 16261 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef16259 };
obj[1] = obj2;
let obj3 = { uri: _modDef16260 };
obj[2] = obj3;
obj[3] = { uri: _modDef16261 };
({ uri: _modDef16261 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/BountiesPosterSpotIllustration.native.tsx");

export function BountiesPosterSpotIllustration(width) {
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
