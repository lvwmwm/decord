// Module ID: 18588
// Function ID: 18589
// Name: BotIllocon
// Dependencies: [19, 21, 18589, 18590, 18591, 7135, 5604, 2]
// Exports: BotIllocon

// Module 18588 (BotIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5604 */;
import react_native from "react-native" /* 7135 */;
import _modDef18589 from "module_18589" /* 18589 */;
import _modDef18590 from "module_18590" /* 18590 */;
import _modDef18591 from "module_18591" /* 18591 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18589 };
obj[1] = obj2;
obj[2] = { uri: _modDef18590 };
({ uri: _modDef18590 });
obj[3] = { uri: _modDef18591 };
({ uri: _modDef18591 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/BotIllocon.native.tsx");

export function BotIllocon(size) {
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
