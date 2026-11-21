// Module ID: 16076
// Function ID: 16077
// Name: PasskeysSpotIllustration
// Dependencies: [19, 21, 16077, 16078, 16079, 7357, 5600, 2]
// Exports: PasskeysSpotIllustration

// Module 16076 (PasskeysSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7357 */;
import _modDef16077 from "module_16077" /* 16077 */;
import _modDef16078 from "module_16078" /* 16078 */;
import _modDef16079 from "module_16079" /* 16079 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef16077 };
obj[1] = obj2;
let obj3 = { uri: _modDef16078 };
obj[2] = obj3;
obj[3] = { uri: _modDef16079 };
({ uri: _modDef16079 });
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
