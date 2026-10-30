// Module ID: 12650
// Function ID: 12651
// Name: CatIllocon
// Dependencies: [19, 21, 12651, 12652, 12653, 7063, 5712, 2]
// Exports: CatIllocon

// Module 12650 (CatIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5712 */;
import react_native from "react-native" /* 7063 */;
import _modDef12651 from "module_12651" /* 12651 */;
import _modDef12652 from "module_12652" /* 12652 */;
import _modDef12653 from "module_12653" /* 12653 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef12651 };
obj[1] = obj2;
obj[2] = { uri: _modDef12652 };
({ uri: _modDef12652 });
obj[3] = { uri: _modDef12653 };
({ uri: _modDef12653 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/CatIllocon.native.tsx");

export function CatIllocon(size) {
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
  obj2 = num(7063);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
