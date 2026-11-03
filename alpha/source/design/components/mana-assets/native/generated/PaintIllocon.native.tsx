// Module ID: 14434
// Function ID: 14435
// Name: PaintIllocon
// Dependencies: [19, 21, 14435, 14436, 14437, 7195, 5837, 2]
// Exports: PaintIllocon

// Module 14434 (PaintIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5837 */;
import react_native from "react-native" /* 7195 */;
import _modDef14435 from "module_14435" /* 14435 */;
import _modDef14436 from "module_14436" /* 14436 */;
import _modDef14437 from "module_14437" /* 14437 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14435 };
obj[1] = obj2;
obj[2] = { uri: _modDef14436 };
({ uri: _modDef14436 });
obj[3] = { uri: _modDef14437 };
({ uri: _modDef14437 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/PaintIllocon.native.tsx");

export function PaintIllocon(size) {
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
  obj2 = num(7195);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
