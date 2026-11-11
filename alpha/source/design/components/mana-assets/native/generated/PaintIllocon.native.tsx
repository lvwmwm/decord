// Module ID: 14939
// Function ID: 14940
// Name: PaintIllocon
// Dependencies: [19, 21, 14940, 14941, 14942, 7689, 5957, 2]
// Exports: PaintIllocon

// Module 14939 (PaintIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5957 */;
import react_native from "react-native" /* 7689 */;
import _modDef14940 from "module_14940" /* 14940 */;
import _modDef14941 from "module_14941" /* 14941 */;
import _modDef14942 from "module_14942" /* 14942 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14940 };
obj[1] = obj2;
obj[2] = { uri: _modDef14941 };
({ uri: _modDef14941 });
obj[3] = { uri: _modDef14942 };
({ uri: _modDef14942 });
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
  obj2 = num(7689);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
