// Module ID: 12700
// Function ID: 12701
// Name: DogIllocon
// Dependencies: [19, 21, 12701, 12702, 12703, 7069, 5717, 2]
// Exports: DogIllocon

// Module 12700 (DogIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5717 */;
import react_native from "react-native" /* 7069 */;
import _modDef12701 from "module_12701" /* 12701 */;
import _modDef12702 from "module_12702" /* 12702 */;
import _modDef12703 from "module_12703" /* 12703 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef12701 };
obj[1] = obj2;
obj[2] = { uri: _modDef12702 };
({ uri: _modDef12702 });
obj[3] = { uri: _modDef12703 };
({ uri: _modDef12703 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/DogIllocon.native.tsx");

export function DogIllocon(size) {
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
  obj2 = num(7069);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
