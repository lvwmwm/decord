// Module ID: 7257
// Function ID: 7258
// Name: TrafficConeSpotIllustration
// Dependencies: [19, 21, 7258, 7259, 7260, 7261, 5730, 2]
// Exports: TrafficConeSpotIllustration

// Module 7257 (TrafficConeSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import _modDef7258 from "module_7258" /* 7258 */;
import _modDef7259 from "module_7259" /* 7259 */;
import _modDef7260 from "module_7260" /* 7260 */;
import react_native from "react-native" /* 7261 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef7258 };
obj[1] = obj2;
let obj3 = { uri: _modDef7259 };
obj[2] = obj3;
obj[3] = { uri: _modDef7260 };
({ uri: _modDef7260 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/TrafficConeSpotIllustration.native.tsx");

export function TrafficConeSpotIllustration(width) {
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
