// Module ID: 14896
// Function ID: 14897
// Name: GameDiversityTier9LargeBadge
// Dependencies: [19, 21, 14897, 14898, 14899, 7063, 5712, 2]
// Exports: GameDiversityTier9LargeBadge

// Module 14896 (GameDiversityTier9LargeBadge)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7063 */;
import _modDef14897 from "module_14897" /* 14897 */;
import _modDef14898 from "module_14898" /* 14898 */;
import _modDef14899 from "module_14899" /* 14899 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14897 };
obj[1] = obj2;
let obj3 = { uri: _modDef14898 };
obj[2] = obj3;
obj[3] = { uri: _modDef14899 };
({ uri: _modDef14899 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/GameDiversityTier9LargeBadge.native.tsx");

export function GameDiversityTier9LargeBadge(width) {
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
