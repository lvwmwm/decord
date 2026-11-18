// Module ID: 13553
// Function ID: 13554
// Name: HeartIllocon
// Dependencies: [19, 21, 13554, 13555, 13556, 7268, 5510, 2]
// Exports: HeartIllocon

// Module 13553 (HeartIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5510 */;
import react_native from "react-native" /* 7268 */;
import _modDef13554 from "module_13554" /* 13554 */;
import _modDef13555 from "module_13555" /* 13555 */;
import _modDef13556 from "module_13556" /* 13556 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13554 };
obj[1] = obj2;
obj[2] = { uri: _modDef13555 };
({ uri: _modDef13555 });
obj[3] = { uri: _modDef13556 };
({ uri: _modDef13556 });
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
  obj2 = num(7268);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
