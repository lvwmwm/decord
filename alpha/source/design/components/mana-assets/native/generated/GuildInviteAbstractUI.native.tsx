// Module ID: 12200
// Function ID: 12201
// Name: GuildInviteAbstractUI
// Dependencies: [19, 21, 12201, 12202, 12203, 7238, 5479, 2]
// Exports: GuildInviteAbstractUI

// Module 12200 (GuildInviteAbstractUI)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7238 */;
import _modDef12201 from "module_12201" /* 12201 */;
import _modDef12202 from "module_12202" /* 12202 */;
import _modDef12203 from "module_12203" /* 12203 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef12201 };
obj[1] = obj2;
let obj3 = { uri: _modDef12202 };
obj[2] = obj3;
obj[3] = { uri: _modDef12203 };
({ uri: _modDef12203 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/GuildInviteAbstractUI.native.tsx");

export function GuildInviteAbstractUI(width) {
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
