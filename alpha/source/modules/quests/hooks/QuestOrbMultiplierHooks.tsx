// Module ID: 9682
// Function ID: 9683
// Name: QuestOrbMultiplierHooks
// Dependencies: [1384, 504, 9683, 2048, 2]
// Exports: useQuestOrbMultiplierEligibility

// Module 9682 (QuestOrbMultiplierHooks)
import get_initialized from "get initialized" /* 504 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2048 */;
import QuestOrbMultiplierUtils from "QuestOrbMultiplierUtils" /* 9683 */;
import UserStore from "UserStore" /* 1384 */;
import size from "module_2" /* 2 */;

function getQuestOrbMultiplierEligibilityForUser(isFractionalPremiumWithNoStandardSub) {
  let INELIGIBLE;
  if (null == isFractionalPremiumWithNoStandardSub) {
    INELIGIBLE = QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.INELIGIBLE;
  } else {
    const obj2 = PremiumUtilsDefault;
    if (obj2.canUseMoreQuestOrbs(isFractionalPremiumWithNoStandardSub)) {
      let NITRO;
      const obj = QuestOrbMultiplierUtils;
      const questOrbMultiplierSource = obj.getQuestOrbMultiplierSource(isFractionalPremiumWithNoStandardSub);
      if (questOrbMultiplierSource === QuestOrbMultiplierUtils.QuestOrbMultiplierSource.XBOX_GAME_PASS) {
        NITRO = tmp3(9683).QuestOrbMultiplierEligibilityType.XBOX_GAME_PASS;
      } else {
        NITRO = tmp3(9683).QuestOrbMultiplierEligibilityType.NITRO;
      }
      INELIGIBLE = NITRO;
    } else {
      let result;
      if (isFractionalPremiumWithNoStandardSub != null) {
        result = isFractionalPremiumWithNoStandardSub.isFractionalPremiumWithNoStandardSub();
      }
      const QuestOrbMultiplierEligibilityType = QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType;
      INELIGIBLE = result ? QuestOrbMultiplierEligibilityType.INELIGIBLE : QuestOrbMultiplierEligibilityType.UPSELL;
    }
  }
  return INELIGIBLE;
}
let result = size.fileFinishedImporting("modules/quests/hooks/QuestOrbMultiplierHooks.tsx");

export function useQuestOrbMultiplierEligibility() {
  let currentUser;
  const items = [UserStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => getQuestOrbMultiplierEligibilityForUser(currentUser.getCurrentUser()));
}
export { getQuestOrbMultiplierEligibilityForUser };
