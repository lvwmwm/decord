// Module ID: 9163
// Function ID: 9164
// Name: QuestOrbMultiplierUtils
// Dependencies: [4769, 1396, 1398, 2]
// Exports: getQuestOrbMultiplierSource, shouldReceiveQuestOrbMultiplier

// Module 9163 (QuestOrbMultiplierUtils)
import PerksStateUtils from "PerksStateUtils" /* 1396 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4769 */;
import size from "module_2" /* 2 */;

let obj = { UPSELL: "UPSELL", NITRO: "NITRO", XBOX_GAME_PASS: "XBOX_GAME_PASS", INELIGIBLE: "INELIGIBLE" };
const obj2 = { NITRO: "nitro", XBOX_GAME_PASS: "xbox_game_pass" };
const items = [, ];
({ XBOX_GAME_PASS: arr[0], NITRO: arr[1] } = obj);
const result = size.fileFinishedImporting("modules/quests/utils/QuestOrbMultiplierUtils.tsx");

export const QuestOrbMultiplierEligibilityType = obj;
export const QuestOrbMultiplierSource = obj2;
export const shouldReceiveQuestOrbMultiplier = function shouldReceiveQuestOrbMultiplier(orbMultiplierEligibility) {
  return items.includes(orbMultiplierEligibility);
};
export const getQuestOrbMultiplierSource = function getQuestOrbMultiplierSource(perks) {
  const obj = PremiumUtilsDefault;
  if (obj.canUseMoreQuestOrbs(perks)) {
    perks = undefined;
    const getPerkSource = PerksStateUtils.getPerkSource;
    PerksStateUtils;
    if (perks != null) {
      perks = perks.perks;
    }
    const perkSource = getPerkSource(perks, tmp4(1398).Perk.MORE_QUEST_ORBS);
    let hasItem;
    if (perkSource != null) {
      hasItem = perkSource.includes(tmp4(1398).PerkSource.SOURCE_NITRO);
    }
    if (!hasItem) {
      let XBOX_GAME_PASS;
      const tmpResult = PremiumUtilsDefault;
      if (!tmpResult.canUseQuestOrbMultiplier(perks)) {
        let hasItem1;
        if (perkSource != null) {
          hasItem1 = perkSource.includes(tmp4(1398).PerkSource.SOURCE_THIRDPARTY_CROISSANT);
        }
        XBOX_GAME_PASS = null;
        if (hasItem1) {
          XBOX_GAME_PASS = obj2.XBOX_GAME_PASS;
        }
      }
      return XBOX_GAME_PASS;
    }
    XBOX_GAME_PASS = obj2.NITRO;
  } else {
    return null;
  }
};
