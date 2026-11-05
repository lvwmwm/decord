// Module ID: 12905
// Function ID: 12906
// Name: FrogIllocon
// Dependencies: [19, 21, 12906, 12907, 12908, 7213, 5854, 2]
// Exports: FrogIllocon

// Module 12905 (FrogIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5854 */;
import react_native from "react-native" /* 7213 */;
import _modDef12906 from "module_12906" /* 12906 */;
import _modDef12907 from "module_12907" /* 12907 */;
import _modDef12908 from "module_12908" /* 12908 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef12906 };
obj[1] = obj2;
obj[2] = { uri: _modDef12907 };
({ uri: _modDef12907 });
obj[3] = { uri: _modDef12908 };
({ uri: _modDef12908 });
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
  obj2 = num(7213);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
