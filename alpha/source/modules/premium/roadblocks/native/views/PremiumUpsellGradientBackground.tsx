// Module ID: 10022
// Function ID: 10023
// Name: PremiumUpsellGradientBackground
// Dependencies: [19, 17, 7617, 21, 5014, 5587, 1092, 2]
// Exports: PremiumUpsellGradientBackground

// Module 10022 (PremiumUpsellGradientBackground)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ConstantsIOS from "ConstantsIOS" /* 1092 */;
import LinearGradientDefault from "LinearGradient" /* 5587 */;
import ColorConstants from "ColorConstants" /* 7617 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let obj2;
const StyleSheet = react_native.StyleSheet;
const Gradients = ColorConstants.Gradients;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { gradient: obj2 };
createStyles = createStyles.createStyles;
obj2 = { opacity: 0.1 };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_5 = createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumUpsellGradientBackground.tsx");

export function PremiumUpsellGradientBackground(useTier0UpsellContent) {
  let PREMIUM_TIER_2_TRI_COLOR;
  useTier0UpsellContent = useTier0UpsellContent.useTier0UpsellContent;
  const obj = { style: closure_5().gradient, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: PREMIUM_TIER_2_TRI_COLOR };
  const tmp2 = jsx;
  const tmp3 = LinearGradientDefault;
  if (true === useTier0UpsellContent) {
    PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_0;
  } else {
    PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_2_TRI_COLOR;
  }
  return tmp2(tmp3, obj);
}
