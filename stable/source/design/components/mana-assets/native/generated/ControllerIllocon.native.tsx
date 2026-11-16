// Module ID: 14551
// Function ID: 14552
// Name: ControllerIllocon
// Dependencies: [19, 21, 14552, 14553, 14554, 7168, 5874, 2]
// Exports: ControllerIllocon

// Module 14551 (ControllerIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5874 */;
import react_native from "react-native" /* 7168 */;
import _modDef14552 from "module_14552" /* 14552 */;
import _modDef14553 from "module_14553" /* 14553 */;
import _modDef14554 from "module_14554" /* 14554 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14552 };
obj[1] = obj2;
obj[2] = { uri: _modDef14553 };
({ uri: _modDef14553 });
obj[3] = { uri: _modDef14554 };
({ uri: _modDef14554 });
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
  obj2 = num(7168);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
