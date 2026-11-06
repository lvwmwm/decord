// Module ID: 14489
// Function ID: 14490
// Name: ControllerIllocon
// Dependencies: [19, 21, 14490, 14491, 14492, 7160, 5872, 2]
// Exports: ControllerIllocon

// Module 14489 (ControllerIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5872 */;
import react_native from "react-native" /* 7160 */;
import _modDef14490 from "module_14490" /* 14490 */;
import _modDef14491 from "module_14491" /* 14491 */;
import _modDef14492 from "module_14492" /* 14492 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14490 };
obj[1] = obj2;
obj[2] = { uri: _modDef14491 };
({ uri: _modDef14491 });
obj[3] = { uri: _modDef14492 };
({ uri: _modDef14492 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ControllerIllocon.native.tsx");

export function ControllerIllocon(size) {
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
