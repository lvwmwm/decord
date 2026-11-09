// Module ID: 15467
// Function ID: 15468
// Name: ServerChannelsAbstractUI
// Dependencies: [19, 21, 15468, 15469, 15470, 7135, 5842, 2]
// Exports: ServerChannelsAbstractUI

// Module 15467 (ServerChannelsAbstractUI)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7135 */;
import _modDef15468 from "module_15468" /* 15468 */;
import _modDef15469 from "module_15469" /* 15469 */;
import _modDef15470 from "module_15470" /* 15470 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef15468 };
obj[1] = obj2;
let obj3 = { uri: _modDef15469 };
obj[2] = obj3;
obj[3] = { uri: _modDef15470 };
({ uri: _modDef15470 });
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
