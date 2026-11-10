// Module ID: 19038
// Function ID: 19039
// Name: ShopIllocon
// Dependencies: [19, 21, 19039, 19040, 19041, 7069, 5717, 2]
// Exports: ShopIllocon

// Module 19038 (ShopIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5717 */;
import react_native from "react-native" /* 7069 */;
import _modDef19039 from "module_19039" /* 19039 */;
import _modDef19040 from "module_19040" /* 19040 */;
import _modDef19041 from "module_19041" /* 19041 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef19039 };
obj[1] = obj2;
obj[2] = { uri: _modDef19040 };
({ uri: _modDef19040 });
obj[3] = { uri: _modDef19041 };
({ uri: _modDef19041 });
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
  obj2 = num(7069);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
