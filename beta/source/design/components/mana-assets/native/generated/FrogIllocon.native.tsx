// Module ID: 18528
// Function ID: 18529
// Name: FrogIllocon
// Dependencies: [19, 21, 18529, 18530, 18531, 7357, 5600, 2]
// Exports: FrogIllocon

// Module 18528 (FrogIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5600 */;
import react_native from "react-native" /* 7357 */;
import _modDef18529 from "module_18529" /* 18529 */;
import _modDef18530 from "module_18530" /* 18530 */;
import _modDef18531 from "module_18531" /* 18531 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18529 };
obj[1] = obj2;
obj[2] = { uri: _modDef18530 };
({ uri: _modDef18530 });
obj[3] = { uri: _modDef18531 };
({ uri: _modDef18531 });
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
  obj2 = num(7357);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
