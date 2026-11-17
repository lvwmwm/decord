// Module ID: 14265
// Function ID: 14266
// Name: LeafIllocon
// Dependencies: [19, 21, 14266, 14267, 14268, 7765, 6014, 2]
// Exports: LeafIllocon

// Module 14265 (LeafIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 6014 */;
import react_native from "react-native" /* 7765 */;
import _modDef14266 from "module_14266" /* 14266 */;
import _modDef14267 from "module_14267" /* 14267 */;
import _modDef14268 from "module_14268" /* 14268 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14266 };
obj[1] = obj2;
obj[2] = { uri: _modDef14267 };
({ uri: _modDef14267 });
obj[3] = { uri: _modDef14268 };
({ uri: _modDef14268 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/LeafIllocon.native.tsx");

export function LeafIllocon(size) {
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
