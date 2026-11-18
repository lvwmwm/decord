// Module ID: 12209
// Function ID: 12210
// Name: GuildRolesAbstractUI
// Dependencies: [19, 21, 12210, 12211, 12212, 7268, 5510, 2]
// Exports: GuildRolesAbstractUI

// Module 12209 (GuildRolesAbstractUI)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7268 */;
import _modDef12210 from "module_12210" /* 12210 */;
import _modDef12211 from "module_12211" /* 12211 */;
import _modDef12212 from "module_12212" /* 12212 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef12210 };
obj[1] = obj2;
let obj3 = { uri: _modDef12211 };
obj[2] = obj3;
obj[3] = { uri: _modDef12212 };
({ uri: _modDef12212 });
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
