// Module ID: 8166
// Function ID: 8167
// Name: AgeVerificationSpotIllustration
// Dependencies: [19, 21, 8167, 8168, 8169, 7213, 5854, 2]
// Exports: AgeVerificationSpotIllustration

// Module 8166 (AgeVerificationSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7213 */;
import _modDef8167 from "module_8167" /* 8167 */;
import _modDef8168 from "module_8168" /* 8168 */;
import _modDef8169 from "module_8169" /* 8169 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef8167 };
obj[1] = obj2;
let obj3 = { uri: _modDef8168 };
obj[2] = obj3;
obj[3] = { uri: _modDef8169 };
({ uri: _modDef8169 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/AgeVerificationSpotIllustration.native.tsx");

export function AgeVerificationSpotIllustration(width) {
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
