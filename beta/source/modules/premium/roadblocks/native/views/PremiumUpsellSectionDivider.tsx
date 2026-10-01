// Module ID: 9766
// Function ID: 9767
// Name: PremiumUpsellSectionDivider
// Dependencies: [19, 17, 6852, 21, 4836, 576, 9767, 5293, 1094, 5409, 2]
// Exports: default

// Module 9766 (PremiumUpsellSectionDivider)
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import ColorConstants from "ColorConstants" /* 6852 */;
import PremiumUpsellGradientBackground from "PremiumUpsellGradientBackground" /* 9767 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let obj;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
({ StyleSheet: c3, View: closure_4 } = react_native);
const Gradients = ColorConstants.Gradients;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles((arg0) => {
  let container;
  let num2;
  let num4;
  let obj3;
  let rect;
  let num;
  if (arg0 === container.START) {
    num = 6;
  }
  container = { height: 28, flex: 1, justifyContent: "center", marginTop: num, marginBottom: num2 };
  num2 = undefined;
  if (arg0 === container.END) {
    num2 = 6;
  }
  const obj2 = { container, lockContainer: obj3, lockGradient: size, lock: { width: 16, height: 16, alignSelf: "center" }, divider: { height: 1 }, gradient: rect };
  obj3 = { justifyContent: "center", alignItems: "center" };
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  size = { width: 28, height: 28, justifyContent: "center", borderRadius: nativeDefault.radii.round };
  let num3;
  if (arg0 === container.START) {
    num3 = 0;
  }
  rect = { flex: 1, height: 14, left: 0, right: 0, position: "absolute", bottom: num3, top: num4 };
  num4 = undefined;
  if (arg0 === container.END) {
    num4 = 0;
  }
  return obj2;
});
const PremiumUpsellSectionDividerPosition = { START: 0, [0]: "START", END: 1, [1]: "END" };
let size = size_mod;
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumUpsellSectionDivider.tsx");

export default function PremiumUpsellSectionDivider(arg0) {
  let LockIcon;
  let PREMIUM_TIER_2_TRI_COLOR;
  let items;
  let obj5;
  let obj6;
  let position;
  let tmp7Result;
  let tmp9;
  let useTier0UpsellContent;
  ({ useTier0UpsellContent, position } = arg0);
  const tmp = closure_8(position);
  obj = { style: tmp.container, children: items };
  items = [, , ];
  const obj2 = { style: tmp.gradient, children: metroRequire(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, { useTier0UpsellContent }) };
  items[0] = metroRequire(React3, obj2);
  const obj3 = { style: tmp.divider, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: PREMIUM_TIER_2_TRI_COLOR };
  const tmp2 = metroImportDefault;
  const tmp8 = LinearGradientDefault;
  if (true === useTier0UpsellContent) {
    PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_0;
    tmp9 = Gradients;
  } else {
    tmp9 = Gradients;
    PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_2_TRI_COLOR;
  }
  items[1] = metroRequire(tmp8, obj3);
  let tmp4Result = position === obj.START;
  if (tmp4Result) {
    const obj4 = { style: tmp.lockContainer, children: metroRequire(tmp7Result, obj5) };
    obj5 = { style: tmp.lockGradient, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: useTier0UpsellContent ? tmp9.PREMIUM_TIER_0 : tmp9.PREMIUM_TIER_2_TRI_COLOR, children: metroRequire(LockIcon, obj6) };
    tmp7Result = LinearGradientDefault;
    obj6 = { color: nativeDefault.colors.WHITE, style: tmp.lock };
    LockIcon = tmp5(5409).LockIcon;
    tmp4Result = tmp4(tmp3, obj4);
  }
  items[2] = tmp4Result;
  return tmp2(React3, obj);
};
export const PREMIUM_UPSELL_SECTION_DIVIDER_HEIGHT = 28;
export const PREMIUM_UPSELL_SECTION_DIVIDER_MARGIN = 6;
export { PremiumUpsellSectionDividerPosition };
