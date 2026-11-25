// Module ID: 20306
// Function ID: 20307
// Name: PlaneIllocon
// Dependencies: [19, 21, 20307, 13413, 20308, 7230, 5699, 2]
// Exports: PlaneIllocon

// Module 20306 (PlaneIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5699 */;
import react_native from "react-native" /* 7230 */;
import _modDef13413 from "module_13413" /* 13413 */;
import _modDef20307 from "module_20307" /* 20307 */;
import _modDef20308 from "module_20308" /* 20308 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef20307 };
obj[1] = obj2;
obj[2] = { uri: _modDef13413 };
({ uri: _modDef13413 });
obj[3] = { uri: _modDef20308 };
({ uri: _modDef20308 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/PlaneIllocon.native.tsx");

export function PlaneIllocon(size) {
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
  obj2 = num(7230);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
