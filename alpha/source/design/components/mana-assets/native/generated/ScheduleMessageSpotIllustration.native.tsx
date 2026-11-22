// Module ID: 13315
// Function ID: 13316
// Name: ScheduleMessageSpotIllustration
// Dependencies: [19, 21, 13316, 13317, 13318, 7357, 5600, 2]
// Exports: ScheduleMessageSpotIllustration

// Module 13315 (ScheduleMessageSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7357 */;
import _modDef13316 from "module_13316" /* 13316 */;
import _modDef13317 from "module_13317" /* 13317 */;
import _modDef13318 from "module_13318" /* 13318 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13316 };
obj[1] = obj2;
let obj3 = { uri: _modDef13317 };
obj[2] = obj3;
obj[3] = { uri: _modDef13318 };
({ uri: _modDef13318 });
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
