// Module ID: 18759
// Function ID: 18760
// Name: CaterpillarIllocon
// Dependencies: [19, 21, 18760, 18761, 18762, 7261, 5730, 2]
// Exports: CaterpillarIllocon

// Module 18759 (CaterpillarIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5730 */;
import react_native from "react-native" /* 7261 */;
import _modDef18760 from "module_18760" /* 18760 */;
import _modDef18761 from "module_18761" /* 18761 */;
import _modDef18762 from "module_18762" /* 18762 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18760 };
obj[1] = obj2;
obj[2] = { uri: _modDef18761 };
({ uri: _modDef18761 });
obj[3] = { uri: _modDef18762 };
({ uri: _modDef18762 });
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
  obj2 = num(7261);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
