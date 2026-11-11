// Module ID: 20414
// Function ID: 20415
// Name: MemberRolesAbstractUI
// Dependencies: [19, 21, 20415, 20416, 20417, 7689, 5957, 2]
// Exports: MemberRolesAbstractUI

// Module 20414 (MemberRolesAbstractUI)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7689 */;
import _modDef20415 from "module_20415" /* 20415 */;
import _modDef20416 from "module_20416" /* 20416 */;
import _modDef20417 from "module_20417" /* 20417 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef20415 };
obj[1] = obj2;
let obj3 = { uri: _modDef20416 };
obj[2] = obj3;
obj[3] = { uri: _modDef20417 };
({ uri: _modDef20417 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/MemberRolesAbstractUI.native.tsx");

export function MemberRolesAbstractUI(width) {
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
