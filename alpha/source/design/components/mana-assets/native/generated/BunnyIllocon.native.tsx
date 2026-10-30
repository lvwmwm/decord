// Module ID: 12646
// Function ID: 12647
// Name: BunnyIllocon
// Dependencies: [19, 21, 12647, 12648, 12649, 7063, 5712, 2]
// Exports: BunnyIllocon

// Module 12646 (BunnyIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5712 */;
import react_native from "react-native" /* 7063 */;
import _modDef12647 from "module_12647" /* 12647 */;
import _modDef12648 from "module_12648" /* 12648 */;
import _modDef12649 from "module_12649" /* 12649 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef12647 };
obj[1] = obj2;
obj[2] = { uri: _modDef12648 };
({ uri: _modDef12648 });
obj[3] = { uri: _modDef12649 };
({ uri: _modDef12649 });
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
  obj2 = num(7063);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
