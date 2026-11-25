// Module ID: 15083
// Function ID: 15084
// Name: QrLoginSpotIllustration
// Dependencies: [19, 21, 15084, 15085, 15086, 7357, 5600, 2]
// Exports: QrLoginSpotIllustration

// Module 15083 (QrLoginSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7357 */;
import _modDef15084 from "module_15084" /* 15084 */;
import _modDef15085 from "module_15085" /* 15085 */;
import _modDef15086 from "module_15086" /* 15086 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef15084 };
obj[1] = obj2;
let obj3 = { uri: _modDef15085 };
obj[2] = obj3;
obj[3] = { uri: _modDef15086 };
({ uri: _modDef15086 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/QrLoginSpotIllustration.native.tsx");

export function QrLoginSpotIllustration(width) {
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
