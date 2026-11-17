// Module ID: 16091
// Function ID: 16092
// Name: HoldingGemSpotIllustration
// Dependencies: [19, 21, 16092, 16093, 16094, 7765, 6014, 2]
// Exports: HoldingGemSpotIllustration

// Module 16091 (HoldingGemSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7765 */;
import _modDef16092 from "module_16092" /* 16092 */;
import _modDef16093 from "module_16093" /* 16093 */;
import _modDef16094 from "module_16094" /* 16094 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef16092 };
obj[1] = obj2;
let obj3 = { uri: _modDef16093 };
obj[2] = obj3;
obj[3] = { uri: _modDef16094 };
({ uri: _modDef16094 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/HoldingGemSpotIllustration.native.tsx");

export function HoldingGemSpotIllustration(width) {
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
