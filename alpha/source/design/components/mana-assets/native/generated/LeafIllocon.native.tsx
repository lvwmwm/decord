// Module ID: 14254
// Function ID: 14255
// Name: LeafIllocon
// Dependencies: [19, 21, 14255, 14256, 14257, 7063, 5712, 2]
// Exports: LeafIllocon

// Module 14254 (LeafIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5712 */;
import react_native from "react-native" /* 7063 */;
import _modDef14255 from "module_14255" /* 14255 */;
import _modDef14256 from "module_14256" /* 14256 */;
import _modDef14257 from "module_14257" /* 14257 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14255 };
obj[1] = obj2;
obj[2] = { uri: _modDef14256 };
({ uri: _modDef14256 });
obj[3] = { uri: _modDef14257 };
({ uri: _modDef14257 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/LeafIllocon.native.tsx");

export function LeafIllocon(size) {
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
