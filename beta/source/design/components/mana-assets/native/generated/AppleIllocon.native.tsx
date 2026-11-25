// Module ID: 13632
// Function ID: 13633
// Name: AppleIllocon
// Dependencies: [19, 21, 13633, 13634, 13635, 7357, 5600, 2]
// Exports: AppleIllocon

// Module 13632 (AppleIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5600 */;
import react_native from "react-native" /* 7357 */;
import _modDef13633 from "module_13633" /* 13633 */;
import _modDef13634 from "module_13634" /* 13634 */;
import _modDef13635 from "module_13635" /* 13635 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13633 };
obj[1] = obj2;
obj[2] = { uri: _modDef13634 };
({ uri: _modDef13634 });
obj[3] = { uri: _modDef13635 };
({ uri: _modDef13635 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/AppleIllocon.native.tsx");

export function AppleIllocon(size) {
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
