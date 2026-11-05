// Module ID: 20208
// Function ID: 20209
// Name: AnnouncementMegaphoneSpotIllustration
// Dependencies: [19, 21, 20209, 20210, 20211, 7213, 5854, 2]
// Exports: AnnouncementMegaphoneSpotIllustration

// Module 20208 (AnnouncementMegaphoneSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7213 */;
import _modDef20209 from "module_20209" /* 20209 */;
import _modDef20210 from "module_20210" /* 20210 */;
import _modDef20211 from "module_20211" /* 20211 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef20209 };
obj[1] = obj2;
let obj3 = { uri: _modDef20210 };
obj[2] = obj3;
obj[3] = { uri: _modDef20211 };
({ uri: _modDef20211 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/AnnouncementMegaphoneSpotIllustration.native.tsx");

export function AnnouncementMegaphoneSpotIllustration(width) {
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
