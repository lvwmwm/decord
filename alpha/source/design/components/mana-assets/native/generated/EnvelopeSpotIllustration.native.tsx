// Module ID: 13600
// Function ID: 13601
// Name: EnvelopeSpotIllustration
// Dependencies: [19, 21, 13601, 13602, 13603, 7135, 5842, 2]
// Exports: EnvelopeSpotIllustration

// Module 13600 (EnvelopeSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7135 */;
import _modDef13601 from "module_13601" /* 13601 */;
import _modDef13602 from "module_13602" /* 13602 */;
import _modDef13603 from "module_13603" /* 13603 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13601 };
obj[1] = obj2;
let obj3 = { uri: _modDef13602 };
obj[2] = obj3;
obj[3] = { uri: _modDef13603 };
({ uri: _modDef13603 });
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
