// Module ID: 15932
// Function ID: 15933
// Name: QrLoginSpotIllustration
// Dependencies: [19, 21, 15933, 15934, 15935, 7210, 5851, 2]
// Exports: QrLoginSpotIllustration

// Module 15932 (QrLoginSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7210 */;
import _modDef15933 from "module_15933" /* 15933 */;
import _modDef15934 from "module_15934" /* 15934 */;
import _modDef15935 from "module_15935" /* 15935 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef15933 };
obj[1] = obj2;
let obj3 = { uri: _modDef15934 };
obj[2] = obj3;
obj[3] = { uri: _modDef15935 };
({ uri: _modDef15935 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/QrLoginSpotIllustration.native.tsx");

export function QrLoginSpotIllustration(width) {
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
