// Module ID: 13627
// Function ID: 13628
// Name: ControllerIllocon
// Dependencies: [19, 21, 13628, 13629, 13630, 7357, 5600, 2]
// Exports: ControllerIllocon

// Module 13627 (ControllerIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5600 */;
import react_native from "react-native" /* 7357 */;
import _modDef13628 from "module_13628" /* 13628 */;
import _modDef13629 from "module_13629" /* 13629 */;
import _modDef13630 from "module_13630" /* 13630 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13628 };
obj[1] = obj2;
obj[2] = { uri: _modDef13629 };
({ uri: _modDef13629 });
obj[3] = { uri: _modDef13630 };
({ uri: _modDef13630 });
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
  obj2 = num(7357);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
