// Module ID: 9207
// Function ID: 72070
// Name: checkGuildForFeature
// Dependencies: [31, 653, 33, 5705, 5706, 9208, 9209, 1387, 1273, 2]

// Module 9207 (checkGuildForFeature)
import "result";
import { GuildFeatures } from "ME";
import { jsx } from "jsxProd";

let PARTNERED;
let VERIFIED;
const require = arg1;
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
    obj = require(1387) /* fromGuildPropertiesWithAdditionalFields */;
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
    obj = { guild: 0, monocolored: 0, size: 0 };
    tmp2 = null;
    setPrototypeOfResult = Object.setPrototypeOf(null);
    merged = Object.assign(global, obj);
    tmp5 = getGuildBadgeSource(global.guild, flag);
    if (null != tmp5) {
      tmp6 = jsx;
      tmp7 = closure_0;
      tmp8 = closure_1;
      num = 8;
      obj = {};
      tmp9 = obj;
      tmp10 = merged;
      merged1 = Object.assign(merged);
      str = "size";
      obj["size"] = MEDIUM;
      str2 = "source";
      obj["source"] = tmp5;
      tmp2 = jsx(require("Button").Icon, obj);
    }
    return tmp2;
  }
}
let obj = { PARTNERED: 0, [0]: "PARTNERED", VERIFIED: 1, [1]: "VERIFIED", PARTNERED_BLACK: 2, [2]: "PARTNERED_BLACK", VERIFIED_BLACK: 3, [3]: "VERIFIED_BLACK", NONE: 4, [4]: "NONE" };
obj = { [VERIFIED]: require("registerAsset"), [PARTNERED]: require("registerAsset"), [obj.VERIFIED_BLACK]: require("registerAsset"), [obj.PARTNERED_BLACK]: require("registerAsset"), [obj.NONE]: null };
({ VERIFIED, PARTNERED } = obj);
GuildBadge.Sizes = require("Button").Icon.Sizes;
const result = require("jsxProd").fileFinishedImporting("modules/guild/native/GuildBadge.tsx");

export default GuildBadge;
export { getGuildBadgeSource };
