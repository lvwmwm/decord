// Module ID: 18667
// Function ID: 18668
// Name: FrogIllocon
// Dependencies: [19, 21, 18668, 18669, 18670, 7230, 5699, 2]
// Exports: FrogIllocon

// Module 18667 (FrogIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5699 */;
import react_native from "react-native" /* 7230 */;
import _modDef18668 from "module_18668" /* 18668 */;
import _modDef18669 from "module_18669" /* 18669 */;
import _modDef18670 from "module_18670" /* 18670 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18668 };
obj[1] = obj2;
obj[2] = { uri: _modDef18669 };
({ uri: _modDef18669 });
obj[3] = { uri: _modDef18670 };
({ uri: _modDef18670 });
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
  obj2 = num(7230);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
