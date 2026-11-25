// Module ID: 18683
// Function ID: 18684
// Name: ButterflyIllocon
// Dependencies: [19, 21, 18684, 18685, 18686, 7230, 5699, 2]
// Exports: ButterflyIllocon

// Module 18683 (ButterflyIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5699 */;
import react_native from "react-native" /* 7230 */;
import _modDef18684 from "module_18684" /* 18684 */;
import _modDef18685 from "module_18685" /* 18685 */;
import _modDef18686 from "module_18686" /* 18686 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18684 };
obj[1] = obj2;
obj[2] = { uri: _modDef18685 };
({ uri: _modDef18685 });
obj[3] = { uri: _modDef18686 };
({ uri: _modDef18686 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ButterflyIllocon.native.tsx");

export function ButterflyIllocon(size) {
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
  obj2 = num(7230);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
