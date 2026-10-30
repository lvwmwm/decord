// Module ID: 10773
// Function ID: 10774
// Name: WinnerTrophyBadge
// Dependencies: [19, 21, 10774, 10775, 10776, 7063, 5712, 2]
// Exports: WinnerTrophyBadge

// Module 10773 (WinnerTrophyBadge)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7063 */;
import _modDef10774 from "module_10774" /* 10774 */;
import _modDef10775 from "module_10775" /* 10775 */;
import _modDef10776 from "module_10776" /* 10776 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef10774 };
obj[1] = obj2;
let obj3 = { uri: _modDef10775 };
obj[2] = obj3;
obj[3] = { uri: _modDef10776 };
({ uri: _modDef10776 });
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
