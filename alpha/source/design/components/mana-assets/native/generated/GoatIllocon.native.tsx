// Module ID: 18382
// Function ID: 18383
// Name: GoatIllocon
// Dependencies: [19, 21, 18383, 18384, 18385, 7237, 5481, 2]
// Exports: GoatIllocon

// Module 18382 (GoatIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5481 */;
import react_native from "react-native" /* 7237 */;
import _modDef18383 from "module_18383" /* 18383 */;
import _modDef18384 from "module_18384" /* 18384 */;
import _modDef18385 from "module_18385" /* 18385 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18383 };
obj[1] = obj2;
obj[2] = { uri: _modDef18384 };
({ uri: _modDef18384 });
obj[3] = { uri: _modDef18385 };
({ uri: _modDef18385 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/GoatIllocon.native.tsx");

export function GoatIllocon(size) {
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
