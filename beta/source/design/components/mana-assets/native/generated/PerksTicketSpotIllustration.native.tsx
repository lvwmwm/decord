// Module ID: 19888
// Function ID: 19889
// Name: PerksTicketSpotIllustration
// Dependencies: [19, 21, 19889, 19890, 19891, 7069, 5717, 2]
// Exports: PerksTicketSpotIllustration

// Module 19888 (PerksTicketSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7069 */;
import _modDef19889 from "module_19889" /* 19889 */;
import _modDef19890 from "module_19890" /* 19890 */;
import _modDef19891 from "module_19891" /* 19891 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef19889 };
obj[1] = obj2;
let obj3 = { uri: _modDef19890 };
obj[2] = obj3;
obj[3] = { uri: _modDef19891 };
({ uri: _modDef19891 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/PerksTicketSpotIllustration.native.tsx");

export function PerksTicketSpotIllustration(width) {
  let accessibilityLabel;
  let accessible;
  let obj2;
  let obj3;
  let resizeMode;
  width = width.width;
  const height = width.height;
  let num = width.scale;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 1;
  }
  const items = [width, height, num];
  const memo = react.useMemo(() => {
    size = { width, height, scale: num, intrinsicWidth: 288, intrinsicHeight: 192 };
    obj = react_native;
    return obj.getAssetSizeStyle(size);
  }, items);
  obj = { fadeDuration: 0, source: obj2.getAssetSource(obj), style: memo, accessible, accessibilityLabel, resizeMode: obj3.getAssetResizeMode(resizeMode) };
  height(num[6]);
  obj2 = width(num[5]);
  obj3 = width(num[5]);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={obj3.getAssetResizeMode(resizeMode)} />;
}
