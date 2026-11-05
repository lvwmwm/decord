// Module ID: 14509
// Function ID: 14510
// Name: PencilIllocon
// Dependencies: [19, 21, 14510, 14395, 14511, 7213, 5854, 2]
// Exports: PencilIllocon

// Module 14509 (PencilIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5854 */;
import react_native from "react-native" /* 7213 */;
import _modDef14395 from "module_14395" /* 14395 */;
import _modDef14510 from "module_14510" /* 14510 */;
import _modDef14511 from "module_14511" /* 14511 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14510 };
obj[1] = obj2;
obj[2] = { uri: _modDef14395 };
({ uri: _modDef14395 });
obj[3] = { uri: _modDef14511 };
({ uri: _modDef14511 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/PencilIllocon.native.tsx");

export function PencilIllocon(size) {
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
  obj2 = num(7213);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
