// Module ID: 7233
// Function ID: 7234
// Name: TrafficConeSpotIllustration
// Dependencies: [19, 21, 7234, 7235, 7236, 7237, 5481, 2]
// Exports: TrafficConeSpotIllustration

// Module 7233 (TrafficConeSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import _modDef7234 from "module_7234" /* 7234 */;
import _modDef7235 from "module_7235" /* 7235 */;
import _modDef7236 from "module_7236" /* 7236 */;
import react_native from "react-native" /* 7237 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef7234 };
obj[1] = obj2;
let obj3 = { uri: _modDef7235 };
obj[2] = obj3;
obj[3] = { uri: _modDef7236 };
({ uri: _modDef7236 });
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
