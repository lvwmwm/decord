// Module ID: 14524
// Function ID: 14525
// Name: BookIllocon
// Dependencies: [19, 21, 14525, 14526, 14527, 7213, 5854, 2]
// Exports: BookIllocon

// Module 14524 (BookIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5854 */;
import react_native from "react-native" /* 7213 */;
import _modDef14525 from "module_14525" /* 14525 */;
import _modDef14526 from "module_14526" /* 14526 */;
import _modDef14527 from "module_14527" /* 14527 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14525 };
obj[1] = obj2;
obj[2] = { uri: _modDef14526 };
({ uri: _modDef14526 });
obj[3] = { uri: _modDef14527 };
({ uri: _modDef14527 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/BookIllocon.native.tsx");

export function BookIllocon(size) {
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
  obj2 = num(7213);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
