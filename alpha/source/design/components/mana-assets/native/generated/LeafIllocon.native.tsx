// Module ID: 13737
// Function ID: 13738
// Name: LeafIllocon
// Dependencies: [19, 21, 13738, 13739, 13740, 7261, 5730, 2]
// Exports: LeafIllocon

// Module 13737 (LeafIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5730 */;
import react_native from "react-native" /* 7261 */;
import _modDef13738 from "module_13738" /* 13738 */;
import _modDef13739 from "module_13739" /* 13739 */;
import _modDef13740 from "module_13740" /* 13740 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13738 };
obj[1] = obj2;
obj[2] = { uri: _modDef13739 };
({ uri: _modDef13739 });
obj[3] = { uri: _modDef13740 };
({ uri: _modDef13740 });
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
  obj2 = num(7261);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
