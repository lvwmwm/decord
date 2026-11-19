// Module ID: 12029
// Function ID: 12030
// Name: CharacterFallbackAbstractUI
// Dependencies: [19, 21, 12030, 12031, 12032, 7238, 5479, 2]
// Exports: CharacterFallbackAbstractUI

// Module 12029 (CharacterFallbackAbstractUI)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7238 */;
import _modDef12030 from "module_12030" /* 12030 */;
import _modDef12031 from "module_12031" /* 12031 */;
import _modDef12032 from "module_12032" /* 12032 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef12030 };
obj[1] = obj2;
let obj3 = { uri: _modDef12031 };
obj[2] = obj3;
obj[3] = { uri: _modDef12032 };
({ uri: _modDef12032 });
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
