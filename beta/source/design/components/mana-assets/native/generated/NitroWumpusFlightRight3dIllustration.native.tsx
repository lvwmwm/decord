// Module ID: 18055
// Function ID: 18056
// Name: NitroWumpusFlightRight3dIllustration
// Dependencies: [19, 21, 18056, 18057, 18058, 7168, 5874, 2]
// Exports: NitroWumpusFlightRight3dIllustration

// Module 18055 (NitroWumpusFlightRight3dIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7168 */;
import _modDef18056 from "module_18056" /* 18056 */;
import _modDef18057 from "module_18057" /* 18057 */;
import _modDef18058 from "module_18058" /* 18058 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18056 };
obj[1] = obj2;
let obj3 = { uri: _modDef18057 };
obj[2] = obj3;
obj[3] = { uri: _modDef18058 };
({ uri: _modDef18058 });
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
