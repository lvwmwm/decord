// Module ID: 13551
// Function ID: 13552
// Name: LeafIllocon
// Dependencies: [19, 21, 13552, 13553, 13554, 7238, 5479, 2]
// Exports: LeafIllocon

// Module 13551 (LeafIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5479 */;
import react_native from "react-native" /* 7238 */;
import _modDef13552 from "module_13552" /* 13552 */;
import _modDef13553 from "module_13553" /* 13553 */;
import _modDef13554 from "module_13554" /* 13554 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13552 };
obj[1] = obj2;
obj[2] = { uri: _modDef13553 };
({ uri: _modDef13553 });
obj[3] = { uri: _modDef13554 };
({ uri: _modDef13554 });
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
  obj2 = num(7238);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
