// Module ID: 14274
// Function ID: 14275
// Name: WorldIllocon
// Dependencies: [19, 21, 14275, 14276, 14277, 7765, 6014, 2]
// Exports: WorldIllocon

// Module 14274 (WorldIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 6014 */;
import react_native from "react-native" /* 7765 */;
import _modDef14275 from "module_14275" /* 14275 */;
import _modDef14276 from "module_14276" /* 14276 */;
import _modDef14277 from "module_14277" /* 14277 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14275 };
obj[1] = obj2;
obj[2] = { uri: _modDef14276 };
({ uri: _modDef14276 });
obj[3] = { uri: _modDef14277 };
({ uri: _modDef14277 });
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
  obj2 = num(7765);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
