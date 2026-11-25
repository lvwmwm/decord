// Module ID: 19061
// Function ID: 19062
// Name: DisplayNameLockeAbstractUI
// Dependencies: [19, 21, 19062, 19063, 19064, 7230, 5699, 2]
// Exports: DisplayNameLockeAbstractUI

// Module 19061 (DisplayNameLockeAbstractUI)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7230 */;
import _modDef19062 from "module_19062" /* 19062 */;
import _modDef19063 from "module_19063" /* 19063 */;
import _modDef19064 from "module_19064" /* 19064 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef19062 };
obj[1] = obj2;
let obj3 = { uri: _modDef19063 };
obj[2] = obj3;
obj[3] = { uri: _modDef19064 };
({ uri: _modDef19064 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/DisplayNameLockeAbstractUI.native.tsx");

export function DisplayNameLockeAbstractUI(width) {
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
    size = { width, height, scale: num, intrinsicWidth: 288, intrinsicHeight: 123 };
    obj = react_native;
    return obj.getAssetSizeStyle(size);
  }, items);
  obj = { fadeDuration: 0, source: obj2.getAssetSource(obj), style: memo, accessible, accessibilityLabel, resizeMode: obj3.getAssetResizeMode(resizeMode) };
  height(num[6]);
  obj2 = width(num[5]);
  obj3 = width(num[5]);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={obj3.getAssetResizeMode(resizeMode)} />;
}
