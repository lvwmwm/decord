// Module ID: 13594
// Function ID: 13595
// Name: FindFriendsSpotIllustration
// Dependencies: [19, 21, 13595, 13596, 13597, 7357, 5600, 2]
// Exports: FindFriendsSpotIllustration

// Module 13594 (FindFriendsSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7357 */;
import _modDef13595 from "module_13595" /* 13595 */;
import _modDef13596 from "module_13596" /* 13596 */;
import _modDef13597 from "module_13597" /* 13597 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13595 };
obj[1] = obj2;
let obj3 = { uri: _modDef13596 };
obj[2] = obj3;
obj[3] = { uri: _modDef13597 };
({ uri: _modDef13597 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/FindFriendsSpotIllustration.native.tsx");

export function FindFriendsSpotIllustration(width) {
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
