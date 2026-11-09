// Module ID: 19237
// Function ID: 19238
// Name: DisplayNameLockeAbstractUI
// Dependencies: [19, 21, 19238, 19239, 19240, 7135, 5842, 2]
// Exports: DisplayNameLockeAbstractUI

// Module 19237 (DisplayNameLockeAbstractUI)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7135 */;
import _modDef19238 from "module_19238" /* 19238 */;
import _modDef19239 from "module_19239" /* 19239 */;
import _modDef19240 from "module_19240" /* 19240 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef19238 };
obj[1] = obj2;
let obj3 = { uri: _modDef19239 };
obj[2] = obj3;
obj[3] = { uri: _modDef19240 };
({ uri: _modDef19240 });
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
