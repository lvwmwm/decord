// Module ID: 20252
// Function ID: 20253
// Name: PlaneIllocon
// Dependencies: [19, 21, 20253, 14185, 20254, 7195, 5837, 2]
// Exports: PlaneIllocon

// Module 20252 (PlaneIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5837 */;
import react_native from "react-native" /* 7195 */;
import _modDef14185 from "module_14185" /* 14185 */;
import _modDef20253 from "module_20253" /* 20253 */;
import _modDef20254 from "module_20254" /* 20254 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef20253 };
obj[1] = obj2;
obj[2] = { uri: _modDef14185 };
({ uri: _modDef14185 });
obj[3] = { uri: _modDef20254 };
({ uri: _modDef20254 });
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
  obj2 = num(7195);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
