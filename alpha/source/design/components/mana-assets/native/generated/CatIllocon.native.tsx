// Module ID: 12906
// Function ID: 12907
// Name: CatIllocon
// Dependencies: [19, 21, 12907, 12908, 12909, 7210, 5851, 2]
// Exports: CatIllocon

// Module 12906 (CatIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5851 */;
import react_native from "react-native" /* 7210 */;
import _modDef12907 from "module_12907" /* 12907 */;
import _modDef12908 from "module_12908" /* 12908 */;
import _modDef12909 from "module_12909" /* 12909 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef12907 };
obj[1] = obj2;
obj[2] = { uri: _modDef12908 };
({ uri: _modDef12908 });
obj[3] = { uri: _modDef12909 };
({ uri: _modDef12909 });
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
  obj2 = num(7210);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
