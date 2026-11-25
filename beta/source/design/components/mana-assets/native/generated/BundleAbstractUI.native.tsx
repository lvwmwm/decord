// Module ID: 16426
// Function ID: 16427
// Name: BundleAbstractUI
// Dependencies: [19, 21, 16427, 16428, 16429, 7357, 5600, 2]
// Exports: BundleAbstractUI

// Module 16426 (BundleAbstractUI)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7357 */;
import _modDef16427 from "module_16427" /* 16427 */;
import _modDef16428 from "module_16428" /* 16428 */;
import _modDef16429 from "module_16429" /* 16429 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef16427 };
obj[1] = obj2;
let obj3 = { uri: _modDef16428 };
obj[2] = obj3;
obj[3] = { uri: _modDef16429 };
({ uri: _modDef16429 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/BundleAbstractUI.native.tsx");

export function BundleAbstractUI(width) {
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
