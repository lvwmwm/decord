// Module ID: 15053
// Function ID: 15054
// Name: LeafIllocon
// Dependencies: [19, 21, 15054, 15055, 15056, 7755, 6020, 2]
// Exports: LeafIllocon

// Module 15053 (LeafIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 6020 */;
import react_native from "react-native" /* 7755 */;
import _modDef15054 from "module_15054" /* 15054 */;
import _modDef15055 from "module_15055" /* 15055 */;
import _modDef15056 from "module_15056" /* 15056 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef15054 };
obj[1] = obj2;
obj[2] = { uri: _modDef15055 };
({ uri: _modDef15055 });
obj[3] = { uri: _modDef15056 };
({ uri: _modDef15056 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/LeafIllocon.native.tsx");

export function LeafIllocon(size) {
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
