// Module ID: 18574
// Function ID: 18575
// Name: CaterpillarIllocon
// Dependencies: [19, 21, 18575, 18576, 18577, 7238, 5479, 2]
// Exports: CaterpillarIllocon

// Module 18574 (CaterpillarIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5479 */;
import react_native from "react-native" /* 7238 */;
import _modDef18575 from "module_18575" /* 18575 */;
import _modDef18576 from "module_18576" /* 18576 */;
import _modDef18577 from "module_18577" /* 18577 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18575 };
obj[1] = obj2;
obj[2] = { uri: _modDef18576 };
({ uri: _modDef18576 });
obj[3] = { uri: _modDef18577 };
({ uri: _modDef18577 });
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
  obj2 = num(7238);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
