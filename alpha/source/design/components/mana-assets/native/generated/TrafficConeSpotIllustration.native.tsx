// Module ID: 7156
// Function ID: 7157
// Name: TrafficConeSpotIllustration
// Dependencies: [19, 21, 7157, 7158, 7159, 7160, 5872, 2]
// Exports: TrafficConeSpotIllustration

// Module 7156 (TrafficConeSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import _modDef7157 from "module_7157" /* 7157 */;
import _modDef7158 from "module_7158" /* 7158 */;
import _modDef7159 from "module_7159" /* 7159 */;
import react_native from "react-native" /* 7160 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef7157 };
obj[1] = obj2;
let obj3 = { uri: _modDef7158 };
obj[2] = obj3;
obj[3] = { uri: _modDef7159 };
({ uri: _modDef7159 });
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
