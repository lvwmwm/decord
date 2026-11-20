// Module ID: 14703
// Function ID: 14704
// Name: HoldingGemSpotIllustration
// Dependencies: [19, 21, 14704, 14705, 14706, 7237, 5481, 2]
// Exports: HoldingGemSpotIllustration

// Module 14703 (HoldingGemSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7237 */;
import _modDef14704 from "module_14704" /* 14704 */;
import _modDef14705 from "module_14705" /* 14705 */;
import _modDef14706 from "module_14706" /* 14706 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14704 };
obj[1] = obj2;
let obj3 = { uri: _modDef14705 };
obj[2] = obj3;
obj[3] = { uri: _modDef14706 };
({ uri: _modDef14706 });
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
