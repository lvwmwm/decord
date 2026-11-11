// Module ID: 13587
// Function ID: 13588
// Name: DogIllocon
// Dependencies: [19, 21, 13588, 13589, 13590, 7689, 5957, 2]
// Exports: DogIllocon

// Module 13587 (DogIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5957 */;
import react_native from "react-native" /* 7689 */;
import _modDef13588 from "module_13588" /* 13588 */;
import _modDef13589 from "module_13589" /* 13589 */;
import _modDef13590 from "module_13590" /* 13590 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13588 };
obj[1] = obj2;
obj[2] = { uri: _modDef13589 };
({ uri: _modDef13589 });
obj[3] = { uri: _modDef13590 };
({ uri: _modDef13590 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/DogIllocon.native.tsx");

export function DogIllocon(size) {
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
