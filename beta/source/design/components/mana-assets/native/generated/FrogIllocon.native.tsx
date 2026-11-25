// Module ID: 18524
// Function ID: 18525
// Name: FrogIllocon
// Dependencies: [19, 21, 18525, 18526, 18527, 7357, 5600, 2]
// Exports: FrogIllocon

// Module 18524 (FrogIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5600 */;
import react_native from "react-native" /* 7357 */;
import _modDef18525 from "module_18525" /* 18525 */;
import _modDef18526 from "module_18526" /* 18526 */;
import _modDef18527 from "module_18527" /* 18527 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18525 };
obj[1] = obj2;
obj[2] = { uri: _modDef18526 };
({ uri: _modDef18526 });
obj[3] = { uri: _modDef18527 };
({ uri: _modDef18527 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/FrogIllocon.native.tsx");

export function FrogIllocon(size) {
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
