// Module ID: 19823
// Function ID: 19824
// Name: ShopIllocon
// Dependencies: [19, 21, 19824, 19825, 19826, 7755, 6010, 2]
// Exports: ShopIllocon

// Module 19823 (ShopIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 6010 */;
import react_native from "react-native" /* 7755 */;
import _modDef19824 from "module_19824" /* 19824 */;
import _modDef19825 from "module_19825" /* 19825 */;
import _modDef19826 from "module_19826" /* 19826 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef19824 };
obj[1] = obj2;
obj[2] = { uri: _modDef19825 };
({ uri: _modDef19825 });
obj[3] = { uri: _modDef19826 };
({ uri: _modDef19826 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ShopIllocon.native.tsx");

export function ShopIllocon(size) {
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
