// Module ID: 15059
// Function ID: 15060
// Name: StreamingTier10LargeBadge
// Dependencies: [19, 21, 15060, 15061, 15062, 7195, 5837, 2]
// Exports: StreamingTier10LargeBadge

// Module 15059 (StreamingTier10LargeBadge)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7195 */;
import _modDef15060 from "module_15060" /* 15060 */;
import _modDef15061 from "module_15061" /* 15061 */;
import _modDef15062 from "module_15062" /* 15062 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef15060 };
obj[1] = obj2;
let obj3 = { uri: _modDef15061 };
obj[2] = obj3;
obj[3] = { uri: _modDef15062 };
({ uri: _modDef15062 });
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
