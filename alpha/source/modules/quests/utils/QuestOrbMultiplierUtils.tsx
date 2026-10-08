// Module ID: 9552
// Function ID: 9553
// Name: QuestOrbMultiplierUtils
// Dependencies: [4726, 1395, 1397, 2]
// Exports: getQuestOrbMultiplierSource, shouldReceiveQuestOrbMultiplier

// Module 9552 (QuestOrbMultiplierUtils)
import PerksStateUtils from "PerksStateUtils" /* 1395 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4726 */;
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
    const perkSource = getPerkSource(perks, tmp4(1397).Perk.MORE_QUEST_ORBS);
    let hasItem;
    if (perkSource != null) {
      hasItem = perkSource.includes(tmp4(1397).PerkSource.SOURCE_NITRO);
    }
    if (!hasItem) {
      let XBOX_GAME_PASS;
      const tmpResult = PremiumUtilsDefault;
      if (!tmpResult.canUseQuestOrbMultiplier(perks)) {
        let hasItem1;
        if (perkSource != null) {
          hasItem1 = perkSource.includes(tmp4(1397).PerkSource.SOURCE_THIRDPARTY_CROISSANT);
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
