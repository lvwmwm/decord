// Module ID: 15035
// Function ID: 15036
// Name: ControllerIllocon
// Dependencies: [19, 21, 15036, 15037, 15038, 7755, 6010, 2]
// Exports: ControllerIllocon

// Module 15035 (ControllerIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 6010 */;
import react_native from "react-native" /* 7755 */;
import _modDef15036 from "module_15036" /* 15036 */;
import _modDef15037 from "module_15037" /* 15037 */;
import _modDef15038 from "module_15038" /* 15038 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef15036 };
obj[1] = obj2;
obj[2] = { uri: _modDef15037 };
({ uri: _modDef15037 });
obj[3] = { uri: _modDef15038 };
({ uri: _modDef15038 });
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
