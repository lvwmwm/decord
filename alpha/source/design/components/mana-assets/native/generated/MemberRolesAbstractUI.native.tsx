// Module ID: 19718
// Function ID: 19719
// Name: MemberRolesAbstractUI
// Dependencies: [19, 21, 19719, 19720, 19721, 7237, 5481, 2]
// Exports: MemberRolesAbstractUI

// Module 19718 (MemberRolesAbstractUI)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7237 */;
import _modDef19719 from "module_19719" /* 19719 */;
import _modDef19720 from "module_19720" /* 19720 */;
import _modDef19721 from "module_19721" /* 19721 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef19719 };
obj[1] = obj2;
let obj3 = { uri: _modDef19720 };
obj[2] = obj3;
obj[3] = { uri: _modDef19721 };
({ uri: _modDef19721 });
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
