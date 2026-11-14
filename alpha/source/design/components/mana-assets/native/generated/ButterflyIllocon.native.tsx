// Module ID: 13680
// Function ID: 13681
// Name: ButterflyIllocon
// Dependencies: [19, 21, 13681, 13682, 13683, 7755, 6020, 2]
// Exports: ButterflyIllocon

// Module 13680 (ButterflyIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 6020 */;
import react_native from "react-native" /* 7755 */;
import _modDef13681 from "module_13681" /* 13681 */;
import _modDef13682 from "module_13682" /* 13682 */;
import _modDef13683 from "module_13683" /* 13683 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13681 };
obj[1] = obj2;
obj[2] = { uri: _modDef13682 };
({ uri: _modDef13682 });
obj[3] = { uri: _modDef13683 };
({ uri: _modDef13683 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ButterflyIllocon.native.tsx");

export function ButterflyIllocon(size) {
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
  obj2 = num(7755);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
