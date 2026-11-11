// Module ID: 20728
// Function ID: 20729
// Name: PlaneIllocon
// Dependencies: [19, 21, 20729, 14802, 20730, 7689, 5957, 2]
// Exports: PlaneIllocon

// Module 20728 (PlaneIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5957 */;
import react_native from "react-native" /* 7689 */;
import _modDef14802 from "module_14802" /* 14802 */;
import _modDef20729 from "module_20729" /* 20729 */;
import _modDef20730 from "module_20730" /* 20730 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef20729 };
obj[1] = obj2;
obj[2] = { uri: _modDef14802 };
({ uri: _modDef14802 });
obj[3] = { uri: _modDef20730 };
({ uri: _modDef20730 });
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
  obj2 = num(7689);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
