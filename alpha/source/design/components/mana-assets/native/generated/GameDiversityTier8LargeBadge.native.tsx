// Module ID: 14991
// Function ID: 14992
// Name: GameDiversityTier8LargeBadge
// Dependencies: [19, 21, 14992, 14993, 14994, 7261, 5730, 2]
// Exports: GameDiversityTier8LargeBadge

// Module 14991 (GameDiversityTier8LargeBadge)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7261 */;
import _modDef14992 from "module_14992" /* 14992 */;
import _modDef14993 from "module_14993" /* 14993 */;
import _modDef14994 from "module_14994" /* 14994 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14992 };
obj[1] = obj2;
let obj3 = { uri: _modDef14993 };
obj[2] = obj3;
obj[3] = { uri: _modDef14994 };
({ uri: _modDef14994 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/GameDiversityTier8LargeBadge.native.tsx");

export function GameDiversityTier8LargeBadge(width) {
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
