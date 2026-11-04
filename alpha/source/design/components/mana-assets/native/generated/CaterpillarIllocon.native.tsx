// Module ID: 12910
// Function ID: 12911
// Name: CaterpillarIllocon
// Dependencies: [19, 21, 12911, 12912, 12913, 7210, 5851, 2]
// Exports: CaterpillarIllocon

// Module 12910 (CaterpillarIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5851 */;
import react_native from "react-native" /* 7210 */;
import _modDef12911 from "module_12911" /* 12911 */;
import _modDef12912 from "module_12912" /* 12912 */;
import _modDef12913 from "module_12913" /* 12913 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef12911 };
obj[1] = obj2;
obj[2] = { uri: _modDef12912 };
({ uri: _modDef12912 });
obj[3] = { uri: _modDef12913 };
({ uri: _modDef12913 });
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
  obj2 = num(7210);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
