// Module ID: 19979
// Function ID: 19980
// Name: LanternSpotIllustration
// Dependencies: [19, 21, 19980, 19981, 19982, 7135, 5842, 2]
// Exports: LanternSpotIllustration

// Module 19979 (LanternSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7135 */;
import _modDef19980 from "module_19980" /* 19980 */;
import _modDef19981 from "module_19981" /* 19981 */;
import _modDef19982 from "module_19982" /* 19982 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef19980 };
obj[1] = obj2;
let obj3 = { uri: _modDef19981 };
obj[2] = obj3;
obj[3] = { uri: _modDef19982 };
({ uri: _modDef19982 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/LanternSpotIllustration.native.tsx");

export function LanternSpotIllustration(width) {
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
