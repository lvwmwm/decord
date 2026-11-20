// Module ID: 18410
// Function ID: 18411
// Name: SpiderIllocon
// Dependencies: [19, 21, 18411, 18412, 18413, 7237, 5481, 2]
// Exports: SpiderIllocon

// Module 18410 (SpiderIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5481 */;
import react_native from "react-native" /* 7237 */;
import _modDef18411 from "module_18411" /* 18411 */;
import _modDef18412 from "module_18412" /* 18412 */;
import _modDef18413 from "module_18413" /* 18413 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18411 };
obj[1] = obj2;
obj[2] = { uri: _modDef18412 };
({ uri: _modDef18412 });
obj[3] = { uri: _modDef18413 };
({ uri: _modDef18413 });
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
  obj2 = num(7237);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
