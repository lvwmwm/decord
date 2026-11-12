// Module ID: 19448
// Function ID: 19449
// Name: ShopIllocon
// Dependencies: [19, 21, 19449, 19450, 19451, 7168, 5874, 2]
// Exports: ShopIllocon

// Module 19448 (ShopIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5874 */;
import react_native from "react-native" /* 7168 */;
import _modDef19449 from "module_19449" /* 19449 */;
import _modDef19450 from "module_19450" /* 19450 */;
import _modDef19451 from "module_19451" /* 19451 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef19449 };
obj[1] = obj2;
obj[2] = { uri: _modDef19450 };
({ uri: _modDef19450 });
obj[3] = { uri: _modDef19451 };
({ uri: _modDef19451 });
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
  obj2 = num(7168);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
