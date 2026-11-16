// Module ID: 12941
// Function ID: 12942
// Name: BeeIllocon
// Dependencies: [19, 21, 12942, 12943, 12944, 7168, 5874, 2]
// Exports: BeeIllocon

// Module 12941 (BeeIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5874 */;
import react_native from "react-native" /* 7168 */;
import _modDef12942 from "module_12942" /* 12942 */;
import _modDef12943 from "module_12943" /* 12943 */;
import _modDef12944 from "module_12944" /* 12944 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef12942 };
obj[1] = obj2;
obj[2] = { uri: _modDef12943 };
({ uri: _modDef12943 });
obj[3] = { uri: _modDef12944 };
({ uri: _modDef12944 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/BeeIllocon.native.tsx");

export function BeeIllocon(size) {
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
