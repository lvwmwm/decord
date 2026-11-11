// Module ID: 19632
// Function ID: 19633
// Name: ShopIllocon
// Dependencies: [19, 21, 19633, 19634, 19635, 7689, 5957, 2]
// Exports: ShopIllocon

// Module 19632 (ShopIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5957 */;
import react_native from "react-native" /* 7689 */;
import _modDef19633 from "module_19633" /* 19633 */;
import _modDef19634 from "module_19634" /* 19634 */;
import _modDef19635 from "module_19635" /* 19635 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef19633 };
obj[1] = obj2;
obj[2] = { uri: _modDef19634 };
({ uri: _modDef19634 });
obj[3] = { uri: _modDef19635 };
({ uri: _modDef19635 });
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
  obj2 = num(7689);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
