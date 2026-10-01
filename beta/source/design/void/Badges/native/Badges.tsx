// Module ID: 13673
// Function ID: 13674
// Name: Badges/Badges
// Dependencies: [19, 17, 21, 4836, 576, 4832, 2]
// Exports: TextBadge

// Module 13673 (Badges/Badges)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
const obj = { base: obj2, danger: { backgroundColor: nativeDefault.colors.BADGE_NOTIFICATION_BACKGROUND }, info: { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND }, brand: { backgroundColor: nativeDefault.unsafe_rawColors.BRAND_260 }, expressive: { backgroundColor: nativeDefault.colors.CONTROL_EXPRESSIVE_BACKGROUND_DEFAULT } };
obj2 = { borderRadius: nativeDefault.radii.sm, paddingHorizontal: 4, paddingVertical: 2 };
createStyles = createStyles.createStyles;
({ backgroundColor: nativeDefault.colors.BADGE_NOTIFICATION_BACKGROUND });
({ backgroundColor: nativeDefault.colors.BACKGROUND_BRAND });
({ backgroundColor: nativeDefault.unsafe_rawColors.BRAND_260 });
({ backgroundColor: nativeDefault.colors.CONTROL_EXPRESSIVE_BACKGROUND_DEFAULT });
let closure_4 = createStyles(obj);
createStyles = createStyles_mod;
const createStyles2 = createStyles.createStyles;
const obj7 = { text: { textAlign: "center", textTransform: "uppercase" }, dangerText: { color: nativeDefault.colors.WHITE }, infoText: { color: nativeDefault.colors.WHITE }, brandText: { color: nativeDefault.unsafe_rawColors.BRAND_560 }, expressiveText: { color: nativeDefault.colors.CONTROL_EXPRESSIVE_TEXT_DEFAULT } };
({ color: nativeDefault.colors.WHITE });
({ color: nativeDefault.colors.WHITE });
({ color: nativeDefault.unsafe_rawColors.BRAND_560 });
({ color: nativeDefault.colors.CONTROL_EXPRESSIVE_TEXT_DEFAULT });
let closure_5 = createStyles2(obj7);
const obj12 = { DANGER: "danger", INFO: "info", BRAND: "brand", EXPRESSIVE: "expressive", NORMAL: "normal" };
const result = size.fileFinishedImporting("design/void/Badges/native/Badges.tsx");

export const BadgeColors = obj12;
export const TextBadge = function TextBadge(color) {
  let style;
  let text;
  let textStyle;
  let DANGER = color.color;
  if (DANGER === undefined) {
    DANGER = obj12.DANGER;
  }
  ({ style, text, textStyle } = color);
  const tmp2 = closure_4();
  const tmp3 = closure_5();
  const items = [tmp2.base, tmp2[DANGER], style];
  const items1 = [tmp3.text, tmp3["" + DANGER + "Text"], textStyle];
  return <View style={items}>{null}</View>;
};
