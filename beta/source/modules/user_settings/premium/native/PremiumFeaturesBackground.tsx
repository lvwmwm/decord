// Module ID: 9527
// Function ID: 9528
// Name: PremiumFeaturesBackground
// Dependencies: [19, 7617, 1385, 21, 5014, 575, 671, 5587, 1092, 2]
// Exports: default

// Module 9527 (PremiumFeaturesBackground)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import PremiumConstants from "PremiumConstants" /* 1385 */;
import LinearGradientDefault from "LinearGradient" /* 5587 */;
import ColorConstants from "ColorConstants" /* 7617 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const Gradients = ColorConstants.Gradients;
const PremiumTypes = PremiumConstants.PremiumTypes;
const jsx = Fragment.jsx;
let obj = { cardContainer: { display: "flex", borderRadius: nativeDefault.radii.lg, flexDirection: "column", justifyContent: "space-between", overflow: "hidden" } };
({ display: "flex", borderRadius: nativeDefault.radii.lg, flexDirection: "column", justifyContent: "space-between", overflow: "hidden" });
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesBackground.tsx");

export default function PremiumFeaturesBackground(opacity) {
  let PREMIUM_TIER_0;
  let children;
  let style;
  let num = opacity.opacity;
  const premiumType = opacity.premiumType;
  if (num === undefined) {
    num = 1;
  }
  ({ children, style } = opacity);
  const merged = Object.assign(opacity, Object.assign({ premiumType: 0, opacity: 0, children: 0, style: 0 }));
  const tmp2 = closure_6();
  if (premiumType === PremiumTypes.TIER_0) {
    PREMIUM_TIER_0 = Gradients.PREMIUM_TIER_0;
  } else {
    PREMIUM_TIER_0 = Gradients.PREMIUM_TIER_2_TRI_COLOR;
  }
  let mapped = PREMIUM_TIER_0;
  if (num < 1) {
    mapped = PREMIUM_TIER_0.map((item) => {
      const obj = _modDef671(item);
      const alphaResult = obj.alpha(num);
      return alphaResult.hex();
    });
  }
  const items = [tmp2.cardContainer, style];
  LinearGradientDefault;
  const merged1 = Object.assign(merged);
  return <tmp6 style={items} colors={mapped} start={num(1092).HorizontalGradient.START} end={num(1092).HorizontalGradient.END}>{children}</tmp6>;
};
