// Module ID: 12662
// Function ID: 12663
// Name: DogIllocon
// Dependencies: [19, 21, 12663, 12664, 12665, 7063, 5712, 2]
// Exports: DogIllocon

// Module 12662 (DogIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5712 */;
import react_native from "react-native" /* 7063 */;
import _modDef12663 from "module_12663" /* 12663 */;
import _modDef12664 from "module_12664" /* 12664 */;
import _modDef12665 from "module_12665" /* 12665 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef12663 };
obj[1] = obj2;
obj[2] = { uri: _modDef12664 };
({ uri: _modDef12664 });
obj[3] = { uri: _modDef12665 };
({ uri: _modDef12665 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/DogIllocon.native.tsx");

export function DogIllocon(size) {
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
