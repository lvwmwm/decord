// Module ID: 17038
// Function ID: 17039
// Name: SafetyChatSpotIllustration
// Dependencies: [19, 21, 17039, 17040, 17041, 7237, 5481, 2]
// Exports: SafetyChatSpotIllustration

// Module 17038 (SafetyChatSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7237 */;
import _modDef17039 from "module_17039" /* 17039 */;
import _modDef17040 from "module_17040" /* 17040 */;
import _modDef17041 from "module_17041" /* 17041 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef17039 };
obj[1] = obj2;
let obj3 = { uri: _modDef17040 };
obj[2] = obj3;
obj[3] = { uri: _modDef17041 };
({ uri: _modDef17041 });
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
