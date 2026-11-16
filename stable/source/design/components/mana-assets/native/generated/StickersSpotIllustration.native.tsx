// Module ID: 9924
// Function ID: 9925
// Name: StickersSpotIllustration
// Dependencies: [19, 21, 9925, 9926, 9927, 7168, 5874, 2]
// Exports: StickersSpotIllustration

// Module 9924 (StickersSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7168 */;
import _modDef9925 from "module_9925" /* 9925 */;
import _modDef9926 from "module_9926" /* 9926 */;
import _modDef9927 from "module_9927" /* 9927 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef9925 };
obj[1] = obj2;
let obj3 = { uri: _modDef9926 };
obj[2] = obj3;
obj[3] = { uri: _modDef9927 };
({ uri: _modDef9927 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/StickersSpotIllustration.native.tsx");

export function StickersSpotIllustration(width) {
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
