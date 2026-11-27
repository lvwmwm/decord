// Module ID: 12365
// Function ID: 12366
// Name: GuildChatAbstractUI
// Dependencies: [19, 21, 12366, 12367, 12368, 7261, 5730, 2]
// Exports: GuildChatAbstractUI

// Module 12365 (GuildChatAbstractUI)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7261 */;
import _modDef12366 from "module_12366" /* 12366 */;
import _modDef12367 from "module_12367" /* 12367 */;
import _modDef12368 from "module_12368" /* 12368 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef12366 };
obj[1] = obj2;
let obj3 = { uri: _modDef12367 };
obj[2] = obj3;
obj[3] = { uri: _modDef12368 };
({ uri: _modDef12368 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/GuildChatAbstractUI.native.tsx");

export function GuildChatAbstractUI(width) {
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
