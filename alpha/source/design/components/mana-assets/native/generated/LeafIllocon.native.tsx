// Module ID: 13521
// Function ID: 13522
// Name: LeafIllocon
// Dependencies: [19, 21, 13522, 13523, 13524, 7237, 5481, 2]
// Exports: LeafIllocon

// Module 13521 (LeafIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5481 */;
import react_native from "react-native" /* 7237 */;
import _modDef13522 from "module_13522" /* 13522 */;
import _modDef13523 from "module_13523" /* 13523 */;
import _modDef13524 from "module_13524" /* 13524 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13522 };
obj[1] = obj2;
obj[2] = { uri: _modDef13523 };
({ uri: _modDef13523 });
obj[3] = { uri: _modDef13524 };
({ uri: _modDef13524 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/LeafIllocon.native.tsx");

export function LeafIllocon(size) {
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
  obj2 = num(7237);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
