// Module ID: 18556
// Function ID: 18557
// Name: FrogIllocon
// Dependencies: [19, 21, 18557, 18558, 18559, 7135, 5604, 2]
// Exports: FrogIllocon

// Module 18556 (FrogIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5604 */;
import react_native from "react-native" /* 7135 */;
import _modDef18557 from "module_18557" /* 18557 */;
import _modDef18558 from "module_18558" /* 18558 */;
import _modDef18559 from "module_18559" /* 18559 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18557 };
obj[1] = obj2;
obj[2] = { uri: _modDef18558 };
({ uri: _modDef18558 });
obj[3] = { uri: _modDef18559 };
({ uri: _modDef18559 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/FrogIllocon.native.tsx");

export function FrogIllocon(size) {
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
  obj2 = num(7135);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
