// Module ID: 14061
// Function ID: 14062
// Name: LaptopSpotIllustration
// Dependencies: [19, 21, 14062, 14063, 14064, 7357, 5600, 2]
// Exports: LaptopSpotIllustration

// Module 14061 (LaptopSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7357 */;
import _modDef14062 from "module_14062" /* 14062 */;
import _modDef14063 from "module_14063" /* 14063 */;
import _modDef14064 from "module_14064" /* 14064 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14062 };
obj[1] = obj2;
let obj3 = { uri: _modDef14063 };
obj[2] = obj3;
obj[3] = { uri: _modDef14064 };
({ uri: _modDef14064 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/LaptopSpotIllustration.native.tsx");

export function LaptopSpotIllustration(width) {
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
