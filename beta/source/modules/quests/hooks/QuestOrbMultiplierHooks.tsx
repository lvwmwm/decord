// Module ID: 9778
// Function ID: 9779
// Name: QuestOrbMultiplierHooks
// Dependencies: [1378, 558, 576, 504, 9779, 4491, 2]

// Module 9778 (QuestOrbMultiplierHooks)
import react from "react" /* 576 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4491 */;
import QuestOrbMultiplierUtils from "QuestOrbMultiplierUtils" /* 9779 */;
import UserStore from "UserStore" /* 1378 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
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
        NITRO = tmp3(9779).QuestOrbMultiplierEligibilityType.XBOX_GAME_PASS;
      } else {
        NITRO = tmp3(9779).QuestOrbMultiplierEligibilityType.NITRO;
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
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let currentUser;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function u() {
      return getQuestOrbMultiplierEligibilityForUser(currentUser.getCurrentUser());
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (() => {
  let currentUser;
  const items = [UserStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => getQuestOrbMultiplierEligibilityForUser(currentUser.getCurrentUser()));
});
let result = size.fileFinishedImporting("modules/quests/hooks/QuestOrbMultiplierHooks.tsx");

export const useQuestOrbMultiplierEligibility = tmp2;
export { getQuestOrbMultiplierEligibilityForUser };
