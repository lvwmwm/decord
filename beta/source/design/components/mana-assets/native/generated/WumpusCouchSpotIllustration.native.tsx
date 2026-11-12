// Module ID: 17446
// Function ID: 17447
// Name: WumpusCouchSpotIllustration
// Dependencies: [19, 21, 17447, 17448, 17449, 7168, 5874, 2]
// Exports: WumpusCouchSpotIllustration

// Module 17446 (WumpusCouchSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7168 */;
import _modDef17447 from "module_17447" /* 17447 */;
import _modDef17448 from "module_17448" /* 17448 */;
import _modDef17449 from "module_17449" /* 17449 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef17447 };
obj[1] = obj2;
let obj3 = { uri: _modDef17448 };
obj[2] = obj3;
obj[3] = { uri: _modDef17449 };
({ uri: _modDef17449 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/WumpusCouchSpotIllustration.native.tsx");

export function WumpusCouchSpotIllustration(width) {
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
    size = { width, height, scale: num, intrinsicWidth: 288, intrinsicHeight: 162 };
    obj = react_native;
    return obj.getAssetSizeStyle(size);
  }, items);
  obj = { fadeDuration: 0, source: obj2.getAssetSource(obj), style: memo, accessible, accessibilityLabel, resizeMode: obj3.getAssetResizeMode(resizeMode) };
  height(num[6]);
  obj2 = width(num[5]);
  obj3 = width(num[5]);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={obj3.getAssetResizeMode(resizeMode)} />;
}
