// Module ID: 14770
// Function ID: 14771
// Name: ServerChannelsAbstractUI
// Dependencies: [19, 21, 14771, 14772, 14773, 7238, 5479, 2]
// Exports: ServerChannelsAbstractUI

// Module 14770 (ServerChannelsAbstractUI)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7238 */;
import _modDef14771 from "module_14771" /* 14771 */;
import _modDef14772 from "module_14772" /* 14772 */;
import _modDef14773 from "module_14773" /* 14773 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14771 };
obj[1] = obj2;
let obj3 = { uri: _modDef14772 };
obj[2] = obj3;
obj[3] = { uri: _modDef14773 };
({ uri: _modDef14773 });
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
