// Module ID: 12638
// Function ID: 12639
// Name: GoatIllocon
// Dependencies: [19, 21, 12639, 12640, 12641, 7063, 5712, 2]
// Exports: GoatIllocon

// Module 12638 (GoatIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5712 */;
import react_native from "react-native" /* 7063 */;
import _modDef12639 from "module_12639" /* 12639 */;
import _modDef12640 from "module_12640" /* 12640 */;
import _modDef12641 from "module_12641" /* 12641 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef12639 };
obj[1] = obj2;
obj[2] = { uri: _modDef12640 };
({ uri: _modDef12640 });
obj[3] = { uri: _modDef12641 };
({ uri: _modDef12641 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/GoatIllocon.native.tsx");

export function GoatIllocon(size) {
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
