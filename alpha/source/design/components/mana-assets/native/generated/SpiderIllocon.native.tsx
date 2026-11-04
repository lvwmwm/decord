// Module ID: 12922
// Function ID: 12923
// Name: SpiderIllocon
// Dependencies: [19, 21, 12923, 12924, 12925, 7210, 5851, 2]
// Exports: SpiderIllocon

// Module 12922 (SpiderIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5851 */;
import react_native from "react-native" /* 7210 */;
import _modDef12923 from "module_12923" /* 12923 */;
import _modDef12924 from "module_12924" /* 12924 */;
import _modDef12925 from "module_12925" /* 12925 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef12923 };
obj[1] = obj2;
obj[2] = { uri: _modDef12924 };
({ uri: _modDef12924 });
obj[3] = { uri: _modDef12925 };
({ uri: _modDef12925 });
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
  obj2 = num(7210);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
