// Module ID: 19009
// Function ID: 19010
// Name: PrivateProfileAbstractUI
// Dependencies: [19, 21, 19010, 19011, 19012, 7689, 5957, 2]
// Exports: PrivateProfileAbstractUI

// Module 19009 (PrivateProfileAbstractUI)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7689 */;
import _modDef19010 from "module_19010" /* 19010 */;
import _modDef19011 from "module_19011" /* 19011 */;
import _modDef19012 from "module_19012" /* 19012 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef19010 };
obj[1] = obj2;
let obj3 = { uri: _modDef19011 };
obj[2] = obj3;
obj[3] = { uri: _modDef19012 };
({ uri: _modDef19012 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/PrivateProfileAbstractUI.native.tsx");

export function PrivateProfileAbstractUI(width) {
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
    size = { width, height, scale: num, intrinsicWidth: 288, intrinsicHeight: 192 };
    obj = react_native;
    return obj.getAssetSizeStyle(size);
  }, items);
  obj = { fadeDuration: 0, source: obj2.getAssetSource(obj), style: memo, accessible, accessibilityLabel, resizeMode: obj3.getAssetResizeMode(resizeMode) };
  height(num[6]);
  obj2 = width(num[5]);
  obj3 = width(num[5]);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={obj3.getAssetResizeMode(resizeMode)} />;
}
