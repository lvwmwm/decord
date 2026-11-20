// Module ID: 13711
// Function ID: 13712
// Name: StreakTrophyBadge
// Dependencies: [19, 21, 13712, 13713, 13714, 7237, 5481, 2]
// Exports: StreakTrophyBadge

// Module 13711 (StreakTrophyBadge)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7237 */;
import _modDef13712 from "module_13712" /* 13712 */;
import _modDef13713 from "module_13713" /* 13713 */;
import _modDef13714 from "module_13714" /* 13714 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13712 };
obj[1] = obj2;
let obj3 = { uri: _modDef13713 };
obj[2] = obj3;
obj[3] = { uri: _modDef13714 };
({ uri: _modDef13714 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/StreakTrophyBadge.native.tsx");

export function StreakTrophyBadge(width) {
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
    size = { width, height, scale: num, intrinsicWidth: 24, intrinsicHeight: 24 };
    obj = react_native;
    return obj.getAssetSizeStyle(size);
  }, items);
  obj = { fadeDuration: 0, source: obj2.getAssetSource(obj), style: memo, accessible, accessibilityLabel, resizeMode: obj3.getAssetResizeMode(resizeMode) };
  height(num[6]);
  obj2 = width(num[5]);
  obj3 = width(num[5]);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={obj3.getAssetResizeMode(resizeMode)} />;
}
