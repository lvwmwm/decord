// Module ID: 7197
// Function ID: 7198
// Name: getChannelIdForGuildTransition
// Dependencies: [1394, 6784, 1391, 1980, 1910, 1979, 5388, 676, 1398, 5283, 7198, 7200, 1913, 2]
// Exports: getChannelIdForGuildTransition

// Module 7197 (getChannelIdForGuildTransition)
import initializeFromUserSettings from "initializeFromUserSettings";
import shouldShowOnboarding from "shouldShowOnboarding";
import ensureGuildLoaded from "ensureGuildLoaded";
import comparator from "comparator";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import handleConnectionOpen from "handleConnectionOpen";
import makeSortedChannel from "makeSortedChannel";
import { ME } from "ME";
import { StaticChannelRoute } from "set";

const require = arg1;
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/routing/getChannelIdForGuildTransition.tsx");

export const getChannelIdForGuildTransition = function getChannelIdForGuildTransition(guildId) {
  channelId = channelId.getChannelId(guildId);
  defaultChannel = defaultChannel.getDefaultChannel(guildId);
  let id;
  if (defaultChannel != null) {
    id = defaultChannel.id;
  }
  if (id == null) {
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
    if (!shouldShowOnboarding.shouldShowOnboarding(guildId)) {
      return id;
    }
  }
  if (channelId === StaticChannelRoute.GUILD_HOME) {
    if (!obj.canSeeOnboardingHome(guildId)) {
      return id;
    }
    obj = require(5283) /* useCanSeeOnboardingHome */;
  }
  if (channelId === StaticChannelRoute.GUILD_SPACE) {
    if (obj5.canUseGuildSpace(guild.getGuild(guildId), "getChannelIdForGuildTransition")) {
      id = channelId;
    }
    return id;
  } else {
    if (channelId === tmp8.GAME_SHOP) {
      if (obj2.canSeeGameShop(guildId)) {
        return channelId;
      }
      obj2 = require(7200) /* getPrice */;
    }
    channel = channel.getChannel(channelId);
    if (null != channel) {
      if (!channel.isGuildVocal()) {
        let tmp17 = channelId;
        if (obj4.isFavoritesGuildId(guildId)) {
          tmp17 = channelId;
        }
        obj4 = require(1913) /* getFavoritesAwareGuildName */;
      }
      return tmp17;
    }
    tmp17 = id;
  }
};
