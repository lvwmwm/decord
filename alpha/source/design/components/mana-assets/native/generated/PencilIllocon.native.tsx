// Module ID: 14496
// Function ID: 14497
// Name: PencilIllocon
// Dependencies: [19, 21, 14497, 14382, 14498, 7210, 5851, 2]
// Exports: PencilIllocon

// Module 14496 (PencilIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5851 */;
import react_native from "react-native" /* 7210 */;
import _modDef14382 from "module_14382" /* 14382 */;
import _modDef14497 from "module_14497" /* 14497 */;
import _modDef14498 from "module_14498" /* 14498 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14497 };
obj[1] = obj2;
obj[2] = { uri: _modDef14382 };
({ uri: _modDef14382 });
obj[3] = { uri: _modDef14498 };
({ uri: _modDef14498 });
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
  obj2 = num(7210);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
