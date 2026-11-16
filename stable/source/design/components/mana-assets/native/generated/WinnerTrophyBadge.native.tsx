// Module ID: 10944
// Function ID: 10945
// Name: WinnerTrophyBadge
// Dependencies: [19, 21, 10945, 10946, 10947, 7168, 5874, 2]
// Exports: WinnerTrophyBadge

// Module 10944 (WinnerTrophyBadge)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7168 */;
import _modDef10945 from "module_10945" /* 10945 */;
import _modDef10946 from "module_10946" /* 10946 */;
import _modDef10947 from "module_10947" /* 10947 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef10945 };
obj[1] = obj2;
let obj3 = { uri: _modDef10946 };
obj[2] = obj3;
obj[3] = { uri: _modDef10947 };
({ uri: _modDef10947 });
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
