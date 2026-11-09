// Module ID: 14535
// Function ID: 14536
// Name: BookIllocon
// Dependencies: [19, 21, 14536, 14537, 14538, 7135, 5842, 2]
// Exports: BookIllocon

// Module 14535 (BookIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5842 */;
import react_native from "react-native" /* 7135 */;
import _modDef14536 from "module_14536" /* 14536 */;
import _modDef14537 from "module_14537" /* 14537 */;
import _modDef14538 from "module_14538" /* 14538 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14536 };
obj[1] = obj2;
obj[2] = { uri: _modDef14537 };
({ uri: _modDef14537 });
obj[3] = { uri: _modDef14538 };
({ uri: _modDef14538 });
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
  obj2 = num(7135);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
