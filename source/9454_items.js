// Module ID: 9454
// Function ID: 73673
// Name: items
// Dependencies: [0, 4294967295, 4294967295, 0, 0]
// Exports: getQuestOrbMultiplierSource, shouldReceiveQuestOrbMultiplier

// Module 9454 (items)
import result from "result";

let obj = { UPSELL: "UPSELL", NITRO: "NITRO", CREPE: "CREPE", INELIGIBLE: "INELIGIBLE" };
obj = { NITRO: "nitro", CREPE: "crepe" };
const items = [, ];
({ CREPE: arr[0], NITRO: arr[1] } = obj);
result = result.fileFinishedImporting("modules/quests/utils/QuestOrbMultiplierUtils.tsx");

export const QuestOrbMultiplierEligibilityType = obj;
export const QuestOrbMultiplierSource = obj;
export const shouldReceiveQuestOrbMultiplier = function shouldReceiveQuestOrbMultiplier(orbMultiplierEligibility) {
  return items.includes(orbMultiplierEligibility);
};
export const getQuestOrbMultiplierSource = function getQuestOrbMultiplierSource(perks) {
  const obj = importDefault(dependencyMap[0]);
  if (obj.canUseMoreQuestOrbs(perks)) {
    if (obj2.canUseQuestOrbMultiplier(perks)) {
      return obj.NITRO;
    } else {
      perks = undefined;
      if (null != perks) {
        perks = perks.perks;
      }
      const perkSource = require(dependencyMap[1]).getPerkSource(perks, require(dependencyMap[2]).Perk.MORE_QUEST_ORBS);
      if (null != perkSource) {
        if (perkSource.includes(require(dependencyMap[2]).PerkSource.SOURCE_NITRO)) {
          let NITRO = obj.NITRO;
        }
        return NITRO;
      }
      const obj3 = require(dependencyMap[1]);
      NITRO = null;
      if (obj5.getIsCrepeEnabled("getQuestOrbMultiplierSource")) {
        NITRO = null;
        if (null != perkSource) {
          NITRO = null;
          if (perkSource.includes(require(dependencyMap[2]).PerkSource.SOURCE_THIRDPARTY_CROISSANT)) {
            NITRO = obj.CREPE;
          }
        }
      }
      const obj5 = require(dependencyMap[3]);
    }
    const obj2 = importDefault(dependencyMap[0]);
  } else {
    return null;
  }
};
