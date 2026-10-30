// Module ID: 14900
// Function ID: 14901
// Name: GameDiversityTier10LargeBadge
// Dependencies: [19, 21, 14901, 14902, 14903, 7063, 5712, 2]
// Exports: GameDiversityTier10LargeBadge

// Module 14900 (GameDiversityTier10LargeBadge)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7063 */;
import _modDef14901 from "module_14901" /* 14901 */;
import _modDef14902 from "module_14902" /* 14902 */;
import _modDef14903 from "module_14903" /* 14903 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14901 };
obj[1] = obj2;
let obj3 = { uri: _modDef14902 };
obj[2] = obj3;
obj[3] = { uri: _modDef14903 };
({ uri: _modDef14903 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/GameDiversityTier10LargeBadge.native.tsx");

export function GameDiversityTier10LargeBadge(width) {
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
