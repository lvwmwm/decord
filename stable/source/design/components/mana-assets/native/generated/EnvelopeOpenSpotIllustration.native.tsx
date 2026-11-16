// Module ID: 7171
// Function ID: 7172
// Name: EnvelopeOpenSpotIllustration
// Dependencies: [19, 21, 7172, 7173, 7174, 7168, 5874, 2]
// Exports: EnvelopeOpenSpotIllustration

// Module 7171 (EnvelopeOpenSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7168 */;
import _modDef7172 from "module_7172" /* 7172 */;
import _modDef7173 from "module_7173" /* 7173 */;
import _modDef7174 from "module_7174" /* 7174 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef7172 };
obj[1] = obj2;
let obj3 = { uri: _modDef7173 };
obj[2] = obj3;
obj[3] = { uri: _modDef7174 };
({ uri: _modDef7174 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/EnvelopeOpenSpotIllustration.native.tsx");

export function EnvelopeOpenSpotIllustration(width) {
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
