// Module ID: 20154
// Function ID: 20155
// Name: PerksTicketSpotIllustration
// Dependencies: [19, 21, 20155, 20156, 20157, 7210, 5851, 2]
// Exports: PerksTicketSpotIllustration

// Module 20154 (PerksTicketSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7210 */;
import _modDef20155 from "module_20155" /* 20155 */;
import _modDef20156 from "module_20156" /* 20156 */;
import _modDef20157 from "module_20157" /* 20157 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef20155 };
obj[1] = obj2;
let obj3 = { uri: _modDef20156 };
obj[2] = obj3;
obj[3] = { uri: _modDef20157 };
({ uri: _modDef20157 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/PerksTicketSpotIllustration.native.tsx");

export function PerksTicketSpotIllustration(width) {
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
