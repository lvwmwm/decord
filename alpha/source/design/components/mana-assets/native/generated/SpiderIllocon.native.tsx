// Module ID: 18586
// Function ID: 18587
// Name: SpiderIllocon
// Dependencies: [19, 21, 18587, 18588, 18589, 7238, 5479, 2]
// Exports: SpiderIllocon

// Module 18586 (SpiderIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5479 */;
import react_native from "react-native" /* 7238 */;
import _modDef18587 from "module_18587" /* 18587 */;
import _modDef18588 from "module_18588" /* 18588 */;
import _modDef18589 from "module_18589" /* 18589 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18587 };
obj[1] = obj2;
obj[2] = { uri: _modDef18588 };
({ uri: _modDef18588 });
obj[3] = { uri: _modDef18589 };
({ uri: _modDef18589 });
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
  obj2 = num(7238);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
