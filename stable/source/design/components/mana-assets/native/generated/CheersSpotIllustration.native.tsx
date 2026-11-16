// Module ID: 18712
// Function ID: 18713
// Name: CheersSpotIllustration
// Dependencies: [19, 21, 18713, 18714, 18715, 7168, 5874, 2]
// Exports: CheersSpotIllustration

// Module 18712 (CheersSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7168 */;
import _modDef18713 from "module_18713" /* 18713 */;
import _modDef18714 from "module_18714" /* 18714 */;
import _modDef18715 from "module_18715" /* 18715 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18713 };
obj[1] = obj2;
let obj3 = { uri: _modDef18714 };
obj[2] = obj3;
obj[3] = { uri: _modDef18715 };
({ uri: _modDef18715 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/CheersSpotIllustration.native.tsx");

export function CheersSpotIllustration(width) {
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
