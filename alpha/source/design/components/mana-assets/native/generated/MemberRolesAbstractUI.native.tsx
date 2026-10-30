// Module ID: 19722
// Function ID: 19723
// Name: MemberRolesAbstractUI
// Dependencies: [19, 21, 19723, 19724, 19725, 7063, 5712, 2]
// Exports: MemberRolesAbstractUI

// Module 19722 (MemberRolesAbstractUI)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7063 */;
import _modDef19723 from "module_19723" /* 19723 */;
import _modDef19724 from "module_19724" /* 19724 */;
import _modDef19725 from "module_19725" /* 19725 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef19723 };
obj[1] = obj2;
let obj3 = { uri: _modDef19724 };
obj[2] = obj3;
obj[3] = { uri: _modDef19725 };
({ uri: _modDef19725 });
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
