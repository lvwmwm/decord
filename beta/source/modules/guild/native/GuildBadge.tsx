// Module ID: 5902
// Function ID: 5903
// Name: GuildBadge
// Dependencies: [19, 1074, 21, 5903, 5904, 5905, 5906, 2059, 1177, 2]

// Module 5902 (GuildBadge)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import native from "native" /* 1177 */;
import GuildRecordUtils from "GuildRecordUtils" /* 2059 */;
import AssetRegistryDefault from "AssetRegistry" /* 5903 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 5904 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 5905 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 5906 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let PARTNERED;
let PARTNERED_BLACK;
let VERIFIED;
let VERIFIED_BLACK;
function getGuildBadgeSource(guild, flag) {
  let NONE = obj.NONE;
  const VERIFIED = GuildFeatures.VERIFIED;
  let tmp3 = null != guild;
  const tmp2 = GuildFeatures;
  if (tmp3) {
    let hasItem;
    obj = GuildRecordUtils;
    if (obj.isGuildRecord(guild)) {
      const features3 = guild.features;
      hasItem = features3.has(VERIFIED);
    } else {
      const _Array = Array;
      if (Array.isArray(guild.features)) {
        const features2 = guild.features;
        hasItem = features2.includes(VERIFIED);
      } else {
        const features = guild.features;
        let hasItem1;
        const _Boolean = Boolean;
        if (features != null) {
          hasItem1 = features.has(VERIFIED);
        }
        hasItem = _Boolean(hasItem1);
      }
    }
    tmp3 = hasItem;
  }
  if (tmp3) {
    NONE = flag ? tmp.VERIFIED_BLACK : tmp.VERIFIED;
  } else {
    const PARTNERED = tmp2.PARTNERED;
    let tmp9 = null != guild;
    if (tmp9) {
      let hasItem2;
      obj2 = GuildRecordUtils;
      if (obj2.isGuildRecord(guild)) {
        const features6 = guild.features;
        hasItem2 = features6.has(PARTNERED);
      } else {
        const _Array2 = Array;
        if (Array.isArray(guild.features)) {
          const features5 = guild.features;
          hasItem2 = features5.includes(PARTNERED);
        } else {
          const features4 = guild.features;
          let hasItem3;
          const _Boolean2 = Boolean;
          if (features4 != null) {
            hasItem3 = features4.has(PARTNERED);
          }
          hasItem2 = _Boolean2(hasItem3);
        }
      }
      tmp9 = hasItem2;
    }
    if (tmp9) {
      NONE = flag ? tmp.PARTNERED_BLACK : tmp.PARTNERED;
    }
  }
  return obj2[NONE];
}
class GuildBadge {
  constructor(monocolored) {
    let flag = monocolored.monocolored;
    const guild = monocolored.guild;
    if (flag === undefined) {
      flag = false;
    }
    let MEDIUM = monocolored.size;
    if (MEDIUM === undefined) {
      MEDIUM = GuildBadge.Sizes.MEDIUM;
    }
    let tmp2 = null;
    const merged = Object.assign(monocolored, Object.assign({ guild: 0, monocolored: 0, size: 0 }));
    const tmp4 = getGuildBadgeSource(guild, flag);
    if (null != tmp4) {
      const Icon = native.Icon;
      const merged1 = Object.assign(merged);
      tmp2 = <Icon size={MEDIUM} source={tmp4} />;
    }
    return tmp2;
  }
}
const GuildFeatures = Constants.GuildFeatures;
const jsx = Fragment.jsx;
let obj = { PARTNERED: 0, [0]: "PARTNERED", VERIFIED: 1, [1]: "VERIFIED", PARTNERED_BLACK: 2, [2]: "PARTNERED_BLACK", VERIFIED_BLACK: 3, [3]: "VERIFIED_BLACK", NONE: 4, [4]: "NONE" };
let obj2 = { [VERIFIED]: AssetRegistryDefault, [PARTNERED]: AssetRegistryDefault2, [VERIFIED_BLACK]: AssetRegistryDefault3, [PARTNERED_BLACK]: AssetRegistryDefault4, [obj.NONE]: null };
({ VERIFIED, PARTNERED, VERIFIED_BLACK, PARTNERED_BLACK } = obj);
GuildBadge.Sizes = native.Icon.Sizes;
const result = size.fileFinishedImporting("modules/guild/native/GuildBadge.tsx");

export default GuildBadge;
export { getGuildBadgeSource };
