// Module ID: 15374
// Function ID: 15375
// Name: NitroWumpusFlightLeft3dIllustration
// Dependencies: [19, 21, 15375, 15376, 15377, 7765, 6014, 2]
// Exports: NitroWumpusFlightLeft3dIllustration

// Module 15374 (NitroWumpusFlightLeft3dIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7765 */;
import _modDef15375 from "module_15375" /* 15375 */;
import _modDef15376 from "module_15376" /* 15376 */;
import _modDef15377 from "module_15377" /* 15377 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef15375 };
obj[1] = obj2;
let obj3 = { uri: _modDef15376 };
obj[2] = obj3;
obj[3] = { uri: _modDef15377 };
({ uri: _modDef15377 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/NitroWumpusFlightLeft3dIllustration.native.tsx");

export function NitroWumpusFlightLeft3dIllustration(width) {
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
