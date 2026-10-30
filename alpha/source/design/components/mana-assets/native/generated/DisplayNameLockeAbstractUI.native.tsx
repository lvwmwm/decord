// Module ID: 18822
// Function ID: 18823
// Name: DisplayNameLockeAbstractUI
// Dependencies: [19, 21, 18823, 18824, 18825, 7063, 5712, 2]
// Exports: DisplayNameLockeAbstractUI

// Module 18822 (DisplayNameLockeAbstractUI)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7063 */;
import _modDef18823 from "module_18823" /* 18823 */;
import _modDef18824 from "module_18824" /* 18824 */;
import _modDef18825 from "module_18825" /* 18825 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18823 };
obj[1] = obj2;
let obj3 = { uri: _modDef18824 };
obj[2] = obj3;
obj[3] = { uri: _modDef18825 };
({ uri: _modDef18825 });
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
