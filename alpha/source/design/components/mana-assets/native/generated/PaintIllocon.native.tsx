// Module ID: 14515
// Function ID: 14516
// Name: PaintIllocon
// Dependencies: [19, 21, 14516, 14517, 14518, 7210, 5851, 2]
// Exports: PaintIllocon

// Module 14515 (PaintIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5851 */;
import react_native from "react-native" /* 7210 */;
import _modDef14516 from "module_14516" /* 14516 */;
import _modDef14517 from "module_14517" /* 14517 */;
import _modDef14518 from "module_14518" /* 14518 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14516 };
obj[1] = obj2;
obj[2] = { uri: _modDef14517 };
({ uri: _modDef14517 });
obj[3] = { uri: _modDef14518 };
({ uri: _modDef14518 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/PaintIllocon.native.tsx");

export function PaintIllocon(size) {
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
