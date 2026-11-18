// Module ID: 18585
// Function ID: 18586
// Name: ButterflyIllocon
// Dependencies: [19, 21, 18586, 18587, 18588, 7268, 5510, 2]
// Exports: ButterflyIllocon

// Module 18585 (ButterflyIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5510 */;
import react_native from "react-native" /* 7268 */;
import _modDef18586 from "module_18586" /* 18586 */;
import _modDef18587 from "module_18587" /* 18587 */;
import _modDef18588 from "module_18588" /* 18588 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18586 };
obj[1] = obj2;
obj[2] = { uri: _modDef18587 };
({ uri: _modDef18587 });
obj[3] = { uri: _modDef18588 };
({ uri: _modDef18588 });
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
  obj2 = num(7268);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
