// Module ID: 14415
// Function ID: 14416
// Name: PencilIllocon
// Dependencies: [19, 21, 14416, 14295, 14417, 7195, 5837, 2]
// Exports: PencilIllocon

// Module 14415 (PencilIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5837 */;
import react_native from "react-native" /* 7195 */;
import _modDef14295 from "module_14295" /* 14295 */;
import _modDef14416 from "module_14416" /* 14416 */;
import _modDef14417 from "module_14417" /* 14417 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14416 };
obj[1] = obj2;
obj[2] = { uri: _modDef14295 };
({ uri: _modDef14295 });
obj[3] = { uri: _modDef14417 };
({ uri: _modDef14417 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/PencilIllocon.native.tsx");

export function PencilIllocon(size) {
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
