// Module ID: 14259
// Function ID: 14260
// Name: ChairIllocon
// Dependencies: [19, 21, 14260, 14261, 14262, 7063, 5712, 2]
// Exports: ChairIllocon

// Module 14259 (ChairIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5712 */;
import react_native from "react-native" /* 7063 */;
import _modDef14260 from "module_14260" /* 14260 */;
import _modDef14261 from "module_14261" /* 14261 */;
import _modDef14262 from "module_14262" /* 14262 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14260 };
obj[1] = obj2;
obj[2] = { uri: _modDef14261 };
({ uri: _modDef14261 });
obj[3] = { uri: _modDef14262 };
({ uri: _modDef14262 });
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
  obj2 = num(7063);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
