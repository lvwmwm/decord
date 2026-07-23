// Module ID: 5602
// Function ID: 47594
// Name: getChannelIdForGuildTransition
// Dependencies: [5054, 1348, 1907, 1838, 1906, 5603, 653, 1355, 5607, 5609, 5611, 2]
// Exports: getChannelIdForGuildTransition

// Module 5602 (getChannelIdForGuildTransition)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { ME } from "ME";
import { StaticChannelRoute } from "set";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/routing/getChannelIdForGuildTransition.tsx");

export const getChannelIdForGuildTransition = function getChannelIdForGuildTransition(guildId) {
  channelId = channelId.getChannelId(guildId);
  defaultChannel = defaultChannel.getDefaultChannel(guildId);
  let id;
  if (null != defaultChannel) {
    id = defaultChannel.id;
  }
  if (null == id) {
    let tmp5;
    if (guildId === ME) {
      privateChannelIds = privateChannelIds.getPrivateChannelIds();
      let first;
      if (privateChannelIds.length > 0) {
        first = privateChannelIds[0];
      }
      tmp5 = first;
    }
    id = tmp5;
  }
  if (channelId === StaticChannelRoute.GUILD_ONBOARDING) {
    if (!_isNativeReflectConstruct.shouldShowOnboarding(guildId)) {
      return id;
    }
  }
  if (channelId === StaticChannelRoute.GUILD_HOME) {
    if (!obj.canSeeOnboardingHome(guildId)) {
      return id;
    }
    obj = require(5607) /* canSeeOnboardingHomeInPreview */;
  }
  if (channelId === StaticChannelRoute.GUILD_SPACE) {
    if (obj4.canUseGuildSpace(guild.getGuild(guildId), "getChannelIdForGuildTransition")) {
      id = channelId;
    }
    return id;
  } else {
    if (channelId === StaticChannelRoute.GAME_SHOP) {
      if (obj2.canSeeGameShop(guildId)) {
        return channelId;
      }
      obj2 = require(5611) /* _createForOfIteratorHelperLoose */;
    }
    channel = channel.getChannel(channelId);
    if (null == channel) {
      let tmp15 = id;
    } else {
      tmp15 = channelId;
    }
    return tmp15;
  }
};
