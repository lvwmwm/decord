// Module ID: 8672
// Function ID: 8673
// Name: PremiumFeaturesLogo
// Dependencies: [19, 1924, 21, 8673, 6942, 5307, 4007, 2]
// Exports: default

// Module 8672 (PremiumFeaturesLogo)
import "noop";
import { PremiumTypes } from "GuildFeatures";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesLogo.tsx");

export default function PremiumFeaturesLogo(premiumType) {
  premiumType = premiumType.premiumType;
  if (premiumType === PremiumTypes.TIER_0) {
    let tmp3 = importDefault(8673);
    let tmp = importDefault;
  } else {
    tmp = importDefault;
    tmp3 = importDefault(6942);
  }
  const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null, resizeMode: "contain", source: null };
  const tmpResult = tmp(5307);
  obj[1] = require(4007) /* getPremiumPlanItem */.getPremiumTypeDisplayName(premiumType);
  obj[3] = premiumType.style;
  obj[5] = tmp3;
  return <tmpResult accessible accessibilityLabel={null} accessibilityRole="header" style={null} resizeMode="contain" source={null} />;
};
