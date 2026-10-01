// Module ID: 7294
// Function ID: 7295
// Name: shared_components/Badge
// Dependencies: [19, 17, 21, 4836, 576, 2]

// Module 7294 (shared_components/Badge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
const obj = { badge: obj2, badgeClassic: { backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE }, mask: { alignItems: "center", justifyContent: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles = createStyles.createStyles;
({ backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE });
let closure_2 = createStyles(obj);
const memoResult = react.memo(function Badge(size) {
  let badgeStyle;
  let style;
  let num = size.size;
  if (num === undefined) {
    num = 12;
  }
  let num2 = size.maskSize;
  if (num2 === undefined) {
    num2 = 4;
  }
  let flag = size.classic;
  if (flag === undefined) {
    flag = false;
  }
  const maskColor = size.maskColor;
  ({ style, badgeStyle } = size);
  const tmp = closure_2();
  const sum = num + 2 * num2;
  let tmp3;
  if (null != maskColor) {
    size = { backgroundColor: maskColor, height: sum, width: sum, borderRadius: sum / 2 };
    tmp3 = size;
  }
  const items = [tmp.mask, tmp3, style];
  const items1 = [flag ? tmp.badgeClassic : tmp.badge, { height: num, width: num, borderRadius: num / 2 }, badgeStyle];
  return <View style={items}>{null}</View>;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/Badge.tsx");

export default memoResult;
export const DEFAULT_BADGE_SIZE = 12;
export const CHANNEL_BADGE_SIZE = 8;
export const DEFAULT_BADGE_MASK_SIZE = 4;
