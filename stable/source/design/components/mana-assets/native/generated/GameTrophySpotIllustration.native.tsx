// Module ID: 17408
// Function ID: 17409
// Name: GameTrophySpotIllustration
// Dependencies: [19, 21, 17409, 17410, 17411, 7168, 5874, 2]
// Exports: GameTrophySpotIllustration

// Module 17408 (GameTrophySpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7168 */;
import _modDef17409 from "module_17409" /* 17409 */;
import _modDef17410 from "module_17410" /* 17410 */;
import _modDef17411 from "module_17411" /* 17411 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef17409 };
obj[1] = obj2;
let obj3 = { uri: _modDef17410 };
obj[2] = obj3;
obj[3] = { uri: _modDef17411 };
({ uri: _modDef17411 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/GameTrophySpotIllustration.native.tsx");

export function GameTrophySpotIllustration(width) {
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
    size = { width, height, scale: num, intrinsicWidth: 288, intrinsicHeight: 192 };
    obj = react_native;
    return obj.getAssetSizeStyle(size);
  }, items);
  obj = { fadeDuration: 0, source: obj2.getAssetSource(obj), style: memo, accessible, accessibilityLabel, resizeMode: obj3.getAssetResizeMode(resizeMode) };
  height(num[6]);
  obj2 = width(num[5]);
  obj3 = width(num[5]);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={obj3.getAssetResizeMode(resizeMode)} />;
}
