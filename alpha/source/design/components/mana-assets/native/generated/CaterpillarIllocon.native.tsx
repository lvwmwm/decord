// Module ID: 18679
// Function ID: 18680
// Name: CaterpillarIllocon
// Dependencies: [19, 21, 18680, 18681, 18682, 7230, 5699, 2]
// Exports: CaterpillarIllocon

// Module 18679 (CaterpillarIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5699 */;
import react_native from "react-native" /* 7230 */;
import _modDef18680 from "module_18680" /* 18680 */;
import _modDef18681 from "module_18681" /* 18681 */;
import _modDef18682 from "module_18682" /* 18682 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18680 };
obj[1] = obj2;
obj[2] = { uri: _modDef18681 };
({ uri: _modDef18681 });
obj[3] = { uri: _modDef18682 };
({ uri: _modDef18682 });
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
  obj2 = num(7230);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
}
