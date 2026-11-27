// Module ID: 9599
// Function ID: 9600
// Name: ReactionsSpotIllustration
// Dependencies: [19, 21, 9600, 9601, 9602, 7261, 5730, 2]
// Exports: ReactionsSpotIllustration

// Module 9599 (ReactionsSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7261 */;
import _modDef9600 from "module_9600" /* 9600 */;
import _modDef9601 from "module_9601" /* 9601 */;
import _modDef9602 from "module_9602" /* 9602 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef9600 };
obj[1] = obj2;
let obj3 = { uri: _modDef9601 };
obj[2] = obj3;
obj[3] = { uri: _modDef9602 };
({ uri: _modDef9602 });
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
