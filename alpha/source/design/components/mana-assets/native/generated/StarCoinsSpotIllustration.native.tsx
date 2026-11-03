// Module ID: 20071
// Function ID: 20072
// Name: StarCoinsSpotIllustration
// Dependencies: [19, 21, 20072, 20073, 20074, 7195, 5837, 2]
// Exports: StarCoinsSpotIllustration

// Module 20071 (StarCoinsSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7195 */;
import _modDef20072 from "module_20072" /* 20072 */;
import _modDef20073 from "module_20073" /* 20073 */;
import _modDef20074 from "module_20074" /* 20074 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef20072 };
obj[1] = obj2;
let obj3 = { uri: _modDef20073 };
obj[2] = obj3;
obj[3] = { uri: _modDef20074 };
({ uri: _modDef20074 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/StarCoinsSpotIllustration.native.tsx");

export function StarCoinsSpotIllustration(width) {
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
