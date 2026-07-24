// Module ID: 8175
// Function ID: 64619
// Name: PremiumFeaturesLogo
// Dependencies: [31, 1851, 33, 8176, 6676, 5085, 3776, 2]
// Exports: default

// Module 8175 (PremiumFeaturesLogo)
import "result";
import { PremiumTypes } from "GuildFeatures";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesLogo.tsx");

export default function PremiumFeaturesLogo(premiumType) {
  premiumType = premiumType.premiumType;
  if (premiumType === PremiumTypes.TIER_0) {
    let tmp3 = importDefault(8176);
  } else {
    tmp3 = importDefault(6676);
  }
  const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null, resizeMode: "contain" };
  const tmp6 = importDefault(5085);
  obj.accessibilityLabel = require(3776) /* _createForOfIteratorHelperLoose */.getPremiumTypeDisplayName(premiumType);
  obj.style = premiumType.style;
  obj.source = tmp3;
  return <tmp6 accessible accessibilityLabel={null} accessibilityRole="header" style={null} resizeMode="contain" />;
};
