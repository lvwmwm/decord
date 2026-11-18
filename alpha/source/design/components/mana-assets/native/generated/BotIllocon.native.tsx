// Module ID: 18601
// Function ID: 18602
// Name: BotIllocon
// Dependencies: [19, 21, 18602, 18603, 18604, 7268, 5510, 2]
// Exports: BotIllocon

// Module 18601 (BotIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5510 */;
import react_native from "react-native" /* 7268 */;
import _modDef18602 from "module_18602" /* 18602 */;
import _modDef18603 from "module_18603" /* 18603 */;
import _modDef18604 from "module_18604" /* 18604 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18602 };
obj[1] = obj2;
obj[2] = { uri: _modDef18603 };
({ uri: _modDef18603 });
obj[3] = { uri: _modDef18604 };
({ uri: _modDef18604 });
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
  obj2 = num(7268);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
