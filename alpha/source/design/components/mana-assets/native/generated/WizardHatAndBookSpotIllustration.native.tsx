// Module ID: 17065
// Function ID: 17066
// Name: WizardHatAndBookSpotIllustration
// Dependencies: [19, 21, 17066, 17067, 17068, 7210, 5851, 2]
// Exports: WizardHatAndBookSpotIllustration

// Module 17065 (WizardHatAndBookSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7210 */;
import _modDef17066 from "module_17066" /* 17066 */;
import _modDef17067 from "module_17067" /* 17067 */;
import _modDef17068 from "module_17068" /* 17068 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef17066 };
obj[1] = obj2;
let obj3 = { uri: _modDef17067 };
obj[2] = obj3;
obj[3] = { uri: _modDef17068 };
({ uri: _modDef17068 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/WizardHatAndBookSpotIllustration.native.tsx");

export function WizardHatAndBookSpotIllustration(width) {
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
