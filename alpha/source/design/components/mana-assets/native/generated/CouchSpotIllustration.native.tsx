// Module ID: 10723
// Function ID: 10724
// Name: CouchSpotIllustration
// Dependencies: [19, 21, 10724, 10725, 10726, 7357, 5600, 2]
// Exports: CouchSpotIllustration

// Module 10723 (CouchSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7357 */;
import _modDef10724 from "module_10724" /* 10724 */;
import _modDef10725 from "module_10725" /* 10725 */;
import _modDef10726 from "module_10726" /* 10726 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef10724 };
obj[1] = obj2;
let obj3 = { uri: _modDef10725 };
obj[2] = obj3;
obj[3] = { uri: _modDef10726 };
({ uri: _modDef10726 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/CouchSpotIllustration.native.tsx");

export function CouchSpotIllustration(width) {
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
