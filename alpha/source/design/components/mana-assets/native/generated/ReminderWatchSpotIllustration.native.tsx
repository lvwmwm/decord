// Module ID: 11875
// Function ID: 11876
// Name: ReminderWatchSpotIllustration
// Dependencies: [19, 21, 11876, 11877, 11878, 7689, 5957, 2]
// Exports: ReminderWatchSpotIllustration

// Module 11875 (ReminderWatchSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7689 */;
import _modDef11876 from "module_11876" /* 11876 */;
import _modDef11877 from "module_11877" /* 11877 */;
import _modDef11878 from "module_11878" /* 11878 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef11876 };
obj[1] = obj2;
let obj3 = { uri: _modDef11877 };
obj[2] = obj3;
obj[3] = { uri: _modDef11878 };
({ uri: _modDef11878 });
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
