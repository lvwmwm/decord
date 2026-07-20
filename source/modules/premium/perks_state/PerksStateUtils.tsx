// Module ID: 1865
// Function ID: 20530
// Name: parseServerPerkConfigKind
// Dependencies: []
// Exports: getPerkConfig, parseServerPerks

// Module 1865 (parseServerPerkConfigKind)
function parseServerPerkConfigKind(kind) {
  if (null != kind.kind) {
    const type = kind.kind.type;
    if (arg1(dependencyMap[1]).PerkConfigType.INCREASED_FILE_UPLOAD_SIZE === type) {
      let obj = { type: arg1(dependencyMap[1]).PerkConfigType.INCREASED_FILE_UPLOAD_SIZE, maxSize: kind.kind.max_size };
      return obj;
    } else if (arg1(dependencyMap[1]).PerkConfigType.INCREASED_GUILD_LIMIT === type) {
      obj = { type: arg1(dependencyMap[1]).PerkConfigType.INCREASED_GUILD_LIMIT, maxGuilds: kind.kind.max_guilds };
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
      const obj = importAll(dependencyMap[2]);
      const obj2 = importAll(dependencyMap[2]);
      const deserializeResult = importAll(dependencyMap[2]).deserialize(activePerksBitmask[rounded]);
      hasItem = obj.has(deserializeResult, importAll(dependencyMap[2]).getFlag(MONTHLY_ORBS % 64));
      const obj3 = importAll(dependencyMap[2]);
    }
    return hasItem;
  }
}
function getPerkSource(perks, MONTHLY_ORBS) {
  if (null != perks) {
    const _String = String;
    let source;
    if (null != perks.configByPerk[String(undefined, MONTHLY_ORBS)]) {
      source = tmp2.source;
    }
    if (null != source) {
      source = tmp2.source;
    } else if (hasPerk(perks, MONTHLY_ORBS)) {
      const items = [MONTHLY_ORBS(dependencyMap[3]).PerkSource.SOURCE_NITRO];
      source = items;
    }
    return source;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/premium/perks_state/PerksStateUtils.tsx");

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
        let tmp = closure_3;
        let tmp2 = closure_3(entries[num], 2);
        let tmp3 = tmp2[1];
        obj = { source: tmp3.source };
        let tmp4 = closure_4;
        obj.kind = closure_4(tmp3);
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
    if (null != perks.configByPerk[String(undefined, MONTHLY_ORBS)]) {
      const obj = { source: getPerkSource(perks, MONTHLY_ORBS), kind: tmp2.kind };
      return obj;
    }
  }
};
