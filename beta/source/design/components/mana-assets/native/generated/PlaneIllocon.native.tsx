// Module ID: 20884
// Function ID: 20885
// Name: PlaneIllocon
// Dependencies: [19, 21, 20885, 14912, 20886, 7755, 6010, 2]
// Exports: PlaneIllocon

// Module 20884 (PlaneIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 6010 */;
import react_native from "react-native" /* 7755 */;
import _modDef14912 from "module_14912" /* 14912 */;
import _modDef20885 from "module_20885" /* 20885 */;
import _modDef20886 from "module_20886" /* 20886 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef20885 };
obj[1] = obj2;
obj[2] = { uri: _modDef14912 };
({ uri: _modDef14912 });
obj[3] = { uri: _modDef20886 };
({ uri: _modDef20886 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/PlaneIllocon.native.tsx");

export function PlaneIllocon(size) {
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
  obj2 = num(7755);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
