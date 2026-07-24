// Module ID: 9502
// Function ID: 73961
// Name: items
// Dependencies: [3776, 1865, 1867, 6788, 2]
// Exports: getQuestOrbMultiplierSource, shouldReceiveQuestOrbMultiplier

// Module 9502 (items)
let obj = { UPSELL: "UPSELL", NITRO: "NITRO", CREPE: "CREPE", INELIGIBLE: "INELIGIBLE" };
obj = { NITRO: "nitro", CREPE: "crepe" };
const items = [, ];
({ CREPE: arr[0], NITRO: arr[1] } = obj);
const result = require("_callSuper").fileFinishedImporting("modules/quests/utils/QuestOrbMultiplierUtils.tsx");

export const QuestOrbMultiplierEligibilityType = obj;
export const QuestOrbMultiplierSource = obj;
export const shouldReceiveQuestOrbMultiplier = function shouldReceiveQuestOrbMultiplier(orbMultiplierEligibility) {
  return items.includes(orbMultiplierEligibility);
};
export const getQuestOrbMultiplierSource = function getQuestOrbMultiplierSource(perks) {
  const obj = importDefault(3776);
  if (obj.canUseMoreQuestOrbs(perks)) {
    if (obj2.canUseQuestOrbMultiplier(perks)) {
      return obj.NITRO;
    } else {
      perks = undefined;
      if (null != perks) {
        perks = perks.perks;
      }
      const perkSource = require(1865) /* parseServerPerkConfigKind */.getPerkSource(perks, require(1867) /* _callSuper */.Perk.MORE_QUEST_ORBS);
      if (null != perkSource) {
        if (perkSource.includes(require(1867) /* _callSuper */.PerkSource.SOURCE_NITRO)) {
          let NITRO = obj.NITRO;
        }
        return NITRO;
      }
      const obj3 = require(1865) /* parseServerPerkConfigKind */;
      NITRO = null;
      if (obj5.getIsCrepeEnabled("getQuestOrbMultiplierSource")) {
        NITRO = null;
        if (null != perkSource) {
          NITRO = null;
          if (perkSource.includes(require(1867) /* _callSuper */.PerkSource.SOURCE_THIRDPARTY_CROISSANT)) {
            NITRO = obj.CREPE;
          }
        }
      }
      obj5 = require(6788) /* apexExperiment */;
    }
    obj2 = importDefault(3776);
  } else {
    return null;
  }
};
