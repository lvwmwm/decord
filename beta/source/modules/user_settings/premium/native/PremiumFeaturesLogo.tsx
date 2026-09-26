// Module ID: 9528
// Function ID: 9529
// Name: PremiumFeaturesLogo
// Dependencies: [19, 1374, 21, 9529, 7711, 5836, 4446, 2]
// Exports: default

// Module 9528 (PremiumFeaturesLogo)
import PremiumUtils from "PremiumUtils" /* 4446 */;
import _modDef7711 from "module_7711" /* 7711 */;
import _modDef9529 from "module_9529" /* 9529 */;
import noop from "module_19" /* 19 */;

require = fn;
const PremiumTypes = fn(1374).PremiumTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesLogo.tsx");

export default function PremiumFeaturesLogo(premiumType) {
  premiumType = premiumType.premiumType;
  if (premiumType === PremiumTypes.TIER_0) {
    let tmp3 = _modDef9529;
    let tmp = importDefault;
  } else {
    tmp = importDefault;
    tmp3 = _modDef7711;
  }
  const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null, resizeMode: "contain", source: null };
  const tmpResult = tmp(5836);
  obj.accessibilityLabel = PremiumUtils.getPremiumTypeDisplayName(premiumType);
  obj.style = premiumType.style;
  obj.source = tmp3;
  return <tmpResult accessible accessibilityLabel={null} accessibilityRole="header" style={null} resizeMode="contain" source={null} />;
};
