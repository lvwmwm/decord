// Module ID: 18099
// Function ID: 18100
// Name: MailboxSpotIllustration
// Dependencies: [19, 21, 18100, 18101, 18102, 7357, 5600, 2]
// Exports: MailboxSpotIllustration

// Module 18099 (MailboxSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7357 */;
import _modDef18100 from "module_18100" /* 18100 */;
import _modDef18101 from "module_18101" /* 18101 */;
import _modDef18102 from "module_18102" /* 18102 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef18100 };
obj[1] = obj2;
let obj3 = { uri: _modDef18101 };
obj[2] = obj3;
obj[3] = { uri: _modDef18102 };
({ uri: _modDef18102 });
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/MailboxSpotIllustration.native.tsx");

export function MailboxSpotIllustration(width) {
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
