// Module ID: 9689
// Function ID: 9690
// Name: NitroCoinSpotIllustration
// Dependencies: [19, 21, 9690, 9691, 9692, 7210, 5851, 2]
// Exports: NitroCoinSpotIllustration

// Module 9689 (NitroCoinSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7210 */;
import _modDef9690 from "module_9690" /* 9690 */;
import _modDef9691 from "module_9691" /* 9691 */;
import _modDef9692 from "module_9692" /* 9692 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef9690 };
obj[1] = obj2;
let obj3 = { uri: _modDef9691 };
obj[2] = obj3;
obj[3] = { uri: _modDef9692 };
({ uri: _modDef9692 });
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
