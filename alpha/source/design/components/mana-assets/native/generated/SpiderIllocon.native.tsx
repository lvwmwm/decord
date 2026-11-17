// Module ID: 14739
// Function ID: 14740
// Name: SpiderIllocon
// Dependencies: [19, 21, 14740, 14741, 14742, 7765, 6014, 2]
// Exports: SpiderIllocon

// Module 14739 (SpiderIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 6014 */;
import react_native from "react-native" /* 7765 */;
import _modDef14740 from "module_14740" /* 14740 */;
import _modDef14741 from "module_14741" /* 14741 */;
import _modDef14742 from "module_14742" /* 14742 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14740 };
obj[1] = obj2;
obj[2] = { uri: _modDef14741 };
({ uri: _modDef14741 });
obj[3] = { uri: _modDef14742 };
({ uri: _modDef14742 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/SpiderIllocon.native.tsx");

export function SpiderIllocon(size) {
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
