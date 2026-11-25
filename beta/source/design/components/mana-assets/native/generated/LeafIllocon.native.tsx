// Module ID: 13644
// Function ID: 13645
// Name: LeafIllocon
// Dependencies: [19, 21, 13645, 13646, 13647, 7357, 5600, 2]
// Exports: LeafIllocon

// Module 13644 (LeafIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5600 */;
import react_native from "react-native" /* 7357 */;
import _modDef13645 from "module_13645" /* 13645 */;
import _modDef13646 from "module_13646" /* 13646 */;
import _modDef13647 from "module_13647" /* 13647 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13645 };
obj[1] = obj2;
obj[2] = { uri: _modDef13646 };
({ uri: _modDef13646 });
obj[3] = { uri: _modDef13647 };
({ uri: _modDef13647 });
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
  obj2 = num(7357);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
