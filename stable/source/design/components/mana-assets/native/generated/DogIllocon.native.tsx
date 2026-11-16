// Module ID: 12933
// Function ID: 12934
// Name: DogIllocon
// Dependencies: [19, 21, 12934, 12935, 12936, 7168, 5874, 2]
// Exports: DogIllocon

// Module 12933 (DogIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5874 */;
import react_native from "react-native" /* 7168 */;
import _modDef12934 from "module_12934" /* 12934 */;
import _modDef12935 from "module_12935" /* 12935 */;
import _modDef12936 from "module_12936" /* 12936 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef12934 };
obj[1] = obj2;
obj[2] = { uri: _modDef12935 };
({ uri: _modDef12935 });
obj[3] = { uri: _modDef12936 };
({ uri: _modDef12936 });
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
  obj2 = num(7168);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
