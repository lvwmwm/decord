// Module ID: 15936
// Function ID: 15937
// Name: QrSuccessSpotIllustration
// Dependencies: [19, 21, 15937, 15938, 15939, 7210, 5851, 2]
// Exports: QrSuccessSpotIllustration

// Module 15936 (QrSuccessSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7210 */;
import _modDef15937 from "module_15937" /* 15937 */;
import _modDef15938 from "module_15938" /* 15938 */;
import _modDef15939 from "module_15939" /* 15939 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef15937 };
obj[1] = obj2;
let obj3 = { uri: _modDef15938 };
obj[2] = obj3;
obj[3] = { uri: _modDef15939 };
({ uri: _modDef15939 });
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
