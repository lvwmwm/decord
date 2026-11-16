// Module ID: 8077
// Function ID: 8078
// Name: ShieldSpotIllustration
// Dependencies: [19, 21, 8078, 8079, 8080, 7168, 5874, 2]
// Exports: ShieldSpotIllustration

// Module 8077 (ShieldSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7168 */;
import _modDef8078 from "module_8078" /* 8078 */;
import _modDef8079 from "module_8079" /* 8079 */;
import _modDef8080 from "module_8080" /* 8080 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef8078 };
obj[1] = obj2;
let obj3 = { uri: _modDef8079 };
obj[2] = obj3;
obj[3] = { uri: _modDef8080 };
({ uri: _modDef8080 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ShieldSpotIllustration.native.tsx");

export function ShieldSpotIllustration(width) {
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
