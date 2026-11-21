// Module ID: 12471
// Function ID: 12472
// Name: EnvelopeSpotIllustration
// Dependencies: [19, 21, 12472, 12473, 12474, 7357, 5600, 2]
// Exports: EnvelopeSpotIllustration

// Module 12471 (EnvelopeSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7357 */;
import _modDef12472 from "module_12472" /* 12472 */;
import _modDef12473 from "module_12473" /* 12473 */;
import _modDef12474 from "module_12474" /* 12474 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef12472 };
obj[1] = obj2;
let obj3 = { uri: _modDef12473 };
obj[2] = obj3;
obj[3] = { uri: _modDef12474 };
({ uri: _modDef12474 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/EnvelopeSpotIllustration.native.tsx");

export function EnvelopeSpotIllustration(width) {
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
