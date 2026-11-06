// Module ID: 12878
// Function ID: 12879
// Name: CatIllocon
// Dependencies: [19, 21, 12879, 12880, 12881, 7160, 5872, 2]
// Exports: CatIllocon

// Module 12878 (CatIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5872 */;
import react_native from "react-native" /* 7160 */;
import _modDef12879 from "module_12879" /* 12879 */;
import _modDef12880 from "module_12880" /* 12880 */;
import _modDef12881 from "module_12881" /* 12881 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef12879 };
obj[1] = obj2;
obj[2] = { uri: _modDef12880 };
({ uri: _modDef12880 });
obj[3] = { uri: _modDef12881 };
({ uri: _modDef12881 });
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
  obj2 = num(7160);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
