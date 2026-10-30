// Module ID: 14234
// Function ID: 14235
// Name: ControllerIllocon
// Dependencies: [19, 21, 14235, 14236, 14237, 7063, 5712, 2]
// Exports: ControllerIllocon

// Module 14234 (ControllerIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5712 */;
import react_native from "react-native" /* 7063 */;
import _modDef14235 from "module_14235" /* 14235 */;
import _modDef14236 from "module_14236" /* 14236 */;
import _modDef14237 from "module_14237" /* 14237 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14235 };
obj[1] = obj2;
obj[2] = { uri: _modDef14236 };
({ uri: _modDef14236 });
obj[3] = { uri: _modDef14237 };
({ uri: _modDef14237 });
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
  obj2 = num(7063);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
