// Module ID: 8521
// Function ID: 8522
// Name: PremiumFeaturesLogo
// Dependencies: [19, 1876, 21, 8522, 6795, 5221, 3901, 2]
// Exports: default

// Module 8521 (PremiumFeaturesLogo)
import "noop";
import { PremiumTypes } from "GuildFeatures";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesLogo.tsx");

export default function PremiumFeaturesLogo(premiumType) {
  premiumType = premiumType.premiumType;
  if (premiumType === PremiumTypes.TIER_0) {
    let tmp3 = importDefault(8522);
    let tmp = importDefault;
  } else {
    tmp = importDefault;
    tmp3 = importDefault(6795);
  }
  const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null, resizeMode: "contain", source: null };
  const tmpResult = tmp(5221);
  obj[1] = require(3901) /* getPremiumPlanItem */.getPremiumTypeDisplayName(premiumType);
  obj[3] = premiumType.style;
  obj[5] = tmp3;
  return <tmpResult accessible accessibilityLabel={null} accessibilityRole="header" style={null} resizeMode="contain" source={null} />;
};
