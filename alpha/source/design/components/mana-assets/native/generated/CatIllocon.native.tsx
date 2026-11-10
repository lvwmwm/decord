// Module ID: 12903
// Function ID: 12904
// Name: CatIllocon
// Dependencies: [19, 21, 12904, 12905, 12906, 7138, 5844, 2]
// Exports: CatIllocon

// Module 12903 (CatIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5844 */;
import react_native from "react-native" /* 7138 */;
import _modDef12904 from "module_12904" /* 12904 */;
import _modDef12905 from "module_12905" /* 12905 */;
import _modDef12906 from "module_12906" /* 12906 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef12904 };
obj[1] = obj2;
obj[2] = { uri: _modDef12905 };
({ uri: _modDef12905 });
obj[3] = { uri: _modDef12906 };
({ uri: _modDef12906 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/CatIllocon.native.tsx");

export function CatIllocon(size) {
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
  obj2 = num(7138);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
