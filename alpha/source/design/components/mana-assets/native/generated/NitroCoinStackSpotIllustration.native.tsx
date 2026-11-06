// Module ID: 9648
// Function ID: 9649
// Name: NitroCoinStackSpotIllustration
// Dependencies: [19, 21, 9649, 9650, 9651, 7160, 5872, 2]
// Exports: NitroCoinStackSpotIllustration

// Module 9648 (NitroCoinStackSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7160 */;
import _modDef9649 from "module_9649" /* 9649 */;
import _modDef9650 from "module_9650" /* 9650 */;
import _modDef9651 from "module_9651" /* 9651 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef9649 };
obj[1] = obj2;
let obj3 = { uri: _modDef9650 };
obj[2] = obj3;
obj[3] = { uri: _modDef9651 };
({ uri: _modDef9651 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/NitroCoinStackSpotIllustration.native.tsx");

export function NitroCoinStackSpotIllustration(width) {
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
