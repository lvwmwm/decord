// Module ID: 9906
// Function ID: 9907
// Name: PremiumFeaturesLogo
// Dependencies: [19, 1386, 21, 9907, 7615, 5712, 2048, 2]
// Exports: default

// Module 9906 (PremiumFeaturesLogo)
import Fragment from "Fragment" /* 21 */;
import PremiumConstants from "PremiumConstants" /* 1386 */;
import PremiumUtils from "PremiumUtils" /* 2048 */;
import AssetRegistryDefault from "AssetRegistry" /* 7615 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9907 */;
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
  tmp(5712);
  const obj2 = PremiumUtils;
  return <tmpResult accessible accessibilityLabel={obj2.getPremiumTypeDisplayName(premiumType)} accessibilityRole="header" style={style} resizeMode="contain" source={tmp3} />;
};
