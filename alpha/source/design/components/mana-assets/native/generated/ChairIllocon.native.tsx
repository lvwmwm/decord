// Module ID: 13648
// Function ID: 13649
// Name: ChairIllocon
// Dependencies: [19, 21, 13649, 13650, 13651, 7357, 5600, 2]
// Exports: ChairIllocon

// Module 13648 (ChairIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5600 */;
import react_native from "react-native" /* 7357 */;
import _modDef13649 from "module_13649" /* 13649 */;
import _modDef13650 from "module_13650" /* 13650 */;
import _modDef13651 from "module_13651" /* 13651 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13649 };
obj[1] = obj2;
obj[2] = { uri: _modDef13650 };
({ uri: _modDef13650 });
obj[3] = { uri: _modDef13651 };
({ uri: _modDef13651 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ChairIllocon.native.tsx");

export function ChairIllocon(size) {
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
