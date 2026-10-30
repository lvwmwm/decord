// Module ID: 14884
// Function ID: 14885
// Name: GameTimeTier9LargeBadge
// Dependencies: [19, 21, 14885, 14886, 14887, 7063, 5712, 2]
// Exports: GameTimeTier9LargeBadge

// Module 14884 (GameTimeTier9LargeBadge)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7063 */;
import _modDef14885 from "module_14885" /* 14885 */;
import _modDef14886 from "module_14886" /* 14886 */;
import _modDef14887 from "module_14887" /* 14887 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14885 };
obj[1] = obj2;
let obj3 = { uri: _modDef14886 };
obj[2] = obj3;
obj[3] = { uri: _modDef14887 };
({ uri: _modDef14887 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/GameTimeTier9LargeBadge.native.tsx");

export function GameTimeTier9LargeBadge(width) {
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
    size = { width, height, scale: num, intrinsicWidth: 156, intrinsicHeight: 100 };
    obj = react_native;
    return obj.getAssetSizeStyle(size);
  }, items);
  obj = { fadeDuration: 0, source: obj2.getAssetSource(obj), style: memo, accessible, accessibilityLabel, resizeMode: obj3.getAssetResizeMode(resizeMode) };
  height(num[6]);
  obj2 = width(num[5]);
  obj3 = width(num[5]);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={obj3.getAssetResizeMode(resizeMode)} />;
}
