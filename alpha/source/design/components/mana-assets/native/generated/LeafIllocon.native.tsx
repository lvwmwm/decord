// Module ID: 14519
// Function ID: 14520
// Name: LeafIllocon
// Dependencies: [19, 21, 14520, 14521, 14522, 7210, 5851, 2]
// Exports: LeafIllocon

// Module 14519 (LeafIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5851 */;
import react_native from "react-native" /* 7210 */;
import _modDef14520 from "module_14520" /* 14520 */;
import _modDef14521 from "module_14521" /* 14521 */;
import _modDef14522 from "module_14522" /* 14522 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14520 };
obj[1] = obj2;
obj[2] = { uri: _modDef14521 };
({ uri: _modDef14521 });
obj[3] = { uri: _modDef14522 };
({ uri: _modDef14522 });
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
  obj2 = num(7210);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
