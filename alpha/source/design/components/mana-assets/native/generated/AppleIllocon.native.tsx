// Module ID: 14242
// Function ID: 14243
// Name: AppleIllocon
// Dependencies: [19, 21, 14243, 14244, 14245, 7063, 5712, 2]
// Exports: AppleIllocon

// Module 14242 (AppleIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5712 */;
import react_native from "react-native" /* 7063 */;
import _modDef14243 from "module_14243" /* 14243 */;
import _modDef14244 from "module_14244" /* 14244 */;
import _modDef14245 from "module_14245" /* 14245 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14243 };
obj[1] = obj2;
obj[2] = { uri: _modDef14244 };
({ uri: _modDef14244 });
obj[3] = { uri: _modDef14245 };
({ uri: _modDef14245 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/AppleIllocon.native.tsx");

export function AppleIllocon(size) {
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
