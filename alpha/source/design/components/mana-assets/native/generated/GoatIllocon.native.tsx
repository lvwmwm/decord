// Module ID: 13563
// Function ID: 13564
// Name: GoatIllocon
// Dependencies: [19, 21, 13564, 13565, 13566, 7689, 5957, 2]
// Exports: GoatIllocon

// Module 13563 (GoatIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5957 */;
import react_native from "react-native" /* 7689 */;
import _modDef13564 from "module_13564" /* 13564 */;
import _modDef13565 from "module_13565" /* 13565 */;
import _modDef13566 from "module_13566" /* 13566 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13564 };
obj[1] = obj2;
obj[2] = { uri: _modDef13565 };
({ uri: _modDef13565 });
obj[3] = { uri: _modDef13566 };
({ uri: _modDef13566 });
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
  obj2 = num(7689);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
