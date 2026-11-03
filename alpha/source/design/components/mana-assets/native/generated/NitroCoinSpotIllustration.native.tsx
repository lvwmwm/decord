// Module ID: 9670
// Function ID: 9671
// Name: NitroCoinSpotIllustration
// Dependencies: [19, 21, 9671, 9672, 9673, 7195, 5837, 2]
// Exports: NitroCoinSpotIllustration

// Module 9670 (NitroCoinSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7195 */;
import _modDef9671 from "module_9671" /* 9671 */;
import _modDef9672 from "module_9672" /* 9672 */;
import _modDef9673 from "module_9673" /* 9673 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef9671 };
obj[1] = obj2;
let obj3 = { uri: _modDef9672 };
obj[2] = obj3;
obj[3] = { uri: _modDef9673 };
({ uri: _modDef9673 });
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
