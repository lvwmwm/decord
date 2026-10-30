// Module ID: 11160
// Function ID: 11161
// Name: ReminderWatchSpotIllustration
// Dependencies: [19, 21, 11161, 11162, 11163, 7063, 5712, 2]
// Exports: ReminderWatchSpotIllustration

// Module 11160 (ReminderWatchSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7063 */;
import _modDef11161 from "module_11161" /* 11161 */;
import _modDef11162 from "module_11162" /* 11162 */;
import _modDef11163 from "module_11163" /* 11163 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef11161 };
obj[1] = obj2;
let obj3 = { uri: _modDef11162 };
obj[2] = obj3;
obj[3] = { uri: _modDef11163 };
({ uri: _modDef11163 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ReminderWatchSpotIllustration.native.tsx");

export function ReminderWatchSpotIllustration(width) {
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
