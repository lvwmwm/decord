// Module ID: 9780
// Function ID: 9781
// Name: StickersSpotIllustration
// Dependencies: [19, 21, 9781, 9782, 9783, 7063, 5712, 2]
// Exports: StickersSpotIllustration

// Module 9780 (StickersSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7063 */;
import _modDef9781 from "module_9781" /* 9781 */;
import _modDef9782 from "module_9782" /* 9782 */;
import _modDef9783 from "module_9783" /* 9783 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef9781 };
obj[1] = obj2;
let obj3 = { uri: _modDef9782 };
obj[2] = obj3;
obj[3] = { uri: _modDef9783 };
({ uri: _modDef9783 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/StickersSpotIllustration.native.tsx");

export function StickersSpotIllustration(width) {
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
