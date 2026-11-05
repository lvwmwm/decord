// Module ID: 18015
// Function ID: 18016
// Name: SafetyChatSpotIllustration
// Dependencies: [19, 21, 18016, 18017, 18018, 7213, 5854, 2]
// Exports: SafetyChatSpotIllustration

// Module 18015 (SafetyChatSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7213 */;
import _modDef18016 from "module_18016" /* 18016 */;
import _modDef18017 from "module_18017" /* 18017 */;
import _modDef18018 from "module_18018" /* 18018 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18016 };
obj[1] = obj2;
let obj3 = { uri: _modDef18017 };
obj[2] = obj3;
obj[3] = { uri: _modDef18018 };
({ uri: _modDef18018 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/SafetyChatSpotIllustration.native.tsx");

export function SafetyChatSpotIllustration(width) {
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
