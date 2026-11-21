// Module ID: 19076
// Function ID: 19077
// Name: ShopIllocon
// Dependencies: [19, 21, 19077, 19078, 19079, 7357, 5600, 2]
// Exports: ShopIllocon

// Module 19076 (ShopIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5600 */;
import react_native from "react-native" /* 7357 */;
import _modDef19077 from "module_19077" /* 19077 */;
import _modDef19078 from "module_19078" /* 19078 */;
import _modDef19079 from "module_19079" /* 19079 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef19077 };
obj[1] = obj2;
obj[2] = { uri: _modDef19078 };
({ uri: _modDef19078 });
obj[3] = { uri: _modDef19079 };
({ uri: _modDef19079 });
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
