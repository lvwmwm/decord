// Module ID: 9258
// Function ID: 72570
// Name: PremiumFeaturesLogo
// Dependencies: [31, 1852, 33, 9259, 6178, 5085, 3777, 2]
// Exports: default

// Module 9258 (PremiumFeaturesLogo)
import "result";
import { PremiumTypes } from "GuildFeatures";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesLogo.tsx");

export default function PremiumFeaturesLogo(premiumType) {
  premiumType = premiumType.premiumType;
  if (premiumType === PremiumTypes.TIER_0) {
    let tmp3 = importDefault(9259);
  } else {
    tmp3 = importDefault(6178);
  }
  const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null, resizeMode: "contain" };
  const tmp6 = importDefault(5085);
  obj.accessibilityLabel = require(3777) /* _createForOfIteratorHelperLoose */.getPremiumTypeDisplayName(premiumType);
  obj.style = premiumType.style;
  obj.source = tmp3;
  return <tmp6 accessible accessibilityLabel={null} accessibilityRole="header" style={null} resizeMode="contain" />;
};
