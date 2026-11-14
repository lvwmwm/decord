// Module ID: 13676
// Function ID: 13677
// Name: CaterpillarIllocon
// Dependencies: [19, 21, 13677, 13678, 13679, 7755, 6020, 2]
// Exports: CaterpillarIllocon

// Module 13676 (CaterpillarIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 6020 */;
import react_native from "react-native" /* 7755 */;
import _modDef13677 from "module_13677" /* 13677 */;
import _modDef13678 from "module_13678" /* 13678 */;
import _modDef13679 from "module_13679" /* 13679 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13677 };
obj[1] = obj2;
obj[2] = { uri: _modDef13678 };
({ uri: _modDef13678 });
obj[3] = { uri: _modDef13679 };
({ uri: _modDef13679 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/CaterpillarIllocon.native.tsx");

export function CaterpillarIllocon(size) {
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
  obj2 = num(7755);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
