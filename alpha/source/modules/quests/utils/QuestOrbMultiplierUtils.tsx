// Module ID: 11636
// Function ID: 11637
// Name: QuestOrbMultiplierUtils
// Dependencies: [4481, 1378, 1380, 2]
// Exports: getQuestOrbMultiplierSource, shouldReceiveQuestOrbMultiplier

// Module 11636 (QuestOrbMultiplierUtils)
import PerksStateUtils from "PerksStateUtils" /* 1378 */;
import size from "module_2" /* 2 */;

const obj = { UPSELL: "UPSELL", NITRO: "NITRO", XBOX_GAME_PASS: "XBOX_GAME_PASS", INELIGIBLE: "INELIGIBLE" };
let obj2 = { NITRO: "nitro", XBOX_GAME_PASS: "xbox_game_pass" };
const items = [, ];
({ XBOX_GAME_PASS: arr[0], NITRO: arr[1] } = obj);
const result = size.fileFinishedImporting("modules/quests/utils/QuestOrbMultiplierUtils.tsx");

export const QuestOrbMultiplierEligibilityType = obj;
export const QuestOrbMultiplierSource = obj2;
export const shouldReceiveQuestOrbMultiplier = function shouldReceiveQuestOrbMultiplier(questOrbMultiplierEligibilityForUser) {
  return items.includes(questOrbMultiplierEligibilityForUser);
};
export const getQuestOrbMultiplierSource = function getQuestOrbMultiplierSource(perks) {
  if (obj.canUseMoreQuestOrbs(perks)) {
    obj2 = PerksStateUtils;
    perks = undefined;
    if (perks != null) {
      perks = perks.perks;
    }
    const perkSource = obj2.getPerkSource(perks, tmp4(1380).Perk.MORE_QUEST_ORBS);
    let hasItem;
    if (perkSource != null) {
      hasItem = perkSource.includes(tmp4(1380).PerkSource.SOURCE_NITRO);
    }
    if (!hasItem) {
      if (!tmpResult.canUseQuestOrbMultiplier(perks)) {
        let hasItem1;
        if (perkSource != null) {
          hasItem1 = perkSource.includes(tmp4(1380).PerkSource.SOURCE_THIRDPARTY_CROISSANT);
        }
        let XBOX_GAME_PASS = null;
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
