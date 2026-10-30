// Module ID: 16624
// Function ID: 16625
// Name: PasskeysSpotIllustration
// Dependencies: [19, 21, 16625, 16626, 16627, 7063, 5712, 2]
// Exports: PasskeysSpotIllustration

// Module 16624 (PasskeysSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7063 */;
import _modDef16625 from "module_16625" /* 16625 */;
import _modDef16626 from "module_16626" /* 16626 */;
import _modDef16627 from "module_16627" /* 16627 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef16625 };
obj[1] = obj2;
let obj3 = { uri: _modDef16626 };
obj[2] = obj3;
obj[3] = { uri: _modDef16627 };
({ uri: _modDef16627 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/PasskeysSpotIllustration.native.tsx");

export function PasskeysSpotIllustration(width) {
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
