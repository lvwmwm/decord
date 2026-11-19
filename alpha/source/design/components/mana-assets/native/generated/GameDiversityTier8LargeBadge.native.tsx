// Module ID: 14453
// Function ID: 14454
// Name: GameDiversityTier8LargeBadge
// Dependencies: [19, 21, 14454, 14455, 14456, 7238, 5479, 2]
// Exports: GameDiversityTier8LargeBadge

// Module 14453 (GameDiversityTier8LargeBadge)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7238 */;
import _modDef14454 from "module_14454" /* 14454 */;
import _modDef14455 from "module_14455" /* 14455 */;
import _modDef14456 from "module_14456" /* 14456 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14454 };
obj[1] = obj2;
let obj3 = { uri: _modDef14455 };
obj[2] = obj3;
obj[3] = { uri: _modDef14456 };
({ uri: _modDef14456 });
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
