// Module ID: 1865
// Function ID: 20537
// Name: parseServerPerkConfigKind
// Dependencies: [57, 1866, 483, 1867, 2]
// Exports: getPerkConfig, parseServerPerks

// Module 1865 (parseServerPerkConfigKind)
import _slicedToArray from "_slicedToArray";

const require = arg1;
function parseServerPerkConfigKind(kind) {
  if (null != kind.kind) {
    const type = kind.kind.type;
    if (require(1866) /* PerkConfigType */.PerkConfigType.INCREASED_FILE_UPLOAD_SIZE === type) {
      let obj = { type: require(1866) /* PerkConfigType */.PerkConfigType.INCREASED_FILE_UPLOAD_SIZE, maxSize: kind.kind.max_size };
      return obj;
    } else if (require(1866) /* PerkConfigType */.PerkConfigType.INCREASED_GUILD_LIMIT === type) {
      obj = { type: require(1866) /* PerkConfigType */.PerkConfigType.INCREASED_GUILD_LIMIT, maxGuilds: kind.kind.max_guilds };
      return obj;
    }
  }
}
function hasPerk(perks, MONTHLY_ORBS) {
  if (null == perks) {
    return false;
  } else {
    const activePerksBitmask = perks.activePerksBitmask;
    const _Math = Math;
    const rounded = Math.floor(MONTHLY_ORBS / 64);
    let hasItem = !tmp7;
    if (rounded < activePerksBitmask.length) {
      const obj = importAll(483);
      const obj2 = importAll(483);
      const deserializeResult = importAll(483).deserialize(activePerksBitmask[rounded]);
      hasItem = obj.has(deserializeResult, importAll(483).getFlag(MONTHLY_ORBS % 64));
      const obj3 = importAll(483);
    }
    return hasItem;
  }
}
function getPerkSource(perks, MONTHLY_ORBS) {
  if (null != perks) {
    const _String = String;
    const tmp2 = perks.configByPerk[String(undefined, MONTHLY_ORBS)];
    let source;
    if (null != tmp2) {
      source = tmp2.source;
    }
    if (null != source) {
      source = tmp2.source;
    } else if (hasPerk(perks, MONTHLY_ORBS)) {
      const items = [require(1867) /* _callSuper */.PerkSource.SOURCE_NITRO];
      source = items;
    }
    return source;
  }
}
const result = require("fromHexReverseArray").fileFinishedImporting("modules/premium/perks_state/PerksStateUtils.tsx");

export const parseServerPerks = function parseServerPerks(perks) {
  let length;
  if (null == perks) {
    return null;
  } else {
    let obj = {};
    const _Object = Object;
    const entries = Object.entries(perks.config_by_perk);
    let num = 0;
    if (0 < entries.length) {
      do {
        let tmp = callback;
        let tmp2 = callback(entries[num], 2);
        let tmp3 = tmp2[1];
        obj = { source: tmp3.source };
        let tmp4 = parseServerPerkConfigKind;
        obj.kind = parseServerPerkConfigKind(tmp3);
        obj[tmp2[0]] = obj;
        num = num + 1;
        length = entries.length;
      } while (num < length);
    }
    obj = { activePerksBitmask: perks.active_perks_bitmask };
    obj.configByPerk = obj;
    obj.rulesVersion = perks.rules_version;
    return obj;
  }
};
export { hasPerk };
export { getPerkSource };
export const getPerkConfig = function getPerkConfig(perks, MONTHLY_ORBS) {
  if (null != perks) {
    const _String = String;
    const tmp2 = perks.configByPerk[String(undefined, MONTHLY_ORBS)];
    if (null != tmp2) {
      const obj = { source: getPerkSource(perks, MONTHLY_ORBS), kind: tmp2.kind };
      return obj;
    }
  }
};
