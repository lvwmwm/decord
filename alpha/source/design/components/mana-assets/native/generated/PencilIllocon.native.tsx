// Module ID: 14231
// Function ID: 14232
// Name: PencilIllocon
// Dependencies: [19, 21, 14232, 14114, 14233, 7063, 5712, 2]
// Exports: PencilIllocon

// Module 14231 (PencilIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5712 */;
import react_native from "react-native" /* 7063 */;
import _modDef14114 from "module_14114" /* 14114 */;
import _modDef14232 from "module_14232" /* 14232 */;
import _modDef14233 from "module_14233" /* 14233 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14232 };
obj[1] = obj2;
obj[2] = { uri: _modDef14114 };
({ uri: _modDef14114 });
obj[3] = { uri: _modDef14233 };
({ uri: _modDef14233 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/PencilIllocon.native.tsx");

export function PencilIllocon(size) {
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
