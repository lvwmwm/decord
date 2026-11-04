// Module ID: 9053
// Function ID: 9054
// Name: PinotEligibility
// Dependencies: [9036, 1072, 9054, 1093, 4951, 2]
// Exports: everyoneHasAccess, getPinotIneligibleReason, isChannelPinotPromotable, isPinotFeatureEnabled

// Module 9053 (PinotEligibility)
import Constants from "Constants" /* 1072 */;
import ChannelTypes from "ChannelTypes" /* 1093 */;
import PermissionUtilsAll from "PermissionUtils" /* 4951 */;
import PinotTypes from "PinotTypes" /* 9054 */;
import PinotConstants from "PinotConstants" /* 9036 */;
import size from "module_2" /* 2 */;

let PinotChannelFlags;
let PinotGuildFeatures;
function isChannelPinotPromotableForFeature(id, guild_id, guildFeature) {
  let tmp = guild_id.guild_id === id.id;
  if (tmp) {
    const features = id.features;
    let tmp3 = !features.has(guildFeature.guildFeature);
    if (tmp3) {
      let str = "channel_type";
      if (set.has(guild_id.type)) {
        let str2 = "nsfw";
        if (!guild_id.isNSFW()) {
          const obj = PermissionUtilsAll;
          let canEveryoneRoleResult = obj.canEveryoneRole(Permissions.VIEW_CHANNEL, guild_id);
          const tmp5 = importAll;
          const tmp7 = Permissions;
          if (canEveryoneRoleResult) {
            const tmp5Result = tmp5(4951);
            canEveryoneRoleResult = tmp5Result.canEveryoneRole(tmp7.READ_MESSAGE_HISTORY, guild_id);
          }
          let tmp9 = "not_public";
          if (canEveryoneRoleResult) {
            tmp9 = null;
          }
          str2 = tmp9;
        }
        str = str2;
      }
      tmp3 = null == str && !guild_id.hasFlag(guildFeature.channelFlag);
      null == str && !guild_id.hasFlag(guildFeature.channelFlag);
    }
    tmp = tmp3;
  }
  return tmp;
}
({ PinotChannelFlags, PinotGuildFeatures } = PinotConstants);
const Permissions = Constants.Permissions;
let obj = {};
const obj2 = { key: PinotTypes.PinotFeatureKey.CHANNEL_SUMMARIES, guildFeature: PinotGuildFeatures.SWP_CHANNEL_SUMMARIES_DISABLED, channelFlag: PinotChannelFlags.SWP_CHANNEL_SUMMARIES_EXCLUDED };
const CHANNEL_SUMMARIES = PinotTypes.PinotFeatureKey.CHANNEL_SUMMARIES;
obj[CHANNEL_SUMMARIES] = obj2;
const obj3 = { key: PinotTypes.PinotFeatureKey.CHANNEL_MESSAGES, guildFeature: PinotGuildFeatures.SWP_CHANNEL_MESSAGES_DISABLED, channelFlag: PinotChannelFlags.SWP_CHANNEL_MESSAGES_EXCLUDED };
const CHANNEL_MESSAGES = PinotTypes.PinotFeatureKey.CHANNEL_MESSAGES;
obj[CHANNEL_MESSAGES] = obj3;
const freezeResult = freeze(obj);
let c3 = freezeResult;
const items = [ChannelTypes.ChannelTypes.GUILD_TEXT, ChannelTypes.ChannelTypes.GUILD_ANNOUNCEMENT, ChannelTypes.ChannelTypes.GUILD_FORUM];
const set = new Set(items);
const result = size.fileFinishedImporting("modules/pinot/PinotEligibility.tsx");

export const PINOT_FEATURES = freezeResult;
export const PINOT_CHANNEL_TYPES = set;
export function getPinotIneligibleReason(type) {
  let str = "channel_type";
  if (set.has(type.type)) {
    let str2 = "nsfw";
    if (!type.isNSFW()) {
      const obj = PermissionUtilsAll;
      let canEveryoneRoleResult = obj.canEveryoneRole(Permissions.VIEW_CHANNEL, type);
      const tmp = importAll;
      const tmp3 = Permissions;
      if (canEveryoneRoleResult) {
        const tmpResult = tmp(4951);
        canEveryoneRoleResult = tmpResult.canEveryoneRole(tmp3.READ_MESSAGE_HISTORY, type);
      }
      let tmp5 = "not_public";
      if (canEveryoneRoleResult) {
        tmp5 = null;
      }
      str2 = tmp5;
    }
    str = str2;
  }
  return str;
}
export function everyoneHasAccess(channel) {
  const obj = PermissionUtilsAll;
  let canEveryoneRoleResult = obj.canEveryoneRole(Permissions.VIEW_CHANNEL, channel);
  const tmp3 = Permissions;
  if (canEveryoneRoleResult) {
    const tmpResult = PermissionUtilsAll;
    canEveryoneRoleResult = tmpResult.canEveryoneRole(tmp3.READ_MESSAGE_HISTORY, channel);
  }
  return canEveryoneRoleResult;
}
export function isPinotFeatureEnabled(guild, guildFeature) {
  const features = guild.features;
  return !features.has(guildFeature.guildFeature);
}
export { isChannelPinotPromotableForFeature };
export function isChannelPinotPromotable(guild, channel) {
  let closure_0 = guild;
  let closure_1 = channel;
  let someResult = null != guild && null != channel;
  if (someResult) {
    const _Object = Object;
    const values = Object.values(closure_3);
    someResult = values.some((item) => isChannelPinotPromotableForFeature(guild, channel, item));
  }
  return someResult;
}
