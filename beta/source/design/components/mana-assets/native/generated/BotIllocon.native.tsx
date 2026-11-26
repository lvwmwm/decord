// Module ID: 18560
// Function ID: 18561
// Name: BotIllocon
// Dependencies: [19, 21, 18561, 18562, 18563, 7357, 5600, 2]
// Exports: BotIllocon

// Module 18560 (BotIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5600 */;
import react_native from "react-native" /* 7357 */;
import _modDef18561 from "module_18561" /* 18561 */;
import _modDef18562 from "module_18562" /* 18562 */;
import _modDef18563 from "module_18563" /* 18563 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18561 };
obj[1] = obj2;
obj[2] = { uri: _modDef18562 };
({ uri: _modDef18562 });
obj[3] = { uri: _modDef18563 };
({ uri: _modDef18563 });
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
  obj2 = num(7357);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
