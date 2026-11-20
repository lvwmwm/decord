// Module ID: 13474
// Function ID: 13475
// Name: FindFriendsSpotIllustration
// Dependencies: [19, 21, 13475, 13476, 13477, 7237, 5481, 2]
// Exports: FindFriendsSpotIllustration

// Module 13474 (FindFriendsSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7237 */;
import _modDef13475 from "module_13475" /* 13475 */;
import _modDef13476 from "module_13476" /* 13476 */;
import _modDef13477 from "module_13477" /* 13477 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13475 };
obj[1] = obj2;
let obj3 = { uri: _modDef13476 };
obj[2] = obj3;
obj[3] = { uri: _modDef13477 };
({ uri: _modDef13477 });
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
