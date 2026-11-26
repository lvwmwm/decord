// Module ID: 13656
// Function ID: 13657
// Name: WorldIllocon
// Dependencies: [19, 21, 13657, 13658, 13659, 7357, 5600, 2]
// Exports: WorldIllocon

// Module 13656 (WorldIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5600 */;
import react_native from "react-native" /* 7357 */;
import _modDef13657 from "module_13657" /* 13657 */;
import _modDef13658 from "module_13658" /* 13658 */;
import _modDef13659 from "module_13659" /* 13659 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13657 };
obj[1] = obj2;
obj[2] = { uri: _modDef13658 };
({ uri: _modDef13658 });
obj[3] = { uri: _modDef13659 };
({ uri: _modDef13659 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/WorldIllocon.native.tsx");

export function WorldIllocon(size) {
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
