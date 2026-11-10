// Module ID: 14561
// Function ID: 14562
// Name: BookIllocon
// Dependencies: [19, 21, 14562, 14563, 14564, 7138, 5844, 2]
// Exports: BookIllocon

// Module 14561 (BookIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5844 */;
import react_native from "react-native" /* 7138 */;
import _modDef14562 from "module_14562" /* 14562 */;
import _modDef14563 from "module_14563" /* 14563 */;
import _modDef14564 from "module_14564" /* 14564 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14562 };
obj[1] = obj2;
obj[2] = { uri: _modDef14563 };
({ uri: _modDef14563 });
obj[3] = { uri: _modDef14564 };
({ uri: _modDef14564 });
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
  obj2 = num(7138);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
