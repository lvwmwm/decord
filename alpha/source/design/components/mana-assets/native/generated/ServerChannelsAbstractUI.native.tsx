// Module ID: 15142
// Function ID: 15143
// Name: ServerChannelsAbstractUI
// Dependencies: [19, 21, 15143, 15144, 15145, 7063, 5712, 2]
// Exports: ServerChannelsAbstractUI

// Module 15142 (ServerChannelsAbstractUI)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7063 */;
import _modDef15143 from "module_15143" /* 15143 */;
import _modDef15144 from "module_15144" /* 15144 */;
import _modDef15145 from "module_15145" /* 15145 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef15143 };
obj[1] = obj2;
let obj3 = { uri: _modDef15144 };
obj[2] = obj3;
obj[3] = { uri: _modDef15145 };
({ uri: _modDef15145 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ServerChannelsAbstractUI.native.tsx");

export function ServerChannelsAbstractUI(width) {
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
    size = { width, height, scale: num, intrinsicWidth: 288, intrinsicHeight: 162 };
    obj = react_native;
    return obj.getAssetSizeStyle(size);
  }, items);
  obj = { fadeDuration: 0, source: obj2.getAssetSource(obj), style: memo, accessible, accessibilityLabel, resizeMode: obj3.getAssetResizeMode(resizeMode) };
  height(num[6]);
  obj2 = width(num[5]);
  obj3 = width(num[5]);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={obj3.getAssetResizeMode(resizeMode)} />;
}
