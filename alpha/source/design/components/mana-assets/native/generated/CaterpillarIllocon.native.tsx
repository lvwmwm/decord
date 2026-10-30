// Module ID: 12654
// Function ID: 12655
// Name: CaterpillarIllocon
// Dependencies: [19, 21, 12655, 12656, 12657, 7063, 5712, 2]
// Exports: CaterpillarIllocon

// Module 12654 (CaterpillarIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5712 */;
import react_native from "react-native" /* 7063 */;
import _modDef12655 from "module_12655" /* 12655 */;
import _modDef12656 from "module_12656" /* 12656 */;
import _modDef12657 from "module_12657" /* 12657 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef12655 };
obj[1] = obj2;
obj[2] = { uri: _modDef12656 };
({ uri: _modDef12656 });
obj[3] = { uri: _modDef12657 };
({ uri: _modDef12657 });
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
  obj2 = num(7063);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
