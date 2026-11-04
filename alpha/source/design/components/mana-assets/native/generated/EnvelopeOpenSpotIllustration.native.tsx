// Module ID: 7213
// Function ID: 7214
// Name: EnvelopeOpenSpotIllustration
// Dependencies: [19, 21, 7214, 7215, 7216, 7210, 5851, 2]
// Exports: EnvelopeOpenSpotIllustration

// Module 7213 (EnvelopeOpenSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7210 */;
import _modDef7214 from "module_7214" /* 7214 */;
import _modDef7215 from "module_7215" /* 7215 */;
import _modDef7216 from "module_7216" /* 7216 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef7214 };
obj[1] = obj2;
let obj3 = { uri: _modDef7215 };
obj[2] = obj3;
obj[3] = { uri: _modDef7216 };
({ uri: _modDef7216 });
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
