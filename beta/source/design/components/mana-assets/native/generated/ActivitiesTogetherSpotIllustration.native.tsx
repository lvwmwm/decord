// Module ID: 18775
// Function ID: 18776
// Name: ActivitiesTogetherSpotIllustration
// Dependencies: [19, 21, 18776, 18777, 18778, 7755, 6010, 2]
// Exports: ActivitiesTogetherSpotIllustration

// Module 18775 (ActivitiesTogetherSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7755 */;
import _modDef18776 from "module_18776" /* 18776 */;
import _modDef18777 from "module_18777" /* 18777 */;
import _modDef18778 from "module_18778" /* 18778 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18776 };
obj[1] = obj2;
let obj3 = { uri: _modDef18777 };
obj[2] = obj3;
obj[3] = { uri: _modDef18778 };
({ uri: _modDef18778 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ActivitiesTogetherSpotIllustration.native.tsx");

export function ActivitiesTogetherSpotIllustration(width) {
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
