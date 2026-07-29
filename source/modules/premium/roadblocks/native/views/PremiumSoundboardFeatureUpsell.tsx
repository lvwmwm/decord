// Module ID: 15904
// Function ID: 15905
// Name: PremiumSoundboardFeatureUpsell
// Dependencies: [19, 17, 21, 4189, 712, 1581, 691, 9404, 6201, 2]
// Exports: default

// Module 15904 (PremiumSoundboardFeatureUpsell)
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
  let obj = { style: callback(require(691) /* keys */.EXPRESSION_FOOTER_HEIGHT + importDefault(1581)().bottom).container, children: null };
  obj = { shouldShow: shouldShow.shouldShow, featureName: null };
  obj[1] = require(6201) /* EntitlementFeatureNames */.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE;
  obj[1] = jsx(importDefault(9404), { shouldShow: shouldShow.shouldShow, featureName: null });
  return <View shouldShow={arg0.shouldShow} featureName={null} />;
};
