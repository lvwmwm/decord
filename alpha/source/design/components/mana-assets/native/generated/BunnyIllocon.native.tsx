// Module ID: 13571
// Function ID: 13572
// Name: BunnyIllocon
// Dependencies: [19, 21, 13572, 13573, 13574, 7689, 5957, 2]
// Exports: BunnyIllocon

// Module 13571 (BunnyIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5957 */;
import react_native from "react-native" /* 7689 */;
import _modDef13572 from "module_13572" /* 13572 */;
import _modDef13573 from "module_13573" /* 13573 */;
import _modDef13574 from "module_13574" /* 13574 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13572 };
obj[1] = obj2;
obj[2] = { uri: _modDef13573 };
({ uri: _modDef13573 });
obj[3] = { uri: _modDef13574 };
({ uri: _modDef13574 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/BunnyIllocon.native.tsx");

export function BunnyIllocon(size) {
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
  obj2 = num(7689);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
