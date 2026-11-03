// Module ID: 14443
// Function ID: 14444
// Name: ChairIllocon
// Dependencies: [19, 21, 14444, 14445, 14446, 7195, 5837, 2]
// Exports: ChairIllocon

// Module 14443 (ChairIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5837 */;
import react_native from "react-native" /* 7195 */;
import _modDef14444 from "module_14444" /* 14444 */;
import _modDef14445 from "module_14445" /* 14445 */;
import _modDef14446 from "module_14446" /* 14446 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14444 };
obj[1] = obj2;
obj[2] = { uri: _modDef14445 };
({ uri: _modDef14445 });
obj[3] = { uri: _modDef14446 };
({ uri: _modDef14446 });
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
  obj2 = num(7195);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
