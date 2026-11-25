// Module ID: 12096
// Function ID: 12097
// Name: CharacterFallbackAbstractUI
// Dependencies: [19, 21, 12097, 12098, 12099, 7357, 5600, 2]
// Exports: CharacterFallbackAbstractUI

// Module 12096 (CharacterFallbackAbstractUI)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7357 */;
import _modDef12097 from "module_12097" /* 12097 */;
import _modDef12098 from "module_12098" /* 12098 */;
import _modDef12099 from "module_12099" /* 12099 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef12097 };
obj[1] = obj2;
let obj3 = { uri: _modDef12098 };
obj[2] = obj3;
obj[3] = { uri: _modDef12099 };
({ uri: _modDef12099 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/CharacterFallbackAbstractUI.native.tsx");

export function CharacterFallbackAbstractUI(width) {
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
    size = { width, height, scale: num, intrinsicWidth: 144, intrinsicHeight: 144 };
    obj = react_native;
    return obj.getAssetSizeStyle(size);
  }, items);
  obj = { fadeDuration: 0, source: obj2.getAssetSource(obj), style: memo, accessible, accessibilityLabel, resizeMode: obj3.getAssetResizeMode(resizeMode) };
  height(num[6]);
  obj2 = width(num[5]);
  obj3 = width(num[5]);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={obj3.getAssetResizeMode(resizeMode)} />;
}
