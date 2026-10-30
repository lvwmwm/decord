// Module ID: 10765
// Function ID: 10766
// Name: MedalFirstBadge
// Dependencies: [19, 21, 10766, 10767, 10768, 7063, 5712, 2]
// Exports: MedalFirstBadge

// Module 10765 (MedalFirstBadge)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7063 */;
import _modDef10766 from "module_10766" /* 10766 */;
import _modDef10767 from "module_10767" /* 10767 */;
import _modDef10768 from "module_10768" /* 10768 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef10766 };
obj[1] = obj2;
let obj3 = { uri: _modDef10767 };
obj[2] = obj3;
obj[3] = { uri: _modDef10768 };
({ uri: _modDef10768 });
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
