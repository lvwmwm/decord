// Module ID: 17573
// Function ID: 17574
// Name: ActivitiesTogetherSpotIllustration
// Dependencies: [19, 21, 17574, 17575, 17576, 7357, 5600, 2]
// Exports: ActivitiesTogetherSpotIllustration

// Module 17573 (ActivitiesTogetherSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7357 */;
import _modDef17574 from "module_17574" /* 17574 */;
import _modDef17575 from "module_17575" /* 17575 */;
import _modDef17576 from "module_17576" /* 17576 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef17574 };
obj[1] = obj2;
let obj3 = { uri: _modDef17575 };
obj[2] = obj3;
obj[3] = { uri: _modDef17576 };
({ uri: _modDef17576 });
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
