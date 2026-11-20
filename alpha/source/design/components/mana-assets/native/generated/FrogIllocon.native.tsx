// Module ID: 18386
// Function ID: 18387
// Name: FrogIllocon
// Dependencies: [19, 21, 18387, 18388, 18389, 7237, 5481, 2]
// Exports: FrogIllocon

// Module 18386 (FrogIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5481 */;
import react_native from "react-native" /* 7237 */;
import _modDef18387 from "module_18387" /* 18387 */;
import _modDef18388 from "module_18388" /* 18388 */;
import _modDef18389 from "module_18389" /* 18389 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18387 };
obj[1] = obj2;
obj[2] = { uri: _modDef18388 };
({ uri: _modDef18388 });
obj[3] = { uri: _modDef18389 };
({ uri: _modDef18389 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/FrogIllocon.native.tsx");

export function FrogIllocon(size) {
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
