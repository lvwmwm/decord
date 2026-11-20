// Module ID: 17719
// Function ID: 17720
// Name: CheersSpotIllustration
// Dependencies: [19, 21, 17720, 17721, 17722, 7237, 5481, 2]
// Exports: CheersSpotIllustration

// Module 17719 (CheersSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7237 */;
import _modDef17720 from "module_17720" /* 17720 */;
import _modDef17721 from "module_17721" /* 17721 */;
import _modDef17722 from "module_17722" /* 17722 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef17720 };
obj[1] = obj2;
let obj3 = { uri: _modDef17721 };
obj[2] = obj3;
obj[3] = { uri: _modDef17722 };
({ uri: _modDef17722 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/CheersSpotIllustration.native.tsx");

export function CheersSpotIllustration(width) {
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
