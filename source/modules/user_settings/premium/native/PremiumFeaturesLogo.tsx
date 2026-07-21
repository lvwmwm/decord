// Module ID: 8124
// Function ID: 64341
// Name: PremiumFeaturesLogo
// Dependencies: []
// Exports: default

// Module 8124 (PremiumFeaturesLogo)
importAll(dependencyMap[0]);
const PremiumTypes = arg1(dependencyMap[1]).PremiumTypes;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesLogo.tsx");

export default function PremiumFeaturesLogo(premiumType) {
  premiumType = premiumType.premiumType;
  if (premiumType === PremiumTypes.TIER_0) {
    let tmp3 = importDefault(dependencyMap[3]);
  } else {
    tmp3 = importDefault(dependencyMap[4]);
  }
  const obj = { 9223372036854775807: "r", 0: "BWD8fs", 0: "Array", -9223372036854775808: "commandsDisabled", 0: "Array" };
  const tmp6 = importDefault(dependencyMap[5]);
  obj.accessibilityLabel = arg1(dependencyMap[6]).getPremiumTypeDisplayName(premiumType);
  obj.style = premiumType.style;
  obj.source = tmp3;
  return <tmp6 {...obj} />;
};
