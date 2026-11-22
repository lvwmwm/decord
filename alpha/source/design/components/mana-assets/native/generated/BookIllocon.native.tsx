// Module ID: 13633
// Function ID: 13634
// Name: BookIllocon
// Dependencies: [19, 21, 13634, 13635, 13636, 7357, 5600, 2]
// Exports: BookIllocon

// Module 13633 (BookIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5600 */;
import react_native from "react-native" /* 7357 */;
import _modDef13634 from "module_13634" /* 13634 */;
import _modDef13635 from "module_13635" /* 13635 */;
import _modDef13636 from "module_13636" /* 13636 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13634 };
obj[1] = obj2;
obj[2] = { uri: _modDef13635 };
({ uri: _modDef13635 });
obj[3] = { uri: _modDef13636 };
({ uri: _modDef13636 });
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
  obj2 = num(7357);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
