// Module ID: 17000
// Function ID: 17001
// Name: PremiumSoundboardFeatureUpsell
// Dependencies: [19, 17, 21, 4481, 709, 1627, 688, 9893, 7785, 2]
// Exports: default

// Module 17000 (PremiumSoundboardFeatureUpsell)
import noopAll from "noop" /* 19 */;
import keys from "keys" /* 688 */;
import ThemesDefault from "Themes" /* 709 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7785 */;
import PremiumFeatureUpsellPillDefault from "PremiumFeatureUpsellPill" /* 9893 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

require = arg1;
noopAll;
let closure_5 = createCacheKey.createStyles((arg0) => {
  let obj = { container: null };
  obj = { position: "absolute", bottom: arg0 + ThemesDefault.space.PX_12, left: 0, right: 0, marginHorizontal: ThemesDefault.space.PX_12 };
  obj[0] = obj;
  return obj;
});
const result = require("set").fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumSoundboardFeatureUpsell.tsx");

export default function PremiumSoundboardFeatureUpsell(shouldShow) {
  let obj = { style: callback(keys.EXPRESSION_FOOTER_HEIGHT + useSafeAreaInsetsDefault().bottom).container, children: null };
  obj = { shouldShow: shouldShow.shouldShow, featureName: EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE };
  obj[1] = jsx(PremiumFeatureUpsellPillDefault, { shouldShow: shouldShow.shouldShow, featureName: EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE });
  return <View shouldShow={arg0.shouldShow} featureName={EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE} />;
};
