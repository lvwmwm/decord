// Module ID: 14541
// Function ID: 14542
// Name: WorldIllocon
// Dependencies: [19, 21, 14542, 14543, 14544, 7213, 5854, 2]
// Exports: WorldIllocon

// Module 14541 (WorldIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5854 */;
import react_native from "react-native" /* 7213 */;
import _modDef14542 from "module_14542" /* 14542 */;
import _modDef14543 from "module_14543" /* 14543 */;
import _modDef14544 from "module_14544" /* 14544 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14542 };
obj[1] = obj2;
obj[2] = { uri: _modDef14543 };
({ uri: _modDef14543 });
obj[3] = { uri: _modDef14544 };
({ uri: _modDef14544 });
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
  obj2 = num(7213);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
