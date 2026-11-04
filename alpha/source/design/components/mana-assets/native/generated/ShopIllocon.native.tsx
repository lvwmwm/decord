// Module ID: 19318
// Function ID: 19319
// Name: ShopIllocon
// Dependencies: [19, 21, 19319, 19320, 19321, 7210, 5851, 2]
// Exports: ShopIllocon

// Module 19318 (ShopIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5851 */;
import react_native from "react-native" /* 7210 */;
import _modDef19319 from "module_19319" /* 19319 */;
import _modDef19320 from "module_19320" /* 19320 */;
import _modDef19321 from "module_19321" /* 19321 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef19319 };
obj[1] = obj2;
obj[2] = { uri: _modDef19320 };
({ uri: _modDef19320 });
obj[3] = { uri: _modDef19321 };
({ uri: _modDef19321 });
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
  obj2 = num(7210);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
