// Module ID: 20171
// Function ID: 20172
// Name: PlaneIllocon
// Dependencies: [19, 21, 20172, 13373, 20173, 7357, 5600, 2]
// Exports: PlaneIllocon

// Module 20171 (PlaneIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5600 */;
import react_native from "react-native" /* 7357 */;
import _modDef13373 from "module_13373" /* 13373 */;
import _modDef20172 from "module_20172" /* 20172 */;
import _modDef20173 from "module_20173" /* 20173 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef20172 };
obj[1] = obj2;
obj[2] = { uri: _modDef13373 };
({ uri: _modDef13373 });
obj[3] = { uri: _modDef20173 };
({ uri: _modDef20173 });
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
  obj2 = num(7357);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
