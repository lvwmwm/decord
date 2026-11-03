// Module ID: 15063
// Function ID: 15064
// Name: GameDiversityTier8LargeBadge
// Dependencies: [19, 21, 15064, 15065, 15066, 7195, 5837, 2]
// Exports: GameDiversityTier8LargeBadge

// Module 15063 (GameDiversityTier8LargeBadge)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7195 */;
import _modDef15064 from "module_15064" /* 15064 */;
import _modDef15065 from "module_15065" /* 15065 */;
import _modDef15066 from "module_15066" /* 15066 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef15064 };
obj[1] = obj2;
let obj3 = { uri: _modDef15065 };
obj[2] = obj3;
obj[3] = { uri: _modDef15066 };
({ uri: _modDef15066 });
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
