// Module ID: 12930
// Function ID: 12931
// Name: BotIllocon
// Dependencies: [19, 21, 12931, 12932, 12933, 7210, 5851, 2]
// Exports: BotIllocon

// Module 12930 (BotIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5851 */;
import react_native from "react-native" /* 7210 */;
import _modDef12931 from "module_12931" /* 12931 */;
import _modDef12932 from "module_12932" /* 12932 */;
import _modDef12933 from "module_12933" /* 12933 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef12931 };
obj[1] = obj2;
obj[2] = { uri: _modDef12932 };
({ uri: _modDef12932 });
obj[3] = { uri: _modDef12933 };
({ uri: _modDef12933 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/BotIllocon.native.tsx");

export function BotIllocon(size) {
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
