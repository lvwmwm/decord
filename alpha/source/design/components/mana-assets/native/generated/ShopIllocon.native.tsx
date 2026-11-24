// Module ID: 19120
// Function ID: 19121
// Name: ShopIllocon
// Dependencies: [19, 21, 19121, 19122, 19123, 7135, 5604, 2]
// Exports: ShopIllocon

// Module 19120 (ShopIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5604 */;
import react_native from "react-native" /* 7135 */;
import _modDef19121 from "module_19121" /* 19121 */;
import _modDef19122 from "module_19122" /* 19122 */;
import _modDef19123 from "module_19123" /* 19123 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef19121 };
obj[1] = obj2;
obj[2] = { uri: _modDef19122 };
({ uri: _modDef19122 });
obj[3] = { uri: _modDef19123 };
({ uri: _modDef19123 });
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
