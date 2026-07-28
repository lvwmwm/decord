// Module ID: 9302
// Function ID: 72722
// Name: PremiumFeaturesLogo
// Dependencies: [31, 1852, 33, 9303, 6212, 5119, 3811, 2]
// Exports: default

// Module 9302 (PremiumFeaturesLogo)
import "result";
import { PremiumTypes } from "GuildFeatures";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesLogo.tsx");

export default function PremiumFeaturesLogo(premiumType) {
  premiumType = premiumType.premiumType;
  if (premiumType === PremiumTypes.TIER_0) {
    let tmp3 = importDefault(9303);
  } else {
    tmp3 = importDefault(6212);
  }
  const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null, resizeMode: "contain" };
  const tmp6 = importDefault(5119);
  obj.accessibilityLabel = require(3811) /* _createForOfIteratorHelperLoose */.getPremiumTypeDisplayName(premiumType);
  obj.style = premiumType.style;
  obj.source = tmp3;
  return <tmp6 accessible accessibilityLabel={null} accessibilityRole="header" style={null} resizeMode="contain" />;
};
