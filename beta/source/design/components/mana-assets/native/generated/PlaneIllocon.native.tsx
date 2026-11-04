// Module ID: 20102
// Function ID: 20103
// Name: PlaneIllocon
// Dependencies: [19, 21, 20103, 14054, 20104, 7069, 5717, 2]
// Exports: PlaneIllocon

// Module 20102 (PlaneIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5717 */;
import react_native from "react-native" /* 7069 */;
import _modDef14054 from "module_14054" /* 14054 */;
import _modDef20103 from "module_20103" /* 20103 */;
import _modDef20104 from "module_20104" /* 20104 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef20103 };
obj[1] = obj2;
obj[2] = { uri: _modDef14054 };
({ uri: _modDef14054 });
obj[3] = { uri: _modDef20104 };
({ uri: _modDef20104 });
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
  obj2 = num(7069);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
