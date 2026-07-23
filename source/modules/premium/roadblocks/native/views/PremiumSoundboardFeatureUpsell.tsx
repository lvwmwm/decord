// Module ID: 15760
// Function ID: 121607
// Name: PremiumSoundboardFeatureUpsell
// Dependencies: [31, 27, 33, 4130, 689, 1557, 668, 9380, 7951, 2]
// Exports: default

// Module 15760 (PremiumSoundboardFeatureUpsell)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_5 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { position: "absolute", bottom: arg0 + importDefault(689).space.PX_12, left: 0, right: 0, marginHorizontal: importDefault(689).space.PX_12 };
  obj.container = obj;
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumSoundboardFeatureUpsell.tsx");

export default function PremiumSoundboardFeatureUpsell(shouldShow) {
  let obj = { style: callback(require(668) /* keys */.EXPRESSION_FOOTER_HEIGHT + importDefault(1557)().bottom).container };
  obj = { shouldShow: shouldShow.shouldShow, featureName: require(7951) /* EntitlementFeatureNames */.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE };
  obj.children = jsx(importDefault(9380), { shouldShow: shouldShow.shouldShow, featureName: require(7951) /* EntitlementFeatureNames */.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE });
  return <View shouldShow={arg0.shouldShow} featureName={require(7951) /* EntitlementFeatureNames */.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE} />;
};
