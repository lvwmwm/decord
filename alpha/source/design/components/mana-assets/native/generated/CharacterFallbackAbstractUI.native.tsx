// Module ID: 13987
// Function ID: 13988
// Name: CharacterFallbackAbstractUI
// Dependencies: [19, 21, 13988, 13989, 13990, 7689, 5957, 2]
// Exports: CharacterFallbackAbstractUI

// Module 13987 (CharacterFallbackAbstractUI)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7689 */;
import _modDef13988 from "module_13988" /* 13988 */;
import _modDef13989 from "module_13989" /* 13989 */;
import _modDef13990 from "module_13990" /* 13990 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13988 };
obj[1] = obj2;
let obj3 = { uri: _modDef13989 };
obj[2] = obj3;
obj[3] = { uri: _modDef13990 };
({ uri: _modDef13990 });
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
