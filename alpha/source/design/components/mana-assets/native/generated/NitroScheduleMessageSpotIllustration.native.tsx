// Module ID: 14836
// Function ID: 14837
// Name: NitroScheduleMessageSpotIllustration
// Dependencies: [19, 21, 14837, 14838, 14839, 7135, 5842, 2]
// Exports: NitroScheduleMessageSpotIllustration

// Module 14836 (NitroScheduleMessageSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7135 */;
import _modDef14837 from "module_14837" /* 14837 */;
import _modDef14838 from "module_14838" /* 14838 */;
import _modDef14839 from "module_14839" /* 14839 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14837 };
obj[1] = obj2;
let obj3 = { uri: _modDef14838 };
obj[2] = obj3;
obj[3] = { uri: _modDef14839 };
({ uri: _modDef14839 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/NitroScheduleMessageSpotIllustration.native.tsx");

export function NitroScheduleMessageSpotIllustration(width) {
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
