// Module ID: 13991
// Function ID: 13992
// Name: GuildFallbackAbstractUI
// Dependencies: [19, 21, 13992, 13993, 13994, 7689, 5957, 2]
// Exports: GuildFallbackAbstractUI

// Module 13991 (GuildFallbackAbstractUI)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7689 */;
import _modDef13992 from "module_13992" /* 13992 */;
import _modDef13993 from "module_13993" /* 13993 */;
import _modDef13994 from "module_13994" /* 13994 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13992 };
obj[1] = obj2;
let obj3 = { uri: _modDef13993 };
obj[2] = obj3;
obj[3] = { uri: _modDef13994 };
({ uri: _modDef13994 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/GuildFallbackAbstractUI.native.tsx");

export function GuildFallbackAbstractUI(width) {
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
    size = { width, height, scale: num, intrinsicWidth: 144, intrinsicHeight: 144 };
    obj = react_native;
    return obj.getAssetSizeStyle(size);
  }, items);
  obj = { fadeDuration: 0, source: obj2.getAssetSource(obj), style: memo, accessible, accessibilityLabel, resizeMode: obj3.getAssetResizeMode(resizeMode) };
  height(num[6]);
  obj2 = width(num[5]);
  obj3 = width(num[5]);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={obj3.getAssetResizeMode(resizeMode)} />;
}
