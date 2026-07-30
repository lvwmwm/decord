// Module ID: 9482
// Function ID: 9483
// Name: getQuestOrbMultiplierEligibilityForUser
// Dependencies: [1874, 589, 9483, 3835, 2]
// Exports: useQuestOrbMultiplierEligibility

// Module 9482 (getQuestOrbMultiplierEligibilityForUser)
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
function getQuestOrbMultiplierEligibilityForUser(isFractionalPremiumWithNoStandardSub) {
  if (null == isFractionalPremiumWithNoStandardSub) {
    let INELIGIBLE = require(9483) /* items */.QuestOrbMultiplierEligibilityType.INELIGIBLE;
  } else {
    let QuestOrbMultiplierEligibilityType2 = dependencyMap;
    if (obj2.canUseMoreQuestOrbs(isFractionalPremiumWithNoStandardSub)) {
      const questOrbMultiplierSource = require(9483) /* items */.getQuestOrbMultiplierSource(isFractionalPremiumWithNoStandardSub);
      if (questOrbMultiplierSource === require(9483) /* items */.QuestOrbMultiplierSource.CREPE) {
        QuestOrbMultiplierEligibilityType2 = tmp3(9483).QuestOrbMultiplierEligibilityType;
        let NITRO = QuestOrbMultiplierEligibilityType2.CREPE;
      } else {
        NITRO = tmp3(9483).QuestOrbMultiplierEligibilityType.NITRO;
      }
      const obj = require(9483) /* items */;
    } else {
      let result;
      if (isFractionalPremiumWithNoStandardSub != null) {
        result = isFractionalPremiumWithNoStandardSub.isFractionalPremiumWithNoStandardSub();
      }
      const QuestOrbMultiplierEligibilityType = require(9483) /* items */.QuestOrbMultiplierEligibilityType;
      INELIGIBLE = result ? QuestOrbMultiplierEligibilityType.INELIGIBLE : QuestOrbMultiplierEligibilityType.UPSELL;
    }
    obj2 = importDefault(3835);
  }
  return INELIGIBLE;
}
let result = require("items").fileFinishedImporting("modules/quests/hooks/QuestOrbMultiplierHooks.tsx");

export const useQuestOrbMultiplierEligibility = function useQuestOrbMultiplierEligibility() {
  const items = [mergeGuildAvatar];
  return require(589) /* initialize */.useStateFromStores(items, () => callback(currentUser.getCurrentUser()));
};
export { getQuestOrbMultiplierEligibilityForUser };
