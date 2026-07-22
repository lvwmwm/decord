// Module ID: 9164
// Function ID: 71820
// Name: checkGuildForFeature
// Dependencies: [297467904, 79429632, 258736128, 601227264, 283967488, 604831744, 126746624, 605028352, 606732288, 603258880]

// Module 9164 (checkGuildForFeature)
let PARTNERED;
let VERIFIED;
function checkGuildForFeature(guild, PARTNERED) {
  let has = guild;
  if (null == guild) {
    return tmp;
  } else {
    if (obj.isGuildRecord(has)) {
      const features3 = has.features;
      has = features3.has;
      let hasItem = has(PARTNERED);
    } else {
      const _Array = Array;
      if (Array.isArray(has.features)) {
        const features2 = has.features;
        hasItem = features2.includes(PARTNERED);
      } else {
        const features = has.features;
        let hasItem1;
        if (null != features) {
          hasItem1 = features.has(PARTNERED);
        }
        hasItem = Boolean(hasItem1);
      }
    }
    const obj = PARTNERED(dependencyMap[7]);
  }
}
function getGuildBadgeSource(guild, flag) {
  let NONE = obj.NONE;
  if (!checkGuildForFeature(guild, GuildFeatures.VERIFIED)) {
    if (checkGuildForFeature(guild, GuildFeatures.PARTNERED)) {
      NONE = flag ? tmp3.PARTNERED_BLACK : tmp3.PARTNERED;
    }
    return obj[NONE];
  }
}
class GuildBadge {
  constructor(arg0) {
    flag = global.monocolored;
    if (flag === undefined) {
      flag = false;
    }
    MEDIUM = global.size;
    if (MEDIUM === undefined) {
      tmp = GuildBadge;
      MEDIUM = GuildBadge.Sizes.MEDIUM;
    }
    obj = { "Null": "spring", "Null": 0.4, "Null": 1 };
    tmp2 = null;
    setPrototypeOfResult = Object.setPrototypeOf(null);
    merged = Object.assign(global, obj);
    tmp5 = getGuildBadgeSource(global.guild, flag);
    if (null != tmp5) {
      tmp6 = jsx;
      tmp7 = arg1;
      tmp8 = dependencyMap;
      num = 8;
      obj = {};
      tmp9 = obj;
      tmp10 = merged;
      merged1 = Object.assign(merged);
      str = "size";
      obj["size"] = MEDIUM;
      str2 = "source";
      obj["source"] = tmp5;
      tmp2 = jsx(arg1(dependencyMap[8]).Icon, obj);
    }
    return tmp2;
  }
}
importAll(dependencyMap[0]);
const GuildFeatures = arg1(dependencyMap[1]).GuildFeatures;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = { PARTNERED: 0, [0]: "PARTNERED", VERIFIED: 1, [1]: "VERIFIED", PARTNERED_BLACK: 2, [2]: "PARTNERED_BLACK", VERIFIED_BLACK: 3, [3]: "VERIFIED_BLACK", NONE: 4, [4]: "NONE" };
obj = { [VERIFIED]: importDefault(dependencyMap[3]), [PARTNERED]: importDefault(dependencyMap[4]), [obj.VERIFIED_BLACK]: importDefault(dependencyMap[5]), [obj.PARTNERED_BLACK]: importDefault(dependencyMap[6]), [obj.NONE]: null };
({ VERIFIED, PARTNERED } = obj);
GuildBadge.Sizes = arg1(dependencyMap[8]).Icon.Sizes;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/guild/native/GuildBadge.tsx");

export default GuildBadge;
export { getGuildBadgeSource };
