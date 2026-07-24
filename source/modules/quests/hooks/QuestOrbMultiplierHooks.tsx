// Module ID: 9501
// Function ID: 73957
// Name: getQuestOrbMultiplierEligibilityForUser
// Dependencies: [1849, 566, 9502, 3776, 2]
// Exports: useQuestOrbMultiplierEligibility

// Module 9501 (getQuestOrbMultiplierEligibilityForUser)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function getQuestOrbMultiplierEligibilityForUser(isFractionalPremiumWithNoStandardSub) {
  if (null == isFractionalPremiumWithNoStandardSub) {
    let UPSELL = require(9502) /* items */.QuestOrbMultiplierEligibilityType.INELIGIBLE;
  } else {
    if (obj2.canUseMoreQuestOrbs(isFractionalPremiumWithNoStandardSub)) {
      const questOrbMultiplierSource = require(9502) /* items */.getQuestOrbMultiplierSource(isFractionalPremiumWithNoStandardSub);
      if (questOrbMultiplierSource === require(9502) /* items */.QuestOrbMultiplierSource.CREPE) {
        let NITRO = require(9502) /* items */.QuestOrbMultiplierEligibilityType.CREPE;
      } else {
        NITRO = require(9502) /* items */.QuestOrbMultiplierEligibilityType.NITRO;
      }
      const obj = require(9502) /* items */;
    } else {
      if (null != isFractionalPremiumWithNoStandardSub) {
        if (isFractionalPremiumWithNoStandardSub.isFractionalPremiumWithNoStandardSub()) {
          UPSELL = require(9502) /* items */.QuestOrbMultiplierEligibilityType.INELIGIBLE;
        }
      }
      UPSELL = require(9502) /* items */.QuestOrbMultiplierEligibilityType.UPSELL;
    }
    obj2 = importDefault(3776);
  }
  return UPSELL;
}
const result = require("items").fileFinishedImporting("modules/quests/hooks/QuestOrbMultiplierHooks.tsx");

export const useQuestOrbMultiplierEligibility = function useQuestOrbMultiplierEligibility() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_4(outer1_3.getCurrentUser()));
};
export { getQuestOrbMultiplierEligibilityForUser };
