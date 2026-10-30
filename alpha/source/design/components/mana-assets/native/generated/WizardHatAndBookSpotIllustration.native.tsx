// Module ID: 16763
// Function ID: 16764
// Name: WizardHatAndBookSpotIllustration
// Dependencies: [19, 21, 16764, 16765, 16766, 7063, 5712, 2]
// Exports: WizardHatAndBookSpotIllustration

// Module 16763 (WizardHatAndBookSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7063 */;
import _modDef16764 from "module_16764" /* 16764 */;
import _modDef16765 from "module_16765" /* 16765 */;
import _modDef16766 from "module_16766" /* 16766 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef16764 };
obj[1] = obj2;
let obj3 = { uri: _modDef16765 };
obj[2] = obj3;
obj[3] = { uri: _modDef16766 };
({ uri: _modDef16766 });
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
