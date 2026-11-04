// Module ID: 14503
// Function ID: 14504
// Name: HeartIllocon
// Dependencies: [19, 21, 14504, 14505, 14506, 7210, 5851, 2]
// Exports: HeartIllocon

// Module 14503 (HeartIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5851 */;
import react_native from "react-native" /* 7210 */;
import _modDef14504 from "module_14504" /* 14504 */;
import _modDef14505 from "module_14505" /* 14505 */;
import _modDef14506 from "module_14506" /* 14506 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14504 };
obj[1] = obj2;
obj[2] = { uri: _modDef14505 };
({ uri: _modDef14505 });
obj[3] = { uri: _modDef14506 };
({ uri: _modDef14506 });
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
  obj2 = num(7210);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
