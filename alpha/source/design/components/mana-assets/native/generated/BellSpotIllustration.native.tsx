// Module ID: 17554
// Function ID: 17555
// Name: BellSpotIllustration
// Dependencies: [19, 21, 17555, 17556, 17557, 7238, 5479, 2]
// Exports: BellSpotIllustration

// Module 17554 (BellSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7238 */;
import _modDef17555 from "module_17555" /* 17555 */;
import _modDef17556 from "module_17556" /* 17556 */;
import _modDef17557 from "module_17557" /* 17557 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef17555 };
obj[1] = obj2;
let obj3 = { uri: _modDef17556 };
obj[2] = obj3;
obj[3] = { uri: _modDef17557 };
({ uri: _modDef17557 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/BellSpotIllustration.native.tsx");

export function BellSpotIllustration(width) {
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
