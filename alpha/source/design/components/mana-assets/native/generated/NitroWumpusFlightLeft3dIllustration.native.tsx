// Module ID: 13984
// Function ID: 13985
// Name: NitroWumpusFlightLeft3dIllustration
// Dependencies: [19, 21, 13985, 13986, 13987, 7238, 5479, 2]
// Exports: NitroWumpusFlightLeft3dIllustration

// Module 13984 (NitroWumpusFlightLeft3dIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7238 */;
import _modDef13985 from "module_13985" /* 13985 */;
import _modDef13986 from "module_13986" /* 13986 */;
import _modDef13987 from "module_13987" /* 13987 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef13985 };
obj[1] = obj2;
let obj3 = { uri: _modDef13986 };
obj[2] = obj3;
obj[3] = { uri: _modDef13987 };
({ uri: _modDef13987 });
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
