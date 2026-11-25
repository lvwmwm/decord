// Module ID: 13660
// Function ID: 13661
// Name: HelloWumpusSpotIllustration
// Dependencies: [19, 21, 13661, 13662, 13663, 7357, 5600, 2]
// Exports: HelloWumpusSpotIllustration

// Module 13660 (HelloWumpusSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7357 */;
import _modDef13661 from "module_13661" /* 13661 */;
import _modDef13662 from "module_13662" /* 13662 */;
import _modDef13663 from "module_13663" /* 13663 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13661 };
obj[1] = obj2;
let obj3 = { uri: _modDef13662 };
obj[2] = obj3;
obj[3] = { uri: _modDef13663 };
({ uri: _modDef13663 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/HelloWumpusSpotIllustration.native.tsx");

export function HelloWumpusSpotIllustration(width) {
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
