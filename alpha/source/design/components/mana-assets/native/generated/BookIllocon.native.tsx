// Module ID: 13729
// Function ID: 13730
// Name: BookIllocon
// Dependencies: [19, 21, 13730, 13731, 13732, 7261, 5730, 2]
// Exports: BookIllocon

// Module 13729 (BookIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5730 */;
import react_native from "react-native" /* 7261 */;
import _modDef13730 from "module_13730" /* 13730 */;
import _modDef13731 from "module_13731" /* 13731 */;
import _modDef13732 from "module_13732" /* 13732 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13730 };
obj[1] = obj2;
obj[2] = { uri: _modDef13731 };
({ uri: _modDef13731 });
obj[3] = { uri: _modDef13732 };
({ uri: _modDef13732 });
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
  obj2 = num(7261);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
