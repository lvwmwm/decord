// Module ID: 20424
// Function ID: 20425
// Name: PlaneIllocon
// Dependencies: [19, 21, 20425, 14262, 20426, 7160, 5872, 2]
// Exports: PlaneIllocon

// Module 20424 (PlaneIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5872 */;
import react_native from "react-native" /* 7160 */;
import _modDef14262 from "module_14262" /* 14262 */;
import _modDef20425 from "module_20425" /* 20425 */;
import _modDef20426 from "module_20426" /* 20426 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef20425 };
obj[1] = obj2;
obj[2] = { uri: _modDef14262 };
({ uri: _modDef14262 });
obj[3] = { uri: _modDef20426 };
({ uri: _modDef20426 });
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
  obj2 = num(7160);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
