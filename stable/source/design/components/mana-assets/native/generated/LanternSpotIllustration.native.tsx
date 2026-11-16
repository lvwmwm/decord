// Module ID: 20020
// Function ID: 20021
// Name: LanternSpotIllustration
// Dependencies: [19, 21, 20021, 20022, 20023, 7168, 5874, 2]
// Exports: LanternSpotIllustration

// Module 20020 (LanternSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7168 */;
import _modDef20021 from "module_20021" /* 20021 */;
import _modDef20022 from "module_20022" /* 20022 */;
import _modDef20023 from "module_20023" /* 20023 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef20021 };
obj[1] = obj2;
let obj3 = { uri: _modDef20022 };
obj[2] = obj3;
obj[3] = { uri: _modDef20023 };
({ uri: _modDef20023 });
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
