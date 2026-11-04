// Module ID: 10785
// Function ID: 10786
// Name: MedalFirstBadge
// Dependencies: [19, 21, 10786, 10787, 10788, 7069, 5717, 2]
// Exports: MedalFirstBadge

// Module 10785 (MedalFirstBadge)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7069 */;
import _modDef10786 from "module_10786" /* 10786 */;
import _modDef10787 from "module_10787" /* 10787 */;
import _modDef10788 from "module_10788" /* 10788 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef10786 };
obj[1] = obj2;
let obj3 = { uri: _modDef10787 };
obj[2] = obj3;
obj[3] = { uri: _modDef10788 };
({ uri: _modDef10788 });
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
