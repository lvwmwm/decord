// Module ID: 10438
// Function ID: 10439
// Name: getQuestOrbMultiplierEligibilityForUser
// Dependencies: [1922, 589, 10439, 4007, 2]
// Exports: useQuestOrbMultiplierEligibility

// Module 10438 (getQuestOrbMultiplierEligibilityForUser)
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
function getQuestOrbMultiplierEligibilityForUser(isFractionalPremiumWithNoStandardSub) {
  if (null == isFractionalPremiumWithNoStandardSub) {
    let INELIGIBLE = require(10439) /* items */.QuestOrbMultiplierEligibilityType.INELIGIBLE;
  } else {
    let QuestOrbMultiplierEligibilityType2 = dependencyMap;
    if (obj2.canUseMoreQuestOrbs(isFractionalPremiumWithNoStandardSub)) {
      const questOrbMultiplierSource = require(10439) /* items */.getQuestOrbMultiplierSource(isFractionalPremiumWithNoStandardSub);
      if (questOrbMultiplierSource === require(10439) /* items */.QuestOrbMultiplierSource.CREPE) {
        QuestOrbMultiplierEligibilityType2 = tmp3(10439).QuestOrbMultiplierEligibilityType;
        let NITRO = QuestOrbMultiplierEligibilityType2.CREPE;
      } else {
        NITRO = tmp3(10439).QuestOrbMultiplierEligibilityType.NITRO;
      }
      const obj = require(10439) /* items */;
    } else {
      let result;
      if (isFractionalPremiumWithNoStandardSub != null) {
        result = isFractionalPremiumWithNoStandardSub.isFractionalPremiumWithNoStandardSub();
      }
      const QuestOrbMultiplierEligibilityType = require(10439) /* items */.QuestOrbMultiplierEligibilityType;
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
