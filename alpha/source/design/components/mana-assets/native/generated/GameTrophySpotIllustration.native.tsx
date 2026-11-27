// Module ID: 16667
// Function ID: 16668
// Name: GameTrophySpotIllustration
// Dependencies: [19, 21, 16668, 16669, 16670, 7261, 5730, 2]
// Exports: GameTrophySpotIllustration

// Module 16667 (GameTrophySpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7261 */;
import _modDef16668 from "module_16668" /* 16668 */;
import _modDef16669 from "module_16669" /* 16669 */;
import _modDef16670 from "module_16670" /* 16670 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef16668 };
obj[1] = obj2;
let obj3 = { uri: _modDef16669 };
obj[2] = obj3;
obj[3] = { uri: _modDef16670 };
({ uri: _modDef16670 });
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
