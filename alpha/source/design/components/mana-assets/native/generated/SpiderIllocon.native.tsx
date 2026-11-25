// Module ID: 18691
// Function ID: 18692
// Name: SpiderIllocon
// Dependencies: [19, 21, 18692, 18693, 18694, 7230, 5699, 2]
// Exports: SpiderIllocon

// Module 18691 (SpiderIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5699 */;
import react_native from "react-native" /* 7230 */;
import _modDef18692 from "module_18692" /* 18692 */;
import _modDef18693 from "module_18693" /* 18693 */;
import _modDef18694 from "module_18694" /* 18694 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18692 };
obj[1] = obj2;
obj[2] = { uri: _modDef18693 };
({ uri: _modDef18693 });
obj[3] = { uri: _modDef18694 };
({ uri: _modDef18694 });
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
  obj2 = num(7230);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
