// Module ID: 15033
// Function ID: 15034
// Name: ControllerIllocon
// Dependencies: [19, 21, 15034, 15035, 15036, 7755, 6020, 2]
// Exports: ControllerIllocon

// Module 15033 (ControllerIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 6020 */;
import react_native from "react-native" /* 7755 */;
import _modDef15034 from "module_15034" /* 15034 */;
import _modDef15035 from "module_15035" /* 15035 */;
import _modDef15036 from "module_15036" /* 15036 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef15034 };
obj[1] = obj2;
obj[2] = { uri: _modDef15035 };
({ uri: _modDef15035 });
obj[3] = { uri: _modDef15036 };
({ uri: _modDef15036 });
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
  obj2 = num(7755);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
