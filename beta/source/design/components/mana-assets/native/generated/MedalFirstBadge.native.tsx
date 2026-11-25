// Module ID: 13830
// Function ID: 13831
// Name: MedalFirstBadge
// Dependencies: [19, 21, 13831, 13832, 13833, 7357, 5600, 2]
// Exports: MedalFirstBadge

// Module 13830 (MedalFirstBadge)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7357 */;
import _modDef13831 from "module_13831" /* 13831 */;
import _modDef13832 from "module_13832" /* 13832 */;
import _modDef13833 from "module_13833" /* 13833 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13831 };
obj[1] = obj2;
let obj3 = { uri: _modDef13832 };
obj[2] = obj3;
obj[3] = { uri: _modDef13833 };
({ uri: _modDef13833 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/MedalFirstBadge.native.tsx");

export function MedalFirstBadge(width) {
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
    size = { width, height, scale: num, intrinsicWidth: 24, intrinsicHeight: 24 };
    obj = react_native;
    return obj.getAssetSizeStyle(size);
  }, items);
  obj = { fadeDuration: 0, source: obj2.getAssetSource(obj), style: memo, accessible, accessibilityLabel, resizeMode: obj3.getAssetResizeMode(resizeMode) };
  height(num[6]);
  obj2 = width(num[5]);
  obj3 = width(num[5]);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={obj3.getAssetResizeMode(resizeMode)} />;
}
