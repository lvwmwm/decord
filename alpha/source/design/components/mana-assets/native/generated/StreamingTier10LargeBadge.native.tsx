// Module ID: 15140
// Function ID: 15141
// Name: StreamingTier10LargeBadge
// Dependencies: [19, 21, 15141, 15142, 15143, 7210, 5851, 2]
// Exports: StreamingTier10LargeBadge

// Module 15140 (StreamingTier10LargeBadge)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7210 */;
import _modDef15141 from "module_15141" /* 15141 */;
import _modDef15142 from "module_15142" /* 15142 */;
import _modDef15143 from "module_15143" /* 15143 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef15141 };
obj[1] = obj2;
let obj3 = { uri: _modDef15142 };
obj[2] = obj3;
obj[3] = { uri: _modDef15143 };
({ uri: _modDef15143 });
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
