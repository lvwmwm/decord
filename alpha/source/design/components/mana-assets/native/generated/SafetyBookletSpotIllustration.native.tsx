// Module ID: 11984
// Function ID: 11985
// Name: SafetyBookletSpotIllustration
// Dependencies: [19, 21, 11985, 11986, 11987, 7689, 5957, 2]
// Exports: SafetyBookletSpotIllustration

// Module 11984 (SafetyBookletSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7689 */;
import _modDef11985 from "module_11985" /* 11985 */;
import _modDef11986 from "module_11986" /* 11986 */;
import _modDef11987 from "module_11987" /* 11987 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef11985 };
obj[1] = obj2;
let obj3 = { uri: _modDef11986 };
obj[2] = obj3;
obj[3] = { uri: _modDef11987 };
({ uri: _modDef11987 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/SafetyBookletSpotIllustration.native.tsx");

export function SafetyBookletSpotIllustration(width) {
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
