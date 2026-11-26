// Module ID: 17806
// Function ID: 17807
// Name: MiniaturesSpotIllustration
// Dependencies: [19, 21, 17807, 17808, 17809, 7357, 5600, 2]
// Exports: MiniaturesSpotIllustration

// Module 17806 (MiniaturesSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7357 */;
import _modDef17807 from "module_17807" /* 17807 */;
import _modDef17808 from "module_17808" /* 17808 */;
import _modDef17809 from "module_17809" /* 17809 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef17807 };
obj[1] = obj2;
let obj3 = { uri: _modDef17808 };
obj[2] = obj3;
obj[3] = { uri: _modDef17809 };
({ uri: _modDef17809 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/MiniaturesSpotIllustration.native.tsx");

export function MiniaturesSpotIllustration(width) {
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
