// Module ID: 18003
// Function ID: 18004
// Name: SafetyChatSpotIllustration
// Dependencies: [19, 21, 18004, 18005, 18006, 7160, 5872, 2]
// Exports: SafetyChatSpotIllustration

// Module 18003 (SafetyChatSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7160 */;
import _modDef18004 from "module_18004" /* 18004 */;
import _modDef18005 from "module_18005" /* 18005 */;
import _modDef18006 from "module_18006" /* 18006 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18004 };
obj[1] = obj2;
let obj3 = { uri: _modDef18005 };
obj[2] = obj3;
obj[3] = { uri: _modDef18006 };
({ uri: _modDef18006 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/SafetyChatSpotIllustration.native.tsx");

export function SafetyChatSpotIllustration(width) {
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
