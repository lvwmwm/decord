// Module ID: 12634
// Function ID: 12635
// Name: SnailIllocon
// Dependencies: [19, 21, 12635, 12636, 12637, 7063, 5712, 2]
// Exports: SnailIllocon

// Module 12634 (SnailIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5712 */;
import react_native from "react-native" /* 7063 */;
import _modDef12635 from "module_12635" /* 12635 */;
import _modDef12636 from "module_12636" /* 12636 */;
import _modDef12637 from "module_12637" /* 12637 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef12635 };
obj[1] = obj2;
obj[2] = { uri: _modDef12636 };
({ uri: _modDef12636 });
obj[3] = { uri: _modDef12637 };
({ uri: _modDef12637 });
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
  obj2 = num(7063);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
