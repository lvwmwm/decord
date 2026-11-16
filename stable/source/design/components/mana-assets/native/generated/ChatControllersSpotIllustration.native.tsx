// Module ID: 18700
// Function ID: 18701
// Name: ChatControllersSpotIllustration
// Dependencies: [19, 21, 18701, 18702, 18703, 7168, 5874, 2]
// Exports: ChatControllersSpotIllustration

// Module 18700 (ChatControllersSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7168 */;
import _modDef18701 from "module_18701" /* 18701 */;
import _modDef18702 from "module_18702" /* 18702 */;
import _modDef18703 from "module_18703" /* 18703 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18701 };
obj[1] = obj2;
let obj3 = { uri: _modDef18702 };
obj[2] = obj3;
obj[3] = { uri: _modDef18703 };
({ uri: _modDef18703 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ChatControllersSpotIllustration.native.tsx");

export function ChatControllersSpotIllustration(width) {
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
