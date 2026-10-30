// Module ID: 14238
// Function ID: 14239
// Name: HeartIllocon
// Dependencies: [19, 21, 14239, 14240, 14241, 7063, 5712, 2]
// Exports: HeartIllocon

// Module 14238 (HeartIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5712 */;
import react_native from "react-native" /* 7063 */;
import _modDef14239 from "module_14239" /* 14239 */;
import _modDef14240 from "module_14240" /* 14240 */;
import _modDef14241 from "module_14241" /* 14241 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14239 };
obj[1] = obj2;
obj[2] = { uri: _modDef14240 };
({ uri: _modDef14240 });
obj[3] = { uri: _modDef14241 };
({ uri: _modDef14241 });
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
  obj2 = num(7063);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
