// Module ID: 14405
// Function ID: 14406
// Name: ProfileEffectsAbstractUI
// Dependencies: [19, 21, 14406, 14407, 14408, 7357, 5600, 2]
// Exports: ProfileEffectsAbstractUI

// Module 14405 (ProfileEffectsAbstractUI)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7357 */;
import _modDef14406 from "module_14406" /* 14406 */;
import _modDef14407 from "module_14407" /* 14407 */;
import _modDef14408 from "module_14408" /* 14408 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14406 };
obj[1] = obj2;
let obj3 = { uri: _modDef14407 };
obj[2] = obj3;
obj[3] = { uri: _modDef14408 };
({ uri: _modDef14408 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ProfileEffectsAbstractUI.native.tsx");

export function ProfileEffectsAbstractUI(width) {
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
