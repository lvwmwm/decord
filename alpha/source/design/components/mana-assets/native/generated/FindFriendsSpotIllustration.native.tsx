// Module ID: 14485
// Function ID: 14486
// Name: FindFriendsSpotIllustration
// Dependencies: [19, 21, 14486, 14487, 14488, 7213, 5854, 2]
// Exports: FindFriendsSpotIllustration

// Module 14485 (FindFriendsSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7213 */;
import _modDef14486 from "module_14486" /* 14486 */;
import _modDef14487 from "module_14487" /* 14487 */;
import _modDef14488 from "module_14488" /* 14488 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14486 };
obj[1] = obj2;
let obj3 = { uri: _modDef14487 };
obj[2] = obj3;
obj[3] = { uri: _modDef14488 };
({ uri: _modDef14488 });
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
