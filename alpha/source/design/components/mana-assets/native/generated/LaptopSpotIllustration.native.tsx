// Module ID: 7568
// Function ID: 7569
// Name: LaptopSpotIllustration
// Dependencies: [19, 21, 7569, 7570, 7571, 7063, 5712, 2]
// Exports: LaptopSpotIllustration

// Module 7568 (LaptopSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7063 */;
import _modDef7569 from "module_7569" /* 7569 */;
import _modDef7570 from "module_7570" /* 7570 */;
import _modDef7571 from "module_7571" /* 7571 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef7569 };
obj[1] = obj2;
let obj3 = { uri: _modDef7570 };
obj[2] = obj3;
obj[3] = { uri: _modDef7571 };
({ uri: _modDef7571 });
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
