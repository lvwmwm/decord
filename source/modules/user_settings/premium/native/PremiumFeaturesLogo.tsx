// Module ID: 8550
// Function ID: 8551
// Name: PremiumFeaturesLogo
// Dependencies: [19, 1905, 21, 8551, 6822, 5251, 3930, 2]
// Exports: default

// Module 8550 (PremiumFeaturesLogo)
import "noop";
import { PremiumTypes } from "GuildFeatures";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesLogo.tsx");

export default function PremiumFeaturesLogo(premiumType) {
  premiumType = premiumType.premiumType;
  if (premiumType === PremiumTypes.TIER_0) {
    let tmp3 = importDefault(8551);
    let tmp = importDefault;
  } else {
    tmp = importDefault;
    tmp3 = importDefault(6822);
  }
  const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null, resizeMode: "contain", source: null };
  const tmpResult = tmp(5251);
  obj[1] = require(3930) /* getPremiumPlanItem */.getPremiumTypeDisplayName(premiumType);
  obj[3] = premiumType.style;
  obj[5] = tmp3;
  return <tmpResult accessible accessibilityLabel={null} accessibilityRole="header" style={null} resizeMode="contain" source={null} />;
};
