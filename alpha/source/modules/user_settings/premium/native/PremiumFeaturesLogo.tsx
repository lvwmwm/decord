// Module ID: 8876
// Function ID: 8877
// Name: PremiumFeaturesLogo
// Dependencies: [19, 1374, 21, 8877, 7045, 6085, 4517, 2]
// Exports: default

// Module 8876 (PremiumFeaturesLogo)
import PremiumUtils from "PremiumUtils" /* 4517 */;
import _modDef7045 from "module_7045" /* 7045 */;
import _modDef8877 from "module_8877" /* 8877 */;
import noop from "module_19" /* 19 */;

require = fn;
const PremiumTypes = fn(1374).PremiumTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesLogo.tsx");

export default function PremiumFeaturesLogo(premiumType) {
  premiumType = premiumType.premiumType;
  if (premiumType === PremiumTypes.TIER_0) {
    let tmp3 = _modDef8877;
    let tmp = importDefault;
  } else {
    tmp = importDefault;
    tmp3 = _modDef7045;
  }
  const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null, resizeMode: "contain", source: null };
  const tmpResult = tmp(6085);
  obj.accessibilityLabel = PremiumUtils.getPremiumTypeDisplayName(premiumType);
  obj.style = premiumType.style;
  obj.source = tmp3;
  return <tmpResult accessible accessibilityLabel={null} accessibilityRole="header" style={null} resizeMode="contain" source={null} />;
};
