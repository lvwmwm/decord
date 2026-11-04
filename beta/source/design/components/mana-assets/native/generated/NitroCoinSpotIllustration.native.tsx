// Module ID: 9542
// Function ID: 9543
// Name: NitroCoinSpotIllustration
// Dependencies: [19, 21, 9543, 9544, 9545, 7069, 5717, 2]
// Exports: NitroCoinSpotIllustration

// Module 9542 (NitroCoinSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7069 */;
import _modDef9543 from "module_9543" /* 9543 */;
import _modDef9544 from "module_9544" /* 9544 */;
import _modDef9545 from "module_9545" /* 9545 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef9543 };
obj[1] = obj2;
let obj3 = { uri: _modDef9544 };
obj[2] = obj3;
obj[3] = { uri: _modDef9545 };
({ uri: _modDef9545 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/NitroCoinSpotIllustration.native.tsx");

export function NitroCoinSpotIllustration(width) {
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
