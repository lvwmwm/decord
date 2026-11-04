// Module ID: 15045
// Function ID: 15046
// Name: BumpingFistsSpotIllustration
// Dependencies: [19, 21, 15046, 15047, 15048, 7210, 5851, 2]
// Exports: BumpingFistsSpotIllustration

// Module 15045 (BumpingFistsSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7210 */;
import _modDef15046 from "module_15046" /* 15046 */;
import _modDef15047 from "module_15047" /* 15047 */;
import _modDef15048 from "module_15048" /* 15048 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef15046 };
obj[1] = obj2;
let obj3 = { uri: _modDef15047 };
obj[2] = obj3;
obj[3] = { uri: _modDef15048 };
({ uri: _modDef15048 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/BumpingFistsSpotIllustration.native.tsx");

export function BumpingFistsSpotIllustration(width) {
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
