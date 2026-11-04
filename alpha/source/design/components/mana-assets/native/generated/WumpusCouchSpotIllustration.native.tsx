// Module ID: 17338
// Function ID: 17339
// Name: WumpusCouchSpotIllustration
// Dependencies: [19, 21, 17339, 17340, 17341, 7210, 5851, 2]
// Exports: WumpusCouchSpotIllustration

// Module 17338 (WumpusCouchSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7210 */;
import _modDef17339 from "module_17339" /* 17339 */;
import _modDef17340 from "module_17340" /* 17340 */;
import _modDef17341 from "module_17341" /* 17341 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef17339 };
obj[1] = obj2;
let obj3 = { uri: _modDef17340 };
obj[2] = obj3;
obj[3] = { uri: _modDef17341 };
({ uri: _modDef17341 });
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
