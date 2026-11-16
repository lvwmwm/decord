// Module ID: 12929
// Function ID: 12930
// Name: ButterflyIllocon
// Dependencies: [19, 21, 12930, 12931, 12932, 7168, 5874, 2]
// Exports: ButterflyIllocon

// Module 12929 (ButterflyIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5874 */;
import react_native from "react-native" /* 7168 */;
import _modDef12930 from "module_12930" /* 12930 */;
import _modDef12931 from "module_12931" /* 12931 */;
import _modDef12932 from "module_12932" /* 12932 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef12930 };
obj[1] = obj2;
obj[2] = { uri: _modDef12931 };
({ uri: _modDef12931 });
obj[3] = { uri: _modDef12932 };
({ uri: _modDef12932 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ButterflyIllocon.native.tsx");

export function ButterflyIllocon(size) {
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
