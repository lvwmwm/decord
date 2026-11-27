// Module ID: 18743
// Function ID: 18744
// Name: GoatIllocon
// Dependencies: [19, 21, 18744, 18745, 18746, 7261, 5730, 2]
// Exports: GoatIllocon

// Module 18743 (GoatIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5730 */;
import react_native from "react-native" /* 7261 */;
import _modDef18744 from "module_18744" /* 18744 */;
import _modDef18745 from "module_18745" /* 18745 */;
import _modDef18746 from "module_18746" /* 18746 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18744 };
obj[1] = obj2;
obj[2] = { uri: _modDef18745 };
({ uri: _modDef18745 });
obj[3] = { uri: _modDef18746 };
({ uri: _modDef18746 });
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
  obj2 = num(7261);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
