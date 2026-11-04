// Module ID: 18366
// Function ID: 18367
// Name: ActivitiesTogetherSpotIllustration
// Dependencies: [19, 21, 18367, 18368, 18369, 7210, 5851, 2]
// Exports: ActivitiesTogetherSpotIllustration

// Module 18366 (ActivitiesTogetherSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7210 */;
import _modDef18367 from "module_18367" /* 18367 */;
import _modDef18368 from "module_18368" /* 18368 */;
import _modDef18369 from "module_18369" /* 18369 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18367 };
obj[1] = obj2;
let obj3 = { uri: _modDef18368 };
obj[2] = obj3;
obj[3] = { uri: _modDef18369 };
({ uri: _modDef18369 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ActivitiesTogetherSpotIllustration.native.tsx");

export function ActivitiesTogetherSpotIllustration(width) {
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
