// Module ID: 11971
// Function ID: 11972
// Name: CharacterFallbackAbstractUI
// Dependencies: [19, 21, 11972, 11973, 11974, 7237, 5481, 2]
// Exports: CharacterFallbackAbstractUI

// Module 11971 (CharacterFallbackAbstractUI)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7237 */;
import _modDef11972 from "module_11972" /* 11972 */;
import _modDef11973 from "module_11973" /* 11973 */;
import _modDef11974 from "module_11974" /* 11974 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef11972 };
obj[1] = obj2;
let obj3 = { uri: _modDef11973 };
obj[2] = obj3;
obj[3] = { uri: _modDef11974 };
({ uri: _modDef11974 });
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
