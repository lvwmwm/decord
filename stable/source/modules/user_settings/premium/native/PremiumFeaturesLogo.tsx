// Module ID: 10082
// Function ID: 10083
// Name: PremiumFeaturesLogo
// Dependencies: [19, 1387, 21, 10083, 7731, 5874, 2171, 2]
// Exports: default

// Module 10082 (PremiumFeaturesLogo)
import Fragment from "Fragment" /* 21 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import PremiumUtils from "PremiumUtils" /* 2171 */;
import AssetRegistryDefault from "AssetRegistry" /* 7731 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10083 */;
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
  tmp(5874);
  const obj2 = PremiumUtils;
  return <tmpResult accessible accessibilityLabel={obj2.getPremiumTypeDisplayName(premiumType)} accessibilityRole="header" style={style} resizeMode="contain" source={tmp3} />;
};
