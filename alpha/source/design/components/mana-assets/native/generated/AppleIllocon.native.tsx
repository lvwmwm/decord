// Module ID: 13629
// Function ID: 13630
// Name: AppleIllocon
// Dependencies: [19, 21, 13630, 13631, 13632, 7357, 5600, 2]
// Exports: AppleIllocon

// Module 13629 (AppleIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5600 */;
import react_native from "react-native" /* 7357 */;
import _modDef13630 from "module_13630" /* 13630 */;
import _modDef13631 from "module_13631" /* 13631 */;
import _modDef13632 from "module_13632" /* 13632 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13630 };
obj[1] = obj2;
obj[2] = { uri: _modDef13631 };
({ uri: _modDef13631 });
obj[3] = { uri: _modDef13632 };
({ uri: _modDef13632 });
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
  obj2 = num(7357);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
