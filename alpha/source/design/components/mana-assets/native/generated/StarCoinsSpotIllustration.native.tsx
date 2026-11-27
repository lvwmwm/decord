// Module ID: 20249
// Function ID: 20250
// Name: StarCoinsSpotIllustration
// Dependencies: [19, 21, 20250, 20251, 20252, 7261, 5730, 2]
// Exports: StarCoinsSpotIllustration

// Module 20249 (StarCoinsSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7261 */;
import _modDef20250 from "module_20250" /* 20250 */;
import _modDef20251 from "module_20251" /* 20251 */;
import _modDef20252 from "module_20252" /* 20252 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef20250 };
obj[1] = obj2;
let obj3 = { uri: _modDef20251 };
obj[2] = obj3;
obj[3] = { uri: _modDef20252 };
({ uri: _modDef20252 });
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
