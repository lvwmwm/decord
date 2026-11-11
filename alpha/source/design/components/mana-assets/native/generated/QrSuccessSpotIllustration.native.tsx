// Module ID: 16187
// Function ID: 16188
// Name: QrSuccessSpotIllustration
// Dependencies: [19, 21, 16188, 16189, 16190, 7689, 5957, 2]
// Exports: QrSuccessSpotIllustration

// Module 16187 (QrSuccessSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7689 */;
import _modDef16188 from "module_16188" /* 16188 */;
import _modDef16189 from "module_16189" /* 16189 */;
import _modDef16190 from "module_16190" /* 16190 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef16188 };
obj[1] = obj2;
let obj3 = { uri: _modDef16189 };
obj[2] = obj3;
obj[3] = { uri: _modDef16190 };
({ uri: _modDef16190 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/QrSuccessSpotIllustration.native.tsx");

export function QrSuccessSpotIllustration(width) {
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
