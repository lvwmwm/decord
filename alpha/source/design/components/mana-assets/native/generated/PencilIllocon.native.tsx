// Module ID: 13618
// Function ID: 13619
// Name: PencilIllocon
// Dependencies: [19, 21, 13619, 13482, 13620, 7357, 5600, 2]
// Exports: PencilIllocon

// Module 13618 (PencilIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5600 */;
import react_native from "react-native" /* 7357 */;
import _modDef13482 from "module_13482" /* 13482 */;
import _modDef13619 from "module_13619" /* 13619 */;
import _modDef13620 from "module_13620" /* 13620 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13619 };
obj[1] = obj2;
obj[2] = { uri: _modDef13482 };
({ uri: _modDef13482 });
obj[3] = { uri: _modDef13620 };
({ uri: _modDef13620 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/PencilIllocon.native.tsx");

export function PencilIllocon(size) {
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
  obj2 = num(7357);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
