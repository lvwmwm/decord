// Module ID: 19442
// Function ID: 19443
// Name: ShopIllocon
// Dependencies: [19, 21, 19443, 19444, 19445, 7138, 5844, 2]
// Exports: ShopIllocon

// Module 19442 (ShopIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5844 */;
import react_native from "react-native" /* 7138 */;
import _modDef19443 from "module_19443" /* 19443 */;
import _modDef19444 from "module_19444" /* 19444 */;
import _modDef19445 from "module_19445" /* 19445 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef19443 };
obj[1] = obj2;
obj[2] = { uri: _modDef19444 };
({ uri: _modDef19444 });
obj[3] = { uri: _modDef19445 };
({ uri: _modDef19445 });
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
  obj2 = num(7138);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
