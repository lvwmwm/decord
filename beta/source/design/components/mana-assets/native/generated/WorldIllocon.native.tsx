// Module ID: 14316
// Function ID: 14317
// Name: WorldIllocon
// Dependencies: [19, 21, 14317, 14318, 14319, 7069, 5717, 2]
// Exports: WorldIllocon

// Module 14316 (WorldIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5717 */;
import react_native from "react-native" /* 7069 */;
import _modDef14317 from "module_14317" /* 14317 */;
import _modDef14318 from "module_14318" /* 14318 */;
import _modDef14319 from "module_14319" /* 14319 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14317 };
obj[1] = obj2;
obj[2] = { uri: _modDef14318 };
({ uri: _modDef14318 });
obj[3] = { uri: _modDef14319 };
({ uri: _modDef14319 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/WorldIllocon.native.tsx");

export function WorldIllocon(size) {
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
  obj2 = num(7069);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
