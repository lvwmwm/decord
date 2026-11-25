// Module ID: 19992
// Function ID: 19993
// Name: MemberRolesAbstractUI
// Dependencies: [19, 21, 19993, 19994, 19995, 7230, 5699, 2]
// Exports: MemberRolesAbstractUI

// Module 19992 (MemberRolesAbstractUI)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7230 */;
import _modDef19993 from "module_19993" /* 19993 */;
import _modDef19994 from "module_19994" /* 19994 */;
import _modDef19995 from "module_19995" /* 19995 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef19993 };
obj[1] = obj2;
let obj3 = { uri: _modDef19994 };
obj[2] = obj3;
obj[3] = { uri: _modDef19995 };
({ uri: _modDef19995 });
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
