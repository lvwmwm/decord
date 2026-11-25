// Module ID: 18675
// Function ID: 18676
// Name: CatIllocon
// Dependencies: [19, 21, 18676, 18677, 18678, 7230, 5699, 2]
// Exports: CatIllocon

// Module 18675 (CatIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5699 */;
import react_native from "react-native" /* 7230 */;
import _modDef18676 from "module_18676" /* 18676 */;
import _modDef18677 from "module_18677" /* 18677 */;
import _modDef18678 from "module_18678" /* 18678 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18676 };
obj[1] = obj2;
obj[2] = { uri: _modDef18677 };
({ uri: _modDef18677 });
obj[3] = { uri: _modDef18678 };
({ uri: _modDef18678 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/CatIllocon.native.tsx");

export function CatIllocon(size) {
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
