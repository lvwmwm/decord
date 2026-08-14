// Module ID: 8690
// Function ID: 8691
// Name: PremiumFeaturesLogo
// Dependencies: [19, 1924, 21, 8691, 6969, 5329, 4007, 2]
// Exports: default

// Module 8690 (PremiumFeaturesLogo)
import "noop";
import { PremiumTypes } from "GuildFeatures";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesLogo.tsx");

export default function PremiumFeaturesLogo(premiumType) {
  premiumType = premiumType.premiumType;
  if (premiumType === PremiumTypes.TIER_0) {
    let tmp3 = importDefault(8691);
    let tmp = importDefault;
  } else {
    tmp = importDefault;
    tmp3 = importDefault(6969);
  }
  const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null, resizeMode: "contain", source: null };
  const tmpResult = tmp(5329);
  obj[1] = require(4007) /* getPremiumPlanItem */.getPremiumTypeDisplayName(premiumType);
  obj[3] = premiumType.style;
  obj[5] = tmp3;
  return <tmpResult accessible accessibilityLabel={null} accessibilityRole="header" style={null} resizeMode="contain" source={null} />;
};
