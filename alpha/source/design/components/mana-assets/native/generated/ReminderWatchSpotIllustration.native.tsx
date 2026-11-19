// Module ID: 11646
// Function ID: 11647
// Name: ReminderWatchSpotIllustration
// Dependencies: [19, 21, 11647, 11648, 11649, 7238, 5479, 2]
// Exports: ReminderWatchSpotIllustration

// Module 11646 (ReminderWatchSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7238 */;
import _modDef11647 from "module_11647" /* 11647 */;
import _modDef11648 from "module_11648" /* 11648 */;
import _modDef11649 from "module_11649" /* 11649 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef11647 };
obj[1] = obj2;
let obj3 = { uri: _modDef11648 };
obj[2] = obj3;
obj[3] = { uri: _modDef11649 };
({ uri: _modDef11649 });
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
