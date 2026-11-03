// Module ID: 14422
// Function ID: 14423
// Name: HeartIllocon
// Dependencies: [19, 21, 14423, 14424, 14425, 7195, 5837, 2]
// Exports: HeartIllocon

// Module 14422 (HeartIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5837 */;
import react_native from "react-native" /* 7195 */;
import _modDef14423 from "module_14423" /* 14423 */;
import _modDef14424 from "module_14424" /* 14424 */;
import _modDef14425 from "module_14425" /* 14425 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14423 };
obj[1] = obj2;
obj[2] = { uri: _modDef14424 };
({ uri: _modDef14424 });
obj[3] = { uri: _modDef14425 };
({ uri: _modDef14425 });
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
  obj2 = num(7195);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
