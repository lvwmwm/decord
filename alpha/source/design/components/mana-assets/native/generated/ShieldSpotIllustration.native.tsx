// Module ID: 7966
// Function ID: 7967
// Name: ShieldSpotIllustration
// Dependencies: [19, 21, 7967, 7968, 7969, 7063, 5712, 2]
// Exports: ShieldSpotIllustration

// Module 7966 (ShieldSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7063 */;
import _modDef7967 from "module_7967" /* 7967 */;
import _modDef7968 from "module_7968" /* 7968 */;
import _modDef7969 from "module_7969" /* 7969 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef7967 };
obj[1] = obj2;
let obj3 = { uri: _modDef7968 };
obj[2] = obj3;
obj[3] = { uri: _modDef7969 };
({ uri: _modDef7969 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ShieldSpotIllustration.native.tsx");

export function ShieldSpotIllustration(width) {
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
