// Module ID: 13624
// Function ID: 13625
// Name: PencilIllocon
// Dependencies: [19, 21, 13625, 13488, 13626, 7357, 5600, 2]
// Exports: PencilIllocon

// Module 13624 (PencilIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5600 */;
import react_native from "react-native" /* 7357 */;
import _modDef13488 from "module_13488" /* 13488 */;
import _modDef13625 from "module_13625" /* 13625 */;
import _modDef13626 from "module_13626" /* 13626 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13625 };
obj[1] = obj2;
obj[2] = { uri: _modDef13488 };
({ uri: _modDef13488 });
obj[3] = { uri: _modDef13626 };
({ uri: _modDef13626 });
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
  obj2 = num(7357);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
