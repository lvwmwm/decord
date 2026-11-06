// Module ID: 12882
// Function ID: 12883
// Name: CaterpillarIllocon
// Dependencies: [19, 21, 12883, 12884, 12885, 7160, 5872, 2]
// Exports: CaterpillarIllocon

// Module 12882 (CaterpillarIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5872 */;
import react_native from "react-native" /* 7160 */;
import _modDef12883 from "module_12883" /* 12883 */;
import _modDef12884 from "module_12884" /* 12884 */;
import _modDef12885 from "module_12885" /* 12885 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef12883 };
obj[1] = obj2;
obj[2] = { uri: _modDef12884 };
({ uri: _modDef12884 });
obj[3] = { uri: _modDef12885 };
({ uri: _modDef12885 });
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
  obj2 = num(7160);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
