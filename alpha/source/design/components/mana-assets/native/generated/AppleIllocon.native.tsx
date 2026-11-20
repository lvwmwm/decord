// Module ID: 13509
// Function ID: 13510
// Name: AppleIllocon
// Dependencies: [19, 21, 13510, 13511, 13512, 7237, 5481, 2]
// Exports: AppleIllocon

// Module 13509 (AppleIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5481 */;
import react_native from "react-native" /* 7237 */;
import _modDef13510 from "module_13510" /* 13510 */;
import _modDef13511 from "module_13511" /* 13511 */;
import _modDef13512 from "module_13512" /* 13512 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13510 };
obj[1] = obj2;
obj[2] = { uri: _modDef13511 };
({ uri: _modDef13511 });
obj[3] = { uri: _modDef13512 };
({ uri: _modDef13512 });
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
  obj2 = num(7237);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
