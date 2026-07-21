// Module ID: 9457
// Function ID: 73683
// Name: getQuestOrbMultiplierEligibilityForUser
// Dependencies: []
// Exports: useQuestOrbMultiplierEligibility

// Module 9457 (getQuestOrbMultiplierEligibilityForUser)
function getQuestOrbMultiplierEligibilityForUser(isFractionalPremiumWithNoStandardSub) {
  if (null == isFractionalPremiumWithNoStandardSub) {
    let UPSELL = arg1(dependencyMap[2]).QuestOrbMultiplierEligibilityType.INELIGIBLE;
  } else {
    if (obj2.canUseMoreQuestOrbs(isFractionalPremiumWithNoStandardSub)) {
      const questOrbMultiplierSource = arg1(dependencyMap[2]).getQuestOrbMultiplierSource(isFractionalPremiumWithNoStandardSub);
      if (questOrbMultiplierSource === arg1(dependencyMap[2]).QuestOrbMultiplierSource.CREPE) {
        let NITRO = arg1(dependencyMap[2]).QuestOrbMultiplierEligibilityType.CREPE;
      } else {
        NITRO = arg1(dependencyMap[2]).QuestOrbMultiplierEligibilityType.NITRO;
      }
      const obj = arg1(dependencyMap[2]);
    } else {
      if (null != isFractionalPremiumWithNoStandardSub) {
        if (isFractionalPremiumWithNoStandardSub.isFractionalPremiumWithNoStandardSub()) {
          UPSELL = arg1(dependencyMap[2]).QuestOrbMultiplierEligibilityType.INELIGIBLE;
        }
      }
      UPSELL = arg1(dependencyMap[2]).QuestOrbMultiplierEligibilityType.UPSELL;
    }
    const obj2 = importDefault(dependencyMap[3]);
  }
  return UPSELL;
}
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/quests/hooks/QuestOrbMultiplierHooks.tsx");

export const useQuestOrbMultiplierEligibility = function useQuestOrbMultiplierEligibility() {
  const items = [closure_3];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => callback(currentUser.getCurrentUser()));
};
export { getQuestOrbMultiplierEligibilityForUser };
