// Module ID: 8972
// Function ID: 8973
// Name: ReactionsSpotIllustration
// Dependencies: [19, 21, 8973, 8974, 8975, 7689, 5957, 2]
// Exports: ReactionsSpotIllustration

// Module 8972 (ReactionsSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7689 */;
import _modDef8973 from "module_8973" /* 8973 */;
import _modDef8974 from "module_8974" /* 8974 */;
import _modDef8975 from "module_8975" /* 8975 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef8973 };
obj[1] = obj2;
let obj3 = { uri: _modDef8974 };
obj[2] = obj3;
obj[3] = { uri: _modDef8975 };
({ uri: _modDef8975 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ReactionsSpotIllustration.native.tsx");

export function ReactionsSpotIllustration(width) {
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
