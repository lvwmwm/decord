// Module ID: 20123
// Function ID: 20124
// Name: StarKeySpotIllustration
// Dependencies: [19, 21, 20124, 20125, 20126, 7230, 5699, 2]
// Exports: StarKeySpotIllustration

// Module 20123 (StarKeySpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7230 */;
import _modDef20124 from "module_20124" /* 20124 */;
import _modDef20125 from "module_20125" /* 20125 */;
import _modDef20126 from "module_20126" /* 20126 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef20124 };
obj[1] = obj2;
let obj3 = { uri: _modDef20125 };
obj[2] = obj3;
obj[3] = { uri: _modDef20126 };
({ uri: _modDef20126 });
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
