// Module ID: 18552
// Function ID: 18553
// Name: SpiderIllocon
// Dependencies: [19, 21, 18553, 18554, 18555, 7357, 5600, 2]
// Exports: SpiderIllocon

// Module 18552 (SpiderIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5600 */;
import react_native from "react-native" /* 7357 */;
import _modDef18553 from "module_18553" /* 18553 */;
import _modDef18554 from "module_18554" /* 18554 */;
import _modDef18555 from "module_18555" /* 18555 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18553 };
obj[1] = obj2;
obj[2] = { uri: _modDef18554 };
({ uri: _modDef18554 });
obj[3] = { uri: _modDef18555 };
({ uri: _modDef18555 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/SpiderIllocon.native.tsx");

export function SpiderIllocon(size) {
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
