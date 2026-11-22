// Module ID: 13625
// Function ID: 13626
// Name: HeartIllocon
// Dependencies: [19, 21, 13626, 13627, 13628, 7357, 5600, 2]
// Exports: HeartIllocon

// Module 13625 (HeartIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5600 */;
import react_native from "react-native" /* 7357 */;
import _modDef13626 from "module_13626" /* 13626 */;
import _modDef13627 from "module_13627" /* 13627 */;
import _modDef13628 from "module_13628" /* 13628 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13626 };
obj[1] = obj2;
obj[2] = { uri: _modDef13627 };
({ uri: _modDef13627 });
obj[3] = { uri: _modDef13628 };
({ uri: _modDef13628 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/HeartIllocon.native.tsx");

export function HeartIllocon(size) {
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
