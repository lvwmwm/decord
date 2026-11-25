// Module ID: 18516
// Function ID: 18517
// Name: SnailIllocon
// Dependencies: [19, 21, 18517, 18518, 18519, 7357, 5600, 2]
// Exports: SnailIllocon

// Module 18516 (SnailIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5600 */;
import react_native from "react-native" /* 7357 */;
import _modDef18517 from "module_18517" /* 18517 */;
import _modDef18518 from "module_18518" /* 18518 */;
import _modDef18519 from "module_18519" /* 18519 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18517 };
obj[1] = obj2;
obj[2] = { uri: _modDef18518 };
({ uri: _modDef18518 });
obj[3] = { uri: _modDef18519 };
({ uri: _modDef18519 });
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
  obj2 = num(7357);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
