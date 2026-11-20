// Module ID: 13498
// Function ID: 13499
// Name: PencilIllocon
// Dependencies: [19, 21, 13499, 13362, 13500, 7237, 5481, 2]
// Exports: PencilIllocon

// Module 13498 (PencilIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5481 */;
import react_native from "react-native" /* 7237 */;
import _modDef13362 from "module_13362" /* 13362 */;
import _modDef13499 from "module_13499" /* 13499 */;
import _modDef13500 from "module_13500" /* 13500 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13499 };
obj[1] = obj2;
obj[2] = { uri: _modDef13362 };
({ uri: _modDef13362 });
obj[3] = { uri: _modDef13500 };
({ uri: _modDef13500 });
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
  obj2 = num(7237);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
