// Module ID: 13575
// Function ID: 13576
// Name: CatIllocon
// Dependencies: [19, 21, 13576, 13577, 13578, 7689, 5957, 2]
// Exports: CatIllocon

// Module 13575 (CatIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5957 */;
import react_native from "react-native" /* 7689 */;
import _modDef13576 from "module_13576" /* 13576 */;
import _modDef13577 from "module_13577" /* 13577 */;
import _modDef13578 from "module_13578" /* 13578 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13576 };
obj[1] = obj2;
obj[2] = { uri: _modDef13577 };
({ uri: _modDef13577 });
obj[3] = { uri: _modDef13578 };
({ uri: _modDef13578 });
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
  obj2 = num(7689);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
