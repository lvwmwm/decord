// Module ID: 6974
// Function ID: 55727
// Name: getEstablishedDate
// Dependencies: []
// Exports: getEstablishedDate, guildInviteCanEmbedProfile

// Module 6974 (getEstablishedDate)
let closure_2 = require(dependencyMap[0]).createChannelRecordFromInvite;
const GuildFeatures = require(dependencyMap[1]).GuildFeatures;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/guild_profile/GuildProfileUtils.tsx");

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
          toLocaleDateStringResult = date.toLocaleDateString(locale, {});
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
    const features = require(dependencyMap[2]).fromInviteGuild(guild.guild).features;
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
    const obj = require(dependencyMap[2]);
  }
};
