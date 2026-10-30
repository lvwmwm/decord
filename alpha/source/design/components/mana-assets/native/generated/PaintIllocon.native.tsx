// Module ID: 14250
// Function ID: 14251
// Name: PaintIllocon
// Dependencies: [19, 21, 14251, 14252, 14253, 7063, 5712, 2]
// Exports: PaintIllocon

// Module 14250 (PaintIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5712 */;
import react_native from "react-native" /* 7063 */;
import _modDef14251 from "module_14251" /* 14251 */;
import _modDef14252 from "module_14252" /* 14252 */;
import _modDef14253 from "module_14253" /* 14253 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14251 };
obj[1] = obj2;
obj[2] = { uri: _modDef14252 };
({ uri: _modDef14252 });
obj[3] = { uri: _modDef14253 };
({ uri: _modDef14253 });
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
  obj2 = num(7063);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
