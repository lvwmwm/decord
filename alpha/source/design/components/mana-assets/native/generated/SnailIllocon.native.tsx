// Module ID: 12862
// Function ID: 12863
// Name: SnailIllocon
// Dependencies: [19, 21, 12863, 12864, 12865, 7160, 5872, 2]
// Exports: SnailIllocon

// Module 12862 (SnailIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5872 */;
import react_native from "react-native" /* 7160 */;
import _modDef12863 from "module_12863" /* 12863 */;
import _modDef12864 from "module_12864" /* 12864 */;
import _modDef12865 from "module_12865" /* 12865 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef12863 };
obj[1] = obj2;
obj[2] = { uri: _modDef12864 };
({ uri: _modDef12864 });
obj[3] = { uri: _modDef12865 };
({ uri: _modDef12865 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/SnailIllocon.native.tsx");

export function SnailIllocon(size) {
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
  obj2 = num(7160);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
