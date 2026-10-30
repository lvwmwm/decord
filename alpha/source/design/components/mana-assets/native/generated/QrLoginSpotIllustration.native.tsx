// Module ID: 15643
// Function ID: 15644
// Name: QrLoginSpotIllustration
// Dependencies: [19, 21, 15644, 15645, 15646, 7063, 5712, 2]
// Exports: QrLoginSpotIllustration

// Module 15643 (QrLoginSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7063 */;
import _modDef15644 from "module_15644" /* 15644 */;
import _modDef15645 from "module_15645" /* 15645 */;
import _modDef15646 from "module_15646" /* 15646 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef15644 };
obj[1] = obj2;
let obj3 = { uri: _modDef15645 };
obj[2] = obj3;
obj[3] = { uri: _modDef15646 };
({ uri: _modDef15646 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/QrLoginSpotIllustration.native.tsx");

export function QrLoginSpotIllustration(width) {
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
