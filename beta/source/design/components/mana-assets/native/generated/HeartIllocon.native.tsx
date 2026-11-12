// Module ID: 14555
// Function ID: 14556
// Name: HeartIllocon
// Dependencies: [19, 21, 14556, 14557, 14558, 7168, 5874, 2]
// Exports: HeartIllocon

// Module 14555 (HeartIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5874 */;
import react_native from "react-native" /* 7168 */;
import _modDef14556 from "module_14556" /* 14556 */;
import _modDef14557 from "module_14557" /* 14557 */;
import _modDef14558 from "module_14558" /* 14558 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14556 };
obj[1] = obj2;
obj[2] = { uri: _modDef14557 };
({ uri: _modDef14557 });
obj[3] = { uri: _modDef14558 };
({ uri: _modDef14558 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/HeartIllocon.native.tsx");

export function HeartIllocon(size) {
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
  obj2 = num(7168);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
