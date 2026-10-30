// Module ID: 12642
// Function ID: 12643
// Name: FrogIllocon
// Dependencies: [19, 21, 12643, 12644, 12645, 7063, 5712, 2]
// Exports: FrogIllocon

// Module 12642 (FrogIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5712 */;
import react_native from "react-native" /* 7063 */;
import _modDef12643 from "module_12643" /* 12643 */;
import _modDef12644 from "module_12644" /* 12644 */;
import _modDef12645 from "module_12645" /* 12645 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef12643 };
obj[1] = obj2;
obj[2] = { uri: _modDef12644 };
({ uri: _modDef12644 });
obj[3] = { uri: _modDef12645 };
({ uri: _modDef12645 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/FrogIllocon.native.tsx");

export function FrogIllocon(size) {
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
