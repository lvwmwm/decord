// Module ID: 11224
// Function ID: 11225
// Name: getQuestOrbMultiplierEligibilityForUser
// Dependencies: [1921, 586, 11225, 4139, 2]
// Exports: useQuestOrbMultiplierEligibility

// Module 11224 (getQuestOrbMultiplierEligibilityForUser)
import initialize from "initialize" /* 586 */;
import getPremiumPlanItemDefault from "getPremiumPlanItem" /* 4139 */;
import items2 from "items" /* 11225 */;
import closure_3 from "mergeGuildAvatar" /* 1921 */;

require = arg1;
function getQuestOrbMultiplierEligibilityForUser(isFractionalPremiumWithNoStandardSub) {
  if (null == isFractionalPremiumWithNoStandardSub) {
    let INELIGIBLE = items2.QuestOrbMultiplierEligibilityType.INELIGIBLE;
  } else {
    let QuestOrbMultiplierEligibilityType2 = dependencyMap;
    if (obj2.canUseMoreQuestOrbs(isFractionalPremiumWithNoStandardSub)) {
      const questOrbMultiplierSource = items2.getQuestOrbMultiplierSource(isFractionalPremiumWithNoStandardSub);
      if (questOrbMultiplierSource === items2.QuestOrbMultiplierSource.CREPE) {
        QuestOrbMultiplierEligibilityType2 = tmp3(11225).QuestOrbMultiplierEligibilityType;
        let NITRO = QuestOrbMultiplierEligibilityType2.CREPE;
      } else {
        NITRO = tmp3(11225).QuestOrbMultiplierEligibilityType.NITRO;
      }
      const obj = items2;
    } else {
      let result;
      if (isFractionalPremiumWithNoStandardSub != null) {
        result = isFractionalPremiumWithNoStandardSub.isFractionalPremiumWithNoStandardSub();
      }
      const QuestOrbMultiplierEligibilityType = items2.QuestOrbMultiplierEligibilityType;
      INELIGIBLE = result ? QuestOrbMultiplierEligibilityType.INELIGIBLE : QuestOrbMultiplierEligibilityType.UPSELL;
    }
    obj2 = getPremiumPlanItemDefault;
  }
  return INELIGIBLE;
}
let result = require("set").fileFinishedImporting("modules/quests/hooks/QuestOrbMultiplierHooks.tsx");

export const useQuestOrbMultiplierEligibility = function useQuestOrbMultiplierEligibility() {
  const items = [closure_3];
  return initialize.useStateFromStores(items, () => callback(currentUser.getCurrentUser()));
};
export { getQuestOrbMultiplierEligibilityForUser };
