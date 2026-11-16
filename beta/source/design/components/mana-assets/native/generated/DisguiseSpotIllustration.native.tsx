// Module ID: 20147
// Function ID: 20148
// Name: DisguiseSpotIllustration
// Dependencies: [19, 21, 20148, 20149, 20150, 7755, 6010, 2]
// Exports: DisguiseSpotIllustration

// Module 20147 (DisguiseSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7755 */;
import _modDef20148 from "module_20148" /* 20148 */;
import _modDef20149 from "module_20149" /* 20149 */;
import _modDef20150 from "module_20150" /* 20150 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef20148 };
obj[1] = obj2;
let obj3 = { uri: _modDef20149 };
obj[2] = obj3;
obj[3] = { uri: _modDef20150 };
({ uri: _modDef20150 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/DisguiseSpotIllustration.native.tsx");

export function DisguiseSpotIllustration(width) {
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
