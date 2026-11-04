// Module ID: 12672
// Function ID: 12673
// Name: SnailIllocon
// Dependencies: [19, 21, 12673, 12674, 12675, 7069, 5717, 2]
// Exports: SnailIllocon

// Module 12672 (SnailIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5717 */;
import react_native from "react-native" /* 7069 */;
import _modDef12673 from "module_12673" /* 12673 */;
import _modDef12674 from "module_12674" /* 12674 */;
import _modDef12675 from "module_12675" /* 12675 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef12673 };
obj[1] = obj2;
obj[2] = { uri: _modDef12674 };
({ uri: _modDef12674 });
obj[3] = { uri: _modDef12675 };
({ uri: _modDef12675 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/SnailIllocon.native.tsx");

export function SnailIllocon(size) {
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
  obj2 = num(7069);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
