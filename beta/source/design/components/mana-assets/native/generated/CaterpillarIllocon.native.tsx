// Module ID: 18536
// Function ID: 18537
// Name: CaterpillarIllocon
// Dependencies: [19, 21, 18537, 18538, 18539, 7357, 5600, 2]
// Exports: CaterpillarIllocon

// Module 18536 (CaterpillarIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5600 */;
import react_native from "react-native" /* 7357 */;
import _modDef18537 from "module_18537" /* 18537 */;
import _modDef18538 from "module_18538" /* 18538 */;
import _modDef18539 from "module_18539" /* 18539 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18537 };
obj[1] = obj2;
obj[2] = { uri: _modDef18538 };
({ uri: _modDef18538 });
obj[3] = { uri: _modDef18539 };
({ uri: _modDef18539 });
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
  obj2 = num(7357);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
