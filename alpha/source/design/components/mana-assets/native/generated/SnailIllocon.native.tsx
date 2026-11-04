// Module ID: 12890
// Function ID: 12891
// Name: SnailIllocon
// Dependencies: [19, 21, 12891, 12892, 12893, 7210, 5851, 2]
// Exports: SnailIllocon

// Module 12890 (SnailIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5851 */;
import react_native from "react-native" /* 7210 */;
import _modDef12891 from "module_12891" /* 12891 */;
import _modDef12892 from "module_12892" /* 12892 */;
import _modDef12893 from "module_12893" /* 12893 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef12891 };
obj[1] = obj2;
obj[2] = { uri: _modDef12892 };
({ uri: _modDef12892 });
obj[3] = { uri: _modDef12893 };
({ uri: _modDef12893 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/SnailIllocon.native.tsx");

export function SnailIllocon(size) {
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
  obj2 = num(7210);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
