// Module ID: 13652
// Function ID: 13653
// Name: ChairIllocon
// Dependencies: [19, 21, 13653, 13654, 13655, 7357, 5600, 2]
// Exports: ChairIllocon

// Module 13652 (ChairIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5600 */;
import react_native from "react-native" /* 7357 */;
import _modDef13653 from "module_13653" /* 13653 */;
import _modDef13654 from "module_13654" /* 13654 */;
import _modDef13655 from "module_13655" /* 13655 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13653 };
obj[1] = obj2;
obj[2] = { uri: _modDef13654 };
({ uri: _modDef13654 });
obj[3] = { uri: _modDef13655 };
({ uri: _modDef13655 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ChairIllocon.native.tsx");

export function ChairIllocon(size) {
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
