// Module ID: 19133
// Function ID: 19134
// Name: PremiumSoundboardFeatureUpsell
// Dependencies: [19, 17, 21, 5009, 575, 1626, 1093, 10024, 5068, 2]
// Exports: default

// Module 19133 (PremiumSoundboardFeatureUpsell)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1626 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 5068 */;
import PremiumFeatureUpsellDefault from "PremiumFeatureUpsell" /* 10024 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles((arg0) => {
  let rect;
  const obj = { container: rect };
  rect = { position: "absolute", bottom: arg0 + nativeDefault.space.PX_12, left: 0, right: 0, marginHorizontal: nativeDefault.space.PX_12 };
  return obj;
});
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumSoundboardFeatureUpsell.tsx");

export default function PremiumSoundboardFeatureUpsell(shouldShow) {
  shouldShow = shouldShow.shouldShow;
  ({ shouldShow, featureName: EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE });
  PremiumFeatureUpsellDefault;
  return <View style={closure_5(ConstantsIOS.EXPRESSION_FOOTER_HEIGHT + useSafeAreaInsetsDefault().bottom).container}>{null}</View>;
};
