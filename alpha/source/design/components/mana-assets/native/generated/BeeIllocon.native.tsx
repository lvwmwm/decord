// Module ID: 12670
// Function ID: 12671
// Name: BeeIllocon
// Dependencies: [19, 21, 12671, 12672, 12673, 7063, 5712, 2]
// Exports: BeeIllocon

// Module 12670 (BeeIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5712 */;
import react_native from "react-native" /* 7063 */;
import _modDef12671 from "module_12671" /* 12671 */;
import _modDef12672 from "module_12672" /* 12672 */;
import _modDef12673 from "module_12673" /* 12673 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef12671 };
obj[1] = obj2;
obj[2] = { uri: _modDef12672 };
({ uri: _modDef12672 });
obj[3] = { uri: _modDef12673 };
({ uri: _modDef12673 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/BeeIllocon.native.tsx");

export function BeeIllocon(size) {
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
