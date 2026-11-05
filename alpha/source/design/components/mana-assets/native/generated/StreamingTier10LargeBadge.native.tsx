// Module ID: 15153
// Function ID: 15154
// Name: StreamingTier10LargeBadge
// Dependencies: [19, 21, 15154, 15155, 15156, 7213, 5854, 2]
// Exports: StreamingTier10LargeBadge

// Module 15153 (StreamingTier10LargeBadge)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7213 */;
import _modDef15154 from "module_15154" /* 15154 */;
import _modDef15155 from "module_15155" /* 15155 */;
import _modDef15156 from "module_15156" /* 15156 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef15154 };
obj[1] = obj2;
let obj3 = { uri: _modDef15155 };
obj[2] = obj3;
obj[3] = { uri: _modDef15156 };
({ uri: _modDef15156 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/StreamingTier10LargeBadge.native.tsx");

export function StreamingTier10LargeBadge(width) {
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
    size = { width, height, scale: num, intrinsicWidth: 156, intrinsicHeight: 100 };
    obj = react_native;
    return obj.getAssetSizeStyle(size);
  }, items);
  obj = { fadeDuration: 0, source: obj2.getAssetSource(obj), style: memo, accessible, accessibilityLabel, resizeMode: obj3.getAssetResizeMode(resizeMode) };
  height(num[6]);
  obj2 = width(num[5]);
  obj3 = width(num[5]);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={obj3.getAssetResizeMode(resizeMode)} />;
}
