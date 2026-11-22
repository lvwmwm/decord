// Module ID: 14537
// Function ID: 14538
// Name: GameDiversityTier10LargeBadge
// Dependencies: [19, 21, 14538, 14539, 14540, 7357, 5600, 2]
// Exports: GameDiversityTier10LargeBadge

// Module 14537 (GameDiversityTier10LargeBadge)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7357 */;
import _modDef14538 from "module_14538" /* 14538 */;
import _modDef14539 from "module_14539" /* 14539 */;
import _modDef14540 from "module_14540" /* 14540 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14538 };
obj[1] = obj2;
let obj3 = { uri: _modDef14539 };
obj[2] = obj3;
obj[3] = { uri: _modDef14540 };
({ uri: _modDef14540 });
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
