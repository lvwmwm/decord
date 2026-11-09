// Module ID: 17412
// Function ID: 17413
// Name: WumpusCouchSpotIllustration
// Dependencies: [19, 21, 17413, 17414, 17415, 7135, 5842, 2]
// Exports: WumpusCouchSpotIllustration

// Module 17412 (WumpusCouchSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7135 */;
import _modDef17413 from "module_17413" /* 17413 */;
import _modDef17414 from "module_17414" /* 17414 */;
import _modDef17415 from "module_17415" /* 17415 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef17413 };
obj[1] = obj2;
let obj3 = { uri: _modDef17414 };
obj[2] = obj3;
obj[3] = { uri: _modDef17415 };
({ uri: _modDef17415 });
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
