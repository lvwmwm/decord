// Module ID: 19853
// Function ID: 19854
// Name: StarKeySpotIllustration
// Dependencies: [19, 21, 19854, 19855, 19856, 7063, 5712, 2]
// Exports: StarKeySpotIllustration

// Module 19853 (StarKeySpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7063 */;
import _modDef19854 from "module_19854" /* 19854 */;
import _modDef19855 from "module_19855" /* 19855 */;
import _modDef19856 from "module_19856" /* 19856 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef19854 };
obj[1] = obj2;
let obj3 = { uri: _modDef19855 };
obj[2] = obj3;
obj[3] = { uri: _modDef19856 };
({ uri: _modDef19856 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/StarKeySpotIllustration.native.tsx");

export function StarKeySpotIllustration(width) {
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
    size = { width, height, scale: num, intrinsicWidth: 288, intrinsicHeight: 162 };
    obj = react_native;
    return obj.getAssetSizeStyle(size);
  }, items);
  obj = { fadeDuration: 0, source: obj2.getAssetSource(obj), style: memo, accessible, accessibilityLabel, resizeMode: obj3.getAssetResizeMode(resizeMode) };
  height(num[6]);
  obj2 = width(num[5]);
  obj3 = width(num[5]);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={obj3.getAssetResizeMode(resizeMode)} />;
}
