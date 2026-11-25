// Module ID: 18659
// Function ID: 18660
// Name: SnailIllocon
// Dependencies: [19, 21, 18660, 18661, 18662, 7230, 5699, 2]
// Exports: SnailIllocon

// Module 18659 (SnailIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5699 */;
import react_native from "react-native" /* 7230 */;
import _modDef18660 from "module_18660" /* 18660 */;
import _modDef18661 from "module_18661" /* 18661 */;
import _modDef18662 from "module_18662" /* 18662 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18660 };
obj[1] = obj2;
obj[2] = { uri: _modDef18661 };
({ uri: _modDef18661 });
obj[3] = { uri: _modDef18662 };
({ uri: _modDef18662 });
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
  obj2 = num(7230);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
