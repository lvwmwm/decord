// Module ID: 14273
// Function ID: 14274
// Name: ScheduleMessageSpotIllustration
// Dependencies: [19, 21, 14274, 14275, 14276, 7168, 5874, 2]
// Exports: ScheduleMessageSpotIllustration

// Module 14273 (ScheduleMessageSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7168 */;
import _modDef14274 from "module_14274" /* 14274 */;
import _modDef14275 from "module_14275" /* 14275 */;
import _modDef14276 from "module_14276" /* 14276 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14274 };
obj[1] = obj2;
let obj3 = { uri: _modDef14275 };
obj[2] = obj3;
obj[3] = { uri: _modDef14276 };
({ uri: _modDef14276 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ScheduleMessageSpotIllustration.native.tsx");

export function ScheduleMessageSpotIllustration(width) {
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
