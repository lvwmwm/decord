// Module ID: 17840
// Function ID: 17841
// Name: NitroWumpusFlightRight3dIllustration
// Dependencies: [19, 21, 17841, 17842, 17843, 7195, 5837, 2]
// Exports: NitroWumpusFlightRight3dIllustration

// Module 17840 (NitroWumpusFlightRight3dIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7195 */;
import _modDef17841 from "module_17841" /* 17841 */;
import _modDef17842 from "module_17842" /* 17842 */;
import _modDef17843 from "module_17843" /* 17843 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef17841 };
obj[1] = obj2;
let obj3 = { uri: _modDef17842 };
obj[2] = obj3;
obj[3] = { uri: _modDef17843 };
({ uri: _modDef17843 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/NitroWumpusFlightRight3dIllustration.native.tsx");

export function NitroWumpusFlightRight3dIllustration(width) {
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
