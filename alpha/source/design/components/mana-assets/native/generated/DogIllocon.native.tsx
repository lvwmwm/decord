// Module ID: 14735
// Function ID: 14736
// Name: DogIllocon
// Dependencies: [19, 21, 14736, 14737, 14738, 7765, 6014, 2]
// Exports: DogIllocon

// Module 14735 (DogIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 6014 */;
import react_native from "react-native" /* 7765 */;
import _modDef14736 from "module_14736" /* 14736 */;
import _modDef14737 from "module_14737" /* 14737 */;
import _modDef14738 from "module_14738" /* 14738 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14736 };
obj[1] = obj2;
obj[2] = { uri: _modDef14737 };
({ uri: _modDef14737 });
obj[3] = { uri: _modDef14738 };
({ uri: _modDef14738 });
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
  obj2 = num(7765);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
