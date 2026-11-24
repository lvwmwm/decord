// Module ID: 18580
// Function ID: 18581
// Name: SpiderIllocon
// Dependencies: [19, 21, 18581, 18582, 18583, 7135, 5604, 2]
// Exports: SpiderIllocon

// Module 18580 (SpiderIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5604 */;
import react_native from "react-native" /* 7135 */;
import _modDef18581 from "module_18581" /* 18581 */;
import _modDef18582 from "module_18582" /* 18582 */;
import _modDef18583 from "module_18583" /* 18583 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18581 };
obj[1] = obj2;
obj[2] = { uri: _modDef18582 };
({ uri: _modDef18582 });
obj[3] = { uri: _modDef18583 };
({ uri: _modDef18583 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/SpiderIllocon.native.tsx");

export function SpiderIllocon(size) {
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
