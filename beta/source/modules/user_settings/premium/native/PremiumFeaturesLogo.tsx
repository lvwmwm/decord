// Module ID: 9502
// Function ID: 9503
// Name: PremiumFeaturesLogo
// Dependencies: [19, 1388, 21, 9503, 9124, 5600, 2173, 2]
// Exports: default

// Module 9502 (PremiumFeaturesLogo)
import Fragment from "Fragment" /* 21 */;
import PremiumConstants from "PremiumConstants" /* 1388 */;
import PremiumUtils from "PremiumUtils" /* 2173 */;
import AssetRegistryDefault from "AssetRegistry" /* 9124 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9503 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const PremiumTypes = PremiumConstants.PremiumTypes;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesLogo.tsx");

export default function PremiumFeaturesLogo(premiumType) {
  let tmp;
  let tmp3;
  premiumType = premiumType.premiumType;
  const style = premiumType.style;
  if (premiumType === PremiumTypes.TIER_0) {
    tmp3 = AssetRegistryDefault2;
    tmp = importDefault;
  } else {
    tmp = importDefault;
    tmp3 = AssetRegistryDefault;
  }
  tmp(5600);
  const obj2 = PremiumUtils;
  return <tmpResult accessible accessibilityLabel={obj2.getPremiumTypeDisplayName(premiumType)} accessibilityRole="header" style={style} resizeMode="contain" source={tmp3} />;
};
