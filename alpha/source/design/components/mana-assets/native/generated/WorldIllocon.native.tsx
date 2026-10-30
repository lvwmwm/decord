// Module ID: 14263
// Function ID: 14264
// Name: WorldIllocon
// Dependencies: [19, 21, 14264, 14265, 14266, 7063, 5712, 2]
// Exports: WorldIllocon

// Module 14263 (WorldIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5712 */;
import react_native from "react-native" /* 7063 */;
import _modDef14264 from "module_14264" /* 14264 */;
import _modDef14265 from "module_14265" /* 14265 */;
import _modDef14266 from "module_14266" /* 14266 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14264 };
obj[1] = obj2;
obj[2] = { uri: _modDef14265 };
({ uri: _modDef14265 });
obj[3] = { uri: _modDef14266 };
({ uri: _modDef14266 });
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
  obj2 = num(7063);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
