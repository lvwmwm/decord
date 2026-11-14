// Module ID: 15045
// Function ID: 15046
// Name: BookIllocon
// Dependencies: [19, 21, 15046, 15047, 15048, 7755, 6020, 2]
// Exports: BookIllocon

// Module 15045 (BookIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 6020 */;
import react_native from "react-native" /* 7755 */;
import _modDef15046 from "module_15046" /* 15046 */;
import _modDef15047 from "module_15047" /* 15047 */;
import _modDef15048 from "module_15048" /* 15048 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef15046 };
obj[1] = obj2;
obj[2] = { uri: _modDef15047 };
({ uri: _modDef15047 });
obj[3] = { uri: _modDef15048 };
({ uri: _modDef15048 });
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
  obj2 = num(7755);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
