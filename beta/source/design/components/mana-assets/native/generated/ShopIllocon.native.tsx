// Module ID: 19091
// Function ID: 19092
// Name: ShopIllocon
// Dependencies: [19, 21, 19092, 19093, 19094, 7357, 5600, 2]
// Exports: ShopIllocon

// Module 19091 (ShopIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5600 */;
import react_native from "react-native" /* 7357 */;
import _modDef19092 from "module_19092" /* 19092 */;
import _modDef19093 from "module_19093" /* 19093 */;
import _modDef19094 from "module_19094" /* 19094 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef19092 };
obj[1] = obj2;
obj[2] = { uri: _modDef19093 };
({ uri: _modDef19093 });
obj[3] = { uri: _modDef19094 };
({ uri: _modDef19094 });
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
  obj2 = num(7357);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
