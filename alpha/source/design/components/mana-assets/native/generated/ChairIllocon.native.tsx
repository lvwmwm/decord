// Module ID: 14548
// Function ID: 14549
// Name: ChairIllocon
// Dependencies: [19, 21, 14549, 14550, 14551, 7135, 5842, 2]
// Exports: ChairIllocon

// Module 14548 (ChairIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5842 */;
import react_native from "react-native" /* 7135 */;
import _modDef14549 from "module_14549" /* 14549 */;
import _modDef14550 from "module_14550" /* 14550 */;
import _modDef14551 from "module_14551" /* 14551 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14549 };
obj[1] = obj2;
obj[2] = { uri: _modDef14550 };
({ uri: _modDef14550 });
obj[3] = { uri: _modDef14551 };
({ uri: _modDef14551 });
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
  obj2 = num(7135);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
