// Module ID: 13535
// Function ID: 13536
// Name: HeartIllocon
// Dependencies: [19, 21, 13536, 13537, 13538, 7238, 5479, 2]
// Exports: HeartIllocon

// Module 13535 (HeartIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5479 */;
import react_native from "react-native" /* 7238 */;
import _modDef13536 from "module_13536" /* 13536 */;
import _modDef13537 from "module_13537" /* 13537 */;
import _modDef13538 from "module_13538" /* 13538 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13536 };
obj[1] = obj2;
obj[2] = { uri: _modDef13537 };
({ uri: _modDef13537 });
obj[3] = { uri: _modDef13538 };
({ uri: _modDef13538 });
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
  obj2 = num(7238);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
