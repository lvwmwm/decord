// Module ID: 8013
// Function ID: 8014
// Name: AgeVerificationSpotIllustration
// Dependencies: [19, 21, 8014, 8015, 8016, 7063, 5712, 2]
// Exports: AgeVerificationSpotIllustration

// Module 8013 (AgeVerificationSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7063 */;
import _modDef8014 from "module_8014" /* 8014 */;
import _modDef8015 from "module_8015" /* 8015 */;
import _modDef8016 from "module_8016" /* 8016 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef8014 };
obj[1] = obj2;
let obj3 = { uri: _modDef8015 };
obj[2] = obj3;
obj[3] = { uri: _modDef8016 };
({ uri: _modDef8016 });
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
