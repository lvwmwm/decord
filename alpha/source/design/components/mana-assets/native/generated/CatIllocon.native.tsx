// Module ID: 12913
// Function ID: 12914
// Name: CatIllocon
// Dependencies: [19, 21, 12914, 12915, 12916, 7213, 5854, 2]
// Exports: CatIllocon

// Module 12913 (CatIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5854 */;
import react_native from "react-native" /* 7213 */;
import _modDef12914 from "module_12914" /* 12914 */;
import _modDef12915 from "module_12915" /* 12915 */;
import _modDef12916 from "module_12916" /* 12916 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef12914 };
obj[1] = obj2;
obj[2] = { uri: _modDef12915 };
({ uri: _modDef12915 });
obj[3] = { uri: _modDef12916 };
({ uri: _modDef12916 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/CatIllocon.native.tsx");

export function CatIllocon(size) {
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
  obj2 = num(7213);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
