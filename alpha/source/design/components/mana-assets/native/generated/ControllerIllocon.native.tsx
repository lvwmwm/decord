// Module ID: 13549
// Function ID: 13550
// Name: ControllerIllocon
// Dependencies: [19, 21, 13550, 13551, 13552, 7268, 5510, 2]
// Exports: ControllerIllocon

// Module 13549 (ControllerIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5510 */;
import react_native from "react-native" /* 7268 */;
import _modDef13550 from "module_13550" /* 13550 */;
import _modDef13551 from "module_13551" /* 13551 */;
import _modDef13552 from "module_13552" /* 13552 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13550 };
obj[1] = obj2;
obj[2] = { uri: _modDef13551 };
({ uri: _modDef13551 });
obj[3] = { uri: _modDef13552 };
({ uri: _modDef13552 });
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
  obj2 = num(7268);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
