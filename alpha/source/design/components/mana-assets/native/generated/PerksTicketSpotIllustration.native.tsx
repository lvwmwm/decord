// Module ID: 20000
// Function ID: 20001
// Name: PerksTicketSpotIllustration
// Dependencies: [19, 21, 20001, 20002, 20003, 7238, 5479, 2]
// Exports: PerksTicketSpotIllustration

// Module 20000 (PerksTicketSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7238 */;
import _modDef20001 from "module_20001" /* 20001 */;
import _modDef20002 from "module_20002" /* 20002 */;
import _modDef20003 from "module_20003" /* 20003 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef20001 };
obj[1] = obj2;
let obj3 = { uri: _modDef20002 };
obj[2] = obj3;
obj[3] = { uri: _modDef20003 };
({ uri: _modDef20003 });
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
