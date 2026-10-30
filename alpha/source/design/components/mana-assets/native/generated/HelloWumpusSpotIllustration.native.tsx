// Module ID: 14268
// Function ID: 14269
// Name: HelloWumpusSpotIllustration
// Dependencies: [19, 21, 14269, 14270, 14271, 7063, 5712, 2]
// Exports: HelloWumpusSpotIllustration

// Module 14268 (HelloWumpusSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7063 */;
import _modDef14269 from "module_14269" /* 14269 */;
import _modDef14270 from "module_14270" /* 14270 */;
import _modDef14271 from "module_14271" /* 14271 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14269 };
obj[1] = obj2;
let obj3 = { uri: _modDef14270 };
obj[2] = obj3;
obj[3] = { uri: _modDef14271 };
({ uri: _modDef14271 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/HelloWumpusSpotIllustration.native.tsx");

export function HelloWumpusSpotIllustration(width) {
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
