// Module ID: 13528
// Function ID: 13529
// Name: PencilIllocon
// Dependencies: [19, 21, 13529, 13392, 13530, 7238, 5479, 2]
// Exports: PencilIllocon

// Module 13528 (PencilIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5479 */;
import react_native from "react-native" /* 7238 */;
import _modDef13392 from "module_13392" /* 13392 */;
import _modDef13529 from "module_13529" /* 13529 */;
import _modDef13530 from "module_13530" /* 13530 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13529 };
obj[1] = obj2;
obj[2] = { uri: _modDef13392 };
({ uri: _modDef13392 });
obj[3] = { uri: _modDef13530 };
({ uri: _modDef13530 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/PencilIllocon.native.tsx");

export function PencilIllocon(size) {
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
