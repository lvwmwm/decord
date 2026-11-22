// Module ID: 12263
// Function ID: 12264
// Name: GuildRolesAbstractUI
// Dependencies: [19, 21, 12264, 12265, 12266, 7357, 5600, 2]
// Exports: GuildRolesAbstractUI

// Module 12263 (GuildRolesAbstractUI)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7357 */;
import _modDef12264 from "module_12264" /* 12264 */;
import _modDef12265 from "module_12265" /* 12265 */;
import _modDef12266 from "module_12266" /* 12266 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef12264 };
obj[1] = obj2;
let obj3 = { uri: _modDef12265 };
obj[2] = obj3;
obj[3] = { uri: _modDef12266 };
({ uri: _modDef12266 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/GuildRolesAbstractUI.native.tsx");

export function GuildRolesAbstractUI(width) {
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
