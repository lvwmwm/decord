// Module ID: 16984
// Function ID: 16985
// Name: BountiesPosterSpotIllustration
// Dependencies: [19, 21, 16985, 16986, 16987, 7069, 5717, 2]
// Exports: BountiesPosterSpotIllustration

// Module 16984 (BountiesPosterSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7069 */;
import _modDef16985 from "module_16985" /* 16985 */;
import _modDef16986 from "module_16986" /* 16986 */;
import _modDef16987 from "module_16987" /* 16987 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef16985 };
obj[1] = obj2;
let obj3 = { uri: _modDef16986 };
obj[2] = obj3;
obj[3] = { uri: _modDef16987 };
({ uri: _modDef16987 });
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
