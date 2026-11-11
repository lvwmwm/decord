// Module ID: 7685
// Function ID: 7686
// Name: TrafficConeSpotIllustration
// Dependencies: [19, 21, 7686, 7687, 7688, 7689, 5957, 2]
// Exports: TrafficConeSpotIllustration

// Module 7685 (TrafficConeSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import _modDef7686 from "module_7686" /* 7686 */;
import _modDef7687 from "module_7687" /* 7687 */;
import _modDef7688 from "module_7688" /* 7688 */;
import react_native from "react-native" /* 7689 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef7686 };
obj[1] = obj2;
let obj3 = { uri: _modDef7687 };
obj[2] = obj3;
obj[3] = { uri: _modDef7688 };
({ uri: _modDef7688 });
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
