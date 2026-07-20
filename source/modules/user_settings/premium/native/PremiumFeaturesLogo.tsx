// Module ID: 8119
// Function ID: 64316
// Name: PremiumFeaturesLogo
// Dependencies: []
// Exports: default

// Module 8119 (PremiumFeaturesLogo)
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
  const obj = { accessible: -0.00000000000000000000000000000000000000000340796118017615, accessibilityLabel: 394615313181163960000000000000000000, Icon: -1718336209587587600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, category: 49100918374503667000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, TypeError: 0.00000000000000000011519670538215245 };
  const tmp6 = importDefault(dependencyMap[5]);
  obj.accessibilityLabel = arg1(dependencyMap[6]).getPremiumTypeDisplayName(premiumType);
  obj.style = premiumType.style;
  obj.source = tmp3;
  return <tmp6 {...obj} />;
};
