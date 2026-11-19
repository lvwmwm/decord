// Module ID: 18578
// Function ID: 18579
// Name: ButterflyIllocon
// Dependencies: [19, 21, 18579, 18580, 18581, 7238, 5479, 2]
// Exports: ButterflyIllocon

// Module 18578 (ButterflyIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5479 */;
import react_native from "react-native" /* 7238 */;
import _modDef18579 from "module_18579" /* 18579 */;
import _modDef18580 from "module_18580" /* 18580 */;
import _modDef18581 from "module_18581" /* 18581 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18579 };
obj[1] = obj2;
obj[2] = { uri: _modDef18580 };
({ uri: _modDef18580 });
obj[3] = { uri: _modDef18581 };
({ uri: _modDef18581 });
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
  obj2 = num(7238);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
