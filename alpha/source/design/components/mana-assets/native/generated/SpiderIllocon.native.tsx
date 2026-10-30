// Module ID: 12666
// Function ID: 12667
// Name: SpiderIllocon
// Dependencies: [19, 21, 12667, 12668, 12669, 7063, 5712, 2]
// Exports: SpiderIllocon

// Module 12666 (SpiderIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5712 */;
import react_native from "react-native" /* 7063 */;
import _modDef12667 from "module_12667" /* 12667 */;
import _modDef12668 from "module_12668" /* 12668 */;
import _modDef12669 from "module_12669" /* 12669 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef12667 };
obj[1] = obj2;
obj[2] = { uri: _modDef12668 };
({ uri: _modDef12668 });
obj[3] = { uri: _modDef12669 };
({ uri: _modDef12669 });
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
  obj2 = num(7063);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
