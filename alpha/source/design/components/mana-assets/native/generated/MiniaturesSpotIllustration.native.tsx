// Module ID: 18669
// Function ID: 18670
// Name: MiniaturesSpotIllustration
// Dependencies: [19, 21, 18670, 18671, 18672, 7135, 5842, 2]
// Exports: MiniaturesSpotIllustration

// Module 18669 (MiniaturesSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7135 */;
import _modDef18670 from "module_18670" /* 18670 */;
import _modDef18671 from "module_18671" /* 18671 */;
import _modDef18672 from "module_18672" /* 18672 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18670 };
obj[1] = obj2;
let obj3 = { uri: _modDef18671 };
obj[2] = obj3;
obj[3] = { uri: _modDef18672 };
({ uri: _modDef18672 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/MiniaturesSpotIllustration.native.tsx");

export function MiniaturesSpotIllustration(width) {
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
