// Module ID: 20034
// Function ID: 20035
// Name: PlaneIllocon
// Dependencies: [19, 21, 20035, 14004, 20036, 7063, 5712, 2]
// Exports: PlaneIllocon

// Module 20034 (PlaneIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5712 */;
import react_native from "react-native" /* 7063 */;
import _modDef14004 from "module_14004" /* 14004 */;
import _modDef20035 from "module_20035" /* 20035 */;
import _modDef20036 from "module_20036" /* 20036 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef20035 };
obj[1] = obj2;
obj[2] = { uri: _modDef14004 };
({ uri: _modDef14004 });
obj[3] = { uri: _modDef20036 };
({ uri: _modDef20036 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/PlaneIllocon.native.tsx");

export function PlaneIllocon(size) {
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
