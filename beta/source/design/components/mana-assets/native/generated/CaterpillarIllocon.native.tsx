// Module ID: 18540
// Function ID: 18541
// Name: CaterpillarIllocon
// Dependencies: [19, 21, 18541, 18542, 18543, 7357, 5600, 2]
// Exports: CaterpillarIllocon

// Module 18540 (CaterpillarIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5600 */;
import react_native from "react-native" /* 7357 */;
import _modDef18541 from "module_18541" /* 18541 */;
import _modDef18542 from "module_18542" /* 18542 */;
import _modDef18543 from "module_18543" /* 18543 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18541 };
obj[1] = obj2;
obj[2] = { uri: _modDef18542 };
({ uri: _modDef18542 });
obj[3] = { uri: _modDef18543 };
({ uri: _modDef18543 });
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
