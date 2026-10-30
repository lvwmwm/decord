// Module ID: 7059
// Function ID: 7060
// Name: TrafficConeSpotIllustration
// Dependencies: [19, 21, 7060, 7061, 7062, 7063, 5712, 2]
// Exports: TrafficConeSpotIllustration

// Module 7059 (TrafficConeSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import _modDef7060 from "module_7060" /* 7060 */;
import _modDef7061 from "module_7061" /* 7061 */;
import _modDef7062 from "module_7062" /* 7062 */;
import react_native from "react-native" /* 7063 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef7060 };
obj[1] = obj2;
let obj3 = { uri: _modDef7061 };
obj[2] = obj3;
obj[3] = { uri: _modDef7062 };
({ uri: _modDef7062 });
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
