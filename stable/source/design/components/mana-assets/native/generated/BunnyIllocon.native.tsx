// Module ID: 12917
// Function ID: 12918
// Name: BunnyIllocon
// Dependencies: [19, 21, 12918, 12919, 12920, 7168, 5874, 2]
// Exports: BunnyIllocon

// Module 12917 (BunnyIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5874 */;
import react_native from "react-native" /* 7168 */;
import _modDef12918 from "module_12918" /* 12918 */;
import _modDef12919 from "module_12919" /* 12919 */;
import _modDef12920 from "module_12920" /* 12920 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef12918 };
obj[1] = obj2;
obj[2] = { uri: _modDef12919 };
({ uri: _modDef12919 });
obj[3] = { uri: _modDef12920 };
({ uri: _modDef12920 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/BunnyIllocon.native.tsx");

export function BunnyIllocon(size) {
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
