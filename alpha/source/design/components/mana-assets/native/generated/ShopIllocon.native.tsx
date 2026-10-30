// Module ID: 18987
// Function ID: 18988
// Name: ShopIllocon
// Dependencies: [19, 21, 18988, 18989, 18990, 7063, 5712, 2]
// Exports: ShopIllocon

// Module 18987 (ShopIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5712 */;
import react_native from "react-native" /* 7063 */;
import _modDef18988 from "module_18988" /* 18988 */;
import _modDef18989 from "module_18989" /* 18989 */;
import _modDef18990 from "module_18990" /* 18990 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18988 };
obj[1] = obj2;
obj[2] = { uri: _modDef18989 };
({ uri: _modDef18989 });
obj[3] = { uri: _modDef18990 };
({ uri: _modDef18990 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ShopIllocon.native.tsx");

export function ShopIllocon(size) {
  let accessibilityLabel;
  let accessible;
  let obj2;
  let resizeMode;
  let num = size.size;
  ({ accessible, accessibilityLabel, resizeMode } = size);
  if (num === undefined) {
    num = 64;
  }
  const items = [num];
  const memo = react.useMemo(() => {
    size = { width: num, height: num, intrinsicWidth: 64, intrinsicHeight: 64 };
    obj = react_native;
    return obj.getAssetSizeStyle(size);
  }, items);
  obj = { fadeDuration: 0, source: obj2.getAssetSource(obj), style: memo, accessible, accessibilityLabel, resizeMode };
  FastImageDefault;
  obj2 = num(7063);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
