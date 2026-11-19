// Module ID: 18590
// Function ID: 18591
// Name: BeeIllocon
// Dependencies: [19, 21, 18591, 18592, 18593, 7238, 5479, 2]
// Exports: BeeIllocon

// Module 18590 (BeeIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5479 */;
import react_native from "react-native" /* 7238 */;
import _modDef18591 from "module_18591" /* 18591 */;
import _modDef18592 from "module_18592" /* 18592 */;
import _modDef18593 from "module_18593" /* 18593 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18591 };
obj[1] = obj2;
obj[2] = { uri: _modDef18592 };
({ uri: _modDef18592 });
obj[3] = { uri: _modDef18593 };
({ uri: _modDef18593 });
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
  obj2 = num(7238);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
