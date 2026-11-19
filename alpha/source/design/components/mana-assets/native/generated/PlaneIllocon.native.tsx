// Module ID: 20212
// Function ID: 20213
// Name: PlaneIllocon
// Dependencies: [19, 21, 20213, 13277, 20214, 7238, 5479, 2]
// Exports: PlaneIllocon

// Module 20212 (PlaneIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5479 */;
import react_native from "react-native" /* 7238 */;
import _modDef13277 from "module_13277" /* 13277 */;
import _modDef20213 from "module_20213" /* 20213 */;
import _modDef20214 from "module_20214" /* 20214 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef20213 };
obj[1] = obj2;
obj[2] = { uri: _modDef13277 };
({ uri: _modDef13277 });
obj[3] = { uri: _modDef20214 };
({ uri: _modDef20214 });
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
  obj2 = num(7238);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
