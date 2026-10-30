// Module ID: 14246
// Function ID: 14247
// Name: BookIllocon
// Dependencies: [19, 21, 14247, 14248, 14249, 7063, 5712, 2]
// Exports: BookIllocon

// Module 14246 (BookIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5712 */;
import react_native from "react-native" /* 7063 */;
import _modDef14247 from "module_14247" /* 14247 */;
import _modDef14248 from "module_14248" /* 14248 */;
import _modDef14249 from "module_14249" /* 14249 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14247 };
obj[1] = obj2;
obj[2] = { uri: _modDef14248 };
({ uri: _modDef14248 });
obj[3] = { uri: _modDef14249 };
({ uri: _modDef14249 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/BookIllocon.native.tsx");

export function BookIllocon(size) {
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
