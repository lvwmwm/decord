// Module ID: 14715
// Function ID: 14716
// Name: FrogIllocon
// Dependencies: [19, 21, 14716, 14717, 14718, 7765, 6014, 2]
// Exports: FrogIllocon

// Module 14715 (FrogIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 6014 */;
import react_native from "react-native" /* 7765 */;
import _modDef14716 from "module_14716" /* 14716 */;
import _modDef14717 from "module_14717" /* 14717 */;
import _modDef14718 from "module_14718" /* 14718 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14716 };
obj[1] = obj2;
obj[2] = { uri: _modDef14717 };
({ uri: _modDef14717 });
obj[3] = { uri: _modDef14718 };
({ uri: _modDef14718 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/FrogIllocon.native.tsx");

export function FrogIllocon(size) {
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
