// Module ID: 10454
// Function ID: 10455
// Name: getQuestOrbMultiplierEligibilityForUser
// Dependencies: [1922, 589, 10455, 4007, 2]
// Exports: useQuestOrbMultiplierEligibility

// Module 10454 (getQuestOrbMultiplierEligibilityForUser)
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
function getQuestOrbMultiplierEligibilityForUser(isFractionalPremiumWithNoStandardSub) {
  if (null == isFractionalPremiumWithNoStandardSub) {
    let INELIGIBLE = require(10455) /* items */.QuestOrbMultiplierEligibilityType.INELIGIBLE;
  } else {
    let QuestOrbMultiplierEligibilityType2 = dependencyMap;
    if (obj2.canUseMoreQuestOrbs(isFractionalPremiumWithNoStandardSub)) {
      const questOrbMultiplierSource = require(10455) /* items */.getQuestOrbMultiplierSource(isFractionalPremiumWithNoStandardSub);
      if (questOrbMultiplierSource === require(10455) /* items */.QuestOrbMultiplierSource.CREPE) {
        QuestOrbMultiplierEligibilityType2 = tmp3(10455).QuestOrbMultiplierEligibilityType;
        let NITRO = QuestOrbMultiplierEligibilityType2.CREPE;
      } else {
        NITRO = tmp3(10455).QuestOrbMultiplierEligibilityType.NITRO;
      }
      const obj = require(10455) /* items */;
    } else {
      let result;
      if (isFractionalPremiumWithNoStandardSub != null) {
        result = isFractionalPremiumWithNoStandardSub.isFractionalPremiumWithNoStandardSub();
      }
      const QuestOrbMultiplierEligibilityType = require(10455) /* items */.QuestOrbMultiplierEligibilityType;
      INELIGIBLE = result ? QuestOrbMultiplierEligibilityType.INELIGIBLE : QuestOrbMultiplierEligibilityType.UPSELL;
    }
    obj2 = importDefault(4007);
  }
  return INELIGIBLE;
}
let result = require("items").fileFinishedImporting("modules/quests/hooks/QuestOrbMultiplierHooks.tsx");

export const useQuestOrbMultiplierEligibility = function useQuestOrbMultiplierEligibility() {
  const items = [mergeGuildAvatar];
  return require(589) /* initialize */.useStateFromStores(items, () => callback(currentUser.getCurrentUser()));
};
export { getQuestOrbMultiplierEligibilityForUser };
