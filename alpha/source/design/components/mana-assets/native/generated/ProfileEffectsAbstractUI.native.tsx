// Module ID: 9649
// Function ID: 9650
// Name: ProfileEffectsAbstractUI
// Dependencies: [19, 21, 9650, 9651, 9652, 7261, 5730, 2]
// Exports: ProfileEffectsAbstractUI

// Module 9649 (ProfileEffectsAbstractUI)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7261 */;
import _modDef9650 from "module_9650" /* 9650 */;
import _modDef9651 from "module_9651" /* 9651 */;
import _modDef9652 from "module_9652" /* 9652 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef9650 };
obj[1] = obj2;
let obj3 = { uri: _modDef9651 };
obj[2] = obj3;
obj[3] = { uri: _modDef9652 };
({ uri: _modDef9652 });
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
