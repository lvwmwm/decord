// Module ID: 18509
// Function ID: 18510
// Name: GoatIllocon
// Dependencies: [19, 21, 18510, 18511, 18512, 7357, 5600, 2]
// Exports: GoatIllocon

// Module 18509 (GoatIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5600 */;
import react_native from "react-native" /* 7357 */;
import _modDef18510 from "module_18510" /* 18510 */;
import _modDef18511 from "module_18511" /* 18511 */;
import _modDef18512 from "module_18512" /* 18512 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18510 };
obj[1] = obj2;
obj[2] = { uri: _modDef18511 };
({ uri: _modDef18511 });
obj[3] = { uri: _modDef18512 };
({ uri: _modDef18512 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/GoatIllocon.native.tsx");

export function GoatIllocon(size) {
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
