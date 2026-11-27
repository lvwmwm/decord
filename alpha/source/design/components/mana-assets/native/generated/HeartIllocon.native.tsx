// Module ID: 13721
// Function ID: 13722
// Name: HeartIllocon
// Dependencies: [19, 21, 13722, 13723, 13724, 7261, 5730, 2]
// Exports: HeartIllocon

// Module 13721 (HeartIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5730 */;
import react_native from "react-native" /* 7261 */;
import _modDef13722 from "module_13722" /* 13722 */;
import _modDef13723 from "module_13723" /* 13723 */;
import _modDef13724 from "module_13724" /* 13724 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13722 };
obj[1] = obj2;
obj[2] = { uri: _modDef13723 };
({ uri: _modDef13723 });
obj[3] = { uri: _modDef13724 };
({ uri: _modDef13724 });
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
  obj2 = num(7261);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
