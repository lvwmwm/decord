// Module ID: 13639
// Function ID: 13640
// Name: PaintIllocon
// Dependencies: [19, 21, 13640, 13641, 13642, 7357, 5600, 2]
// Exports: PaintIllocon

// Module 13639 (PaintIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5600 */;
import react_native from "react-native" /* 7357 */;
import _modDef13640 from "module_13640" /* 13640 */;
import _modDef13641 from "module_13641" /* 13641 */;
import _modDef13642 from "module_13642" /* 13642 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13640 };
obj[1] = obj2;
obj[2] = { uri: _modDef13641 };
({ uri: _modDef13641 });
obj[3] = { uri: _modDef13642 };
({ uri: _modDef13642 });
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
  obj2 = num(7357);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
