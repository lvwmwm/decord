// Module ID: 8124
// Function ID: 64351
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
  const obj = { is_pip_mode: "r", handlePressEmoji: "BackgroundGradientPresetId", Pawtect: "Array", makeViewDescriptorsSet: "MONOPOLY_GO", numOfEmbeds: "r" };
  const tmp6 = importDefault(dependencyMap[5]);
  obj.accessibilityLabel = arg1(dependencyMap[6]).getPremiumTypeDisplayName(premiumType);
  obj.style = premiumType.style;
  obj.source = tmp3;
  return <tmp6 {...obj} />;
};
