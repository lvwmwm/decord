// Module ID: 6979
// Function ID: 55793
// Name: getEstablishedDate
// Dependencies: [1352, 653, 1387, 2]
// Exports: getEstablishedDate, guildInviteCanEmbedProfile

// Module 6979 (getEstablishedDate)
import { createChannelRecordFromInvite as closure_2 } from "_callSuper";
import { GuildFeatures } from "ME";

const result = require("fromGuildPropertiesWithAdditionalFields").fileFinishedImporting("modules/guild_profile/GuildProfileUtils.tsx");

export const getEstablishedDate = function getEstablishedDate(arg0, locale) {
  if (null != arg0) {
    if ("" !== arg0) {
      const _Date = Date;
      const date = new Date(arg0);
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
};
export const guildInviteCanEmbedProfile = function guildInviteCanEmbedProfile(guild) {
  if (null == guild.guild) {
    return false;
  } else {
    const features = require(1387) /* fromGuildPropertiesWithAdditionalFields */.fromInviteGuild(guild.guild).features;
    if (features.has(GuildFeatures.HUB)) {
      return false;
    } else {
      let channel;
      if (null != guild) {
        channel = guild.channel;
      }
      let tmp2 = null;
      if (null != channel) {
        tmp2 = callback(guild.channel);
      }
      return null == tmp2 || !tmp2.isGuildVoiceOrThread();
    }
    const obj = require(1387) /* fromGuildPropertiesWithAdditionalFields */;
  }
};
