// Module ID: 14539
// Function ID: 14540
// Name: PaintIllocon
// Dependencies: [19, 21, 14540, 14541, 14542, 7135, 5842, 2]
// Exports: PaintIllocon

// Module 14539 (PaintIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5842 */;
import react_native from "react-native" /* 7135 */;
import _modDef14540 from "module_14540" /* 14540 */;
import _modDef14541 from "module_14541" /* 14541 */;
import _modDef14542 from "module_14542" /* 14542 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14540 };
obj[1] = obj2;
obj[2] = { uri: _modDef14541 };
({ uri: _modDef14541 });
obj[3] = { uri: _modDef14542 };
({ uri: _modDef14542 });
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
  obj2 = num(7135);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
