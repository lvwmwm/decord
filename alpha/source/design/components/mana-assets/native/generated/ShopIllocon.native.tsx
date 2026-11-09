// Module ID: 19413
// Function ID: 19414
// Name: ShopIllocon
// Dependencies: [19, 21, 19414, 19415, 19416, 7135, 5842, 2]
// Exports: ShopIllocon

// Module 19413 (ShopIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5842 */;
import react_native from "react-native" /* 7135 */;
import _modDef19414 from "module_19414" /* 19414 */;
import _modDef19415 from "module_19415" /* 19415 */;
import _modDef19416 from "module_19416" /* 19416 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef19414 };
obj[1] = obj2;
obj[2] = { uri: _modDef19415 };
({ uri: _modDef19415 });
obj[3] = { uri: _modDef19416 };
({ uri: _modDef19416 });
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
  obj2 = num(7135);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
