// Module ID: 8633
// Function ID: 8634
// Name: PremiumFeaturesLogo
// Dependencies: [19, 1924, 21, 8634, 6903, 5268, 3966, 2]
// Exports: default

// Module 8633 (PremiumFeaturesLogo)
import "noop";
import { PremiumTypes } from "GuildFeatures";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesLogo.tsx");

export default function PremiumFeaturesLogo(premiumType) {
  premiumType = premiumType.premiumType;
  if (premiumType === PremiumTypes.TIER_0) {
    let tmp3 = importDefault(8634);
    let tmp = importDefault;
  } else {
    tmp = importDefault;
    tmp3 = importDefault(6903);
  }
  const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null, resizeMode: "contain", source: null };
  const tmpResult = tmp(5268);
  obj[1] = require(3966) /* getPremiumPlanItem */.getPremiumTypeDisplayName(premiumType);
  obj[3] = premiumType.style;
  obj[5] = tmp3;
  return <tmpResult accessible accessibilityLabel={null} accessibilityRole="header" style={null} resizeMode="contain" source={null} />;
};
