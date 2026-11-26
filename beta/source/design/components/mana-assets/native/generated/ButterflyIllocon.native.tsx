// Module ID: 18544
// Function ID: 18545
// Name: ButterflyIllocon
// Dependencies: [19, 21, 18545, 18546, 18547, 7357, 5600, 2]
// Exports: ButterflyIllocon

// Module 18544 (ButterflyIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5600 */;
import react_native from "react-native" /* 7357 */;
import _modDef18545 from "module_18545" /* 18545 */;
import _modDef18546 from "module_18546" /* 18546 */;
import _modDef18547 from "module_18547" /* 18547 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18545 };
obj[1] = obj2;
obj[2] = { uri: _modDef18546 };
({ uri: _modDef18546 });
obj[3] = { uri: _modDef18547 };
({ uri: _modDef18547 });
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
  obj2 = num(7357);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
