// Module ID: 11761
// Function ID: 11762
// Name: CouchSpotIllustration
// Dependencies: [19, 21, 11762, 11763, 11764, 7069, 5717, 2]
// Exports: CouchSpotIllustration

// Module 11761 (CouchSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7069 */;
import _modDef11762 from "module_11762" /* 11762 */;
import _modDef11763 from "module_11763" /* 11763 */;
import _modDef11764 from "module_11764" /* 11764 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef11762 };
obj[1] = obj2;
let obj3 = { uri: _modDef11763 };
obj[2] = obj3;
obj[3] = { uri: _modDef11764 };
({ uri: _modDef11764 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/CouchSpotIllustration.native.tsx");

export function CouchSpotIllustration(width) {
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
