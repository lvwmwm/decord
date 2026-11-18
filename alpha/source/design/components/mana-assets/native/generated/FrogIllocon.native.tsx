// Module ID: 18569
// Function ID: 18570
// Name: FrogIllocon
// Dependencies: [19, 21, 18570, 18571, 18572, 7268, 5510, 2]
// Exports: FrogIllocon

// Module 18569 (FrogIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5510 */;
import react_native from "react-native" /* 7268 */;
import _modDef18570 from "module_18570" /* 18570 */;
import _modDef18571 from "module_18571" /* 18571 */;
import _modDef18572 from "module_18572" /* 18572 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18570 };
obj[1] = obj2;
obj[2] = { uri: _modDef18571 };
({ uri: _modDef18571 });
obj[3] = { uri: _modDef18572 };
({ uri: _modDef18572 });
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
  obj2 = num(7268);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
