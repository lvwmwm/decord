// Module ID: 20363
// Function ID: 20364
// Name: StarKeySpotIllustration
// Dependencies: [19, 21, 20364, 20365, 20366, 7168, 5874, 2]
// Exports: StarKeySpotIllustration

// Module 20363 (StarKeySpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7168 */;
import _modDef20364 from "module_20364" /* 20364 */;
import _modDef20365 from "module_20365" /* 20365 */;
import _modDef20366 from "module_20366" /* 20366 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef20364 };
obj[1] = obj2;
let obj3 = { uri: _modDef20365 };
obj[2] = obj3;
obj[3] = { uri: _modDef20366 };
({ uri: _modDef20366 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/StarKeySpotIllustration.native.tsx");

export function StarKeySpotIllustration(width) {
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
