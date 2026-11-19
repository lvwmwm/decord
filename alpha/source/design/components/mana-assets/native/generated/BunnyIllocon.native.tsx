// Module ID: 18566
// Function ID: 18567
// Name: BunnyIllocon
// Dependencies: [19, 21, 18567, 18568, 18569, 7238, 5479, 2]
// Exports: BunnyIllocon

// Module 18566 (BunnyIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5479 */;
import react_native from "react-native" /* 7238 */;
import _modDef18567 from "module_18567" /* 18567 */;
import _modDef18568 from "module_18568" /* 18568 */;
import _modDef18569 from "module_18569" /* 18569 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18567 };
obj[1] = obj2;
obj[2] = { uri: _modDef18568 };
({ uri: _modDef18568 });
obj[3] = { uri: _modDef18569 };
({ uri: _modDef18569 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/BunnyIllocon.native.tsx");

export function BunnyIllocon(size) {
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
