// Module ID: 7761
// Function ID: 7762
// Name: TrafficConeSpotIllustration
// Dependencies: [19, 21, 7762, 7763, 7764, 7765, 6014, 2]
// Exports: TrafficConeSpotIllustration

// Module 7761 (TrafficConeSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import _modDef7762 from "module_7762" /* 7762 */;
import _modDef7763 from "module_7763" /* 7763 */;
import _modDef7764 from "module_7764" /* 7764 */;
import react_native from "react-native" /* 7765 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef7762 };
obj[1] = obj2;
let obj3 = { uri: _modDef7763 };
obj[2] = obj3;
obj[3] = { uri: _modDef7764 };
({ uri: _modDef7764 });
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
