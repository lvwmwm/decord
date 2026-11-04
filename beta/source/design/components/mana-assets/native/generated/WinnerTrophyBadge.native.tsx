// Module ID: 10793
// Function ID: 10794
// Name: WinnerTrophyBadge
// Dependencies: [19, 21, 10794, 10795, 10796, 7069, 5717, 2]
// Exports: WinnerTrophyBadge

// Module 10793 (WinnerTrophyBadge)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7069 */;
import _modDef10794 from "module_10794" /* 10794 */;
import _modDef10795 from "module_10795" /* 10795 */;
import _modDef10796 from "module_10796" /* 10796 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef10794 };
obj[1] = obj2;
let obj3 = { uri: _modDef10795 };
obj[2] = obj3;
obj[3] = { uri: _modDef10796 };
({ uri: _modDef10796 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/WinnerTrophyBadge.native.tsx");

export function WinnerTrophyBadge(width) {
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
