// Module ID: 7881
// Function ID: 7882
// Name: GuildProfileUtils
// Dependencies: [4867, 1072, 4877, 2]
// Exports: getEstablishedDate, guildInviteCanEmbedProfile

// Module 7881 (GuildProfileUtils)
import Constants from "Constants" /* 1072 */;
import ChannelRecord from "ChannelRecord" /* 4867 */;
import GuildRecordUtils from "GuildRecordUtils" /* 4877 */;
import size from "module_2" /* 2 */;

let closure_2 = ChannelRecord.createChannelRecordFromInvite;
const GuildFeatures = Constants.GuildFeatures;
const result = size.fileFinishedImporting("modules/guild_profile/GuildProfileUtils.tsx");

export function getEstablishedDate(tmp2Result4, locale) {
  if (null != tmp2Result4) {
    if ("" !== tmp2Result4) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      const date = new Date(tmp2Result4);
      const _Date2 = Date;
      let toLocaleDateStringResult = null;
      if (date instanceof Date) {
        const _isNaN = isNaN;
        toLocaleDateStringResult = null;
        if (!isNaN(date.getTime())) {
          toLocaleDateStringResult = date.toLocaleDateString(locale, { year: "numeric", month: "short" });
        }
      }
      return toLocaleDateStringResult;
    }
  }
  return null;
}
export function guildInviteCanEmbedProfile(guild) {
  if (null == guild.guild) {
    return false;
  } else {
    const obj = GuildRecordUtils;
    const features = obj.fromInviteGuild(guild.guild).features;
    if (features.has(GuildFeatures.HUB)) {
      return false;
    } else {
      let channel;
      if (guild != null) {
        channel = guild.channel;
      }
      let tmp2 = null;
      if (null != channel) {
        tmp2 = closure_2(guild.channel);
      }
      let isGuildVoiceOrThreadResult;
      if (tmp2 != null) {
        isGuildVoiceOrThreadResult = tmp2.isGuildVoiceOrThread();
      }
      return !isGuildVoiceOrThreadResult;
    }
  }
}
