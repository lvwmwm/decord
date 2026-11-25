// Module ID: 18548
// Function ID: 18549
// Name: SpiderIllocon
// Dependencies: [19, 21, 18549, 18550, 18551, 7357, 5600, 2]
// Exports: SpiderIllocon

// Module 18548 (SpiderIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5600 */;
import react_native from "react-native" /* 7357 */;
import _modDef18549 from "module_18549" /* 18549 */;
import _modDef18550 from "module_18550" /* 18550 */;
import _modDef18551 from "module_18551" /* 18551 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18549 };
obj[1] = obj2;
obj[2] = { uri: _modDef18550 };
({ uri: _modDef18550 });
obj[3] = { uri: _modDef18551 };
({ uri: _modDef18551 });
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
  obj2 = num(7357);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
