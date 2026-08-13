// Module ID: 16238
// Function ID: 16239
// Name: PremiumSoundboardFeatureUpsell
// Dependencies: [19, 17, 21, 4342, 712, 1628, 691, 8776, 8421, 2]
// Exports: default

// Module 16238 (PremiumSoundboardFeatureUpsell)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_5 = createCacheKey.createStyles((arg0) => {
  let obj = { container: null };
  obj = { position: "absolute", bottom: arg0 + importDefault(712).space.PX_12, left: 0, right: 0, marginHorizontal: importDefault(712).space.PX_12 };
  obj[0] = obj;
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumSoundboardFeatureUpsell.tsx");

export default function PremiumSoundboardFeatureUpsell(shouldShow) {
  let obj = { style: callback(require(691) /* keys */.EXPRESSION_FOOTER_HEIGHT + importDefault(1628)().bottom).container, children: null };
  obj = { shouldShow: shouldShow.shouldShow, featureName: null };
  obj[1] = require(8421) /* EntitlementFeatureNames */.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE;
  obj[1] = jsx(importDefault(8776), { shouldShow: shouldShow.shouldShow, featureName: null });
  return <View shouldShow={arg0.shouldShow} featureName={null} />;
};
