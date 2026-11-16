// Module ID: 19279
// Function ID: 19280
// Name: MailboxSpotIllustration
// Dependencies: [19, 21, 19280, 19281, 19282, 7755, 6010, 2]
// Exports: MailboxSpotIllustration

// Module 19279 (MailboxSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 7755 */;
import _modDef19280 from "module_19280" /* 19280 */;
import _modDef19281 from "module_19281" /* 19281 */;
import _modDef19282 from "module_19282" /* 19282 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef19280 };
obj[1] = obj2;
let obj3 = { uri: _modDef19281 };
obj[2] = obj3;
obj[3] = { uri: _modDef19282 };
({ uri: _modDef19282 });
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
