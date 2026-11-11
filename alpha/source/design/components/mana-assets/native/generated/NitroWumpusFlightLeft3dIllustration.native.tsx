// Module ID: 15229
// Function ID: 15230
// Name: NitroWumpusFlightLeft3dIllustration
// Dependencies: [19, 21, 15230, 15231, 15232, 7689, 5957, 2]
// Exports: NitroWumpusFlightLeft3dIllustration

// Module 15229 (NitroWumpusFlightLeft3dIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7689 */;
import _modDef15230 from "module_15230" /* 15230 */;
import _modDef15231 from "module_15231" /* 15231 */;
import _modDef15232 from "module_15232" /* 15232 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef15230 };
obj[1] = obj2;
let obj3 = { uri: _modDef15231 };
obj[2] = obj3;
obj[3] = { uri: _modDef15232 };
({ uri: _modDef15232 });
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
