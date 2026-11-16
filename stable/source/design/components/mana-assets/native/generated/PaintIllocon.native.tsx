// Module ID: 14567
// Function ID: 14568
// Name: PaintIllocon
// Dependencies: [19, 21, 14568, 14569, 14570, 7168, 5874, 2]
// Exports: PaintIllocon

// Module 14567 (PaintIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5874 */;
import react_native from "react-native" /* 7168 */;
import _modDef14568 from "module_14568" /* 14568 */;
import _modDef14569 from "module_14569" /* 14569 */;
import _modDef14570 from "module_14570" /* 14570 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14568 };
obj[1] = obj2;
obj[2] = { uri: _modDef14569 };
({ uri: _modDef14569 });
obj[3] = { uri: _modDef14570 };
({ uri: _modDef14570 });
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
  obj2 = num(7168);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
