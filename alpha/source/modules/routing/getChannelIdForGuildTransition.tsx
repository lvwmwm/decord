// Module ID: 6834
// Function ID: 6835
// Name: getChannelIdForGuildTransition
// Dependencies: [2048, 6713, 2045, 4497, 2067, 2099, 6835, 1074, 2052, 6839, 6841, 6843, 5566, 2070, 2]
// Exports: getChannelIdForGuildTransition

// Module 6834 (getChannelIdForGuildTransition)
import FavoritesUtils from "FavoritesUtils" /* 2070 */;
import VibegrationsUtils from "VibegrationsUtils" /* 5566 */;
import OnboardingHomeUtils from "OnboardingHomeUtils" /* 6839 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 6843 */;
import FavoriteStore from "FavoriteStore" /* 2048 */;
import GuildOnboardingStore from "GuildOnboardingStore" /* 6713 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildChannelStore from "GuildChannelStore" /* 4497 */;
import GuildStore from "GuildStore" /* 2067 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import PrivateChannelSortStore from "PrivateChannelSortStore" /* 6835 */;

require = fn;
const ME = fn(1074).ME;
const StaticChannelRoute = fn(2052).StaticChannelRoute;
const size = fn(2);
const result = size.fileFinishedImporting("modules/routing/getChannelIdForGuildTransition.tsx");

export const getChannelIdForGuildTransition = function getChannelIdForGuildTransition(guildId) {
  const channelId = SelectedChannelStore.getChannelId(guildId);
  const defaultChannel = GuildChannelStore.getDefaultChannel(guildId);
  let id;
  if (defaultChannel != null) {
    id = defaultChannel.id;
  }
  if (id == null) {
    let tmp5;
    if (guildId === ME) {
      const privateChannelIds = PrivateChannelSortStore.getPrivateChannelIds();
      let first;
      if (privateChannelIds.length > 0) {
        first = privateChannelIds[0];
      }
      tmp5 = first;
    }
    id = tmp5;
  }
  if (channelId === StaticChannelRoute.GUILD_ONBOARDING) {
    if (!GuildOnboardingStore.shouldShowOnboarding(guildId)) {
      return id;
    }
  }
  if (channelId === StaticChannelRoute.GUILD_HOME) {
    if (!obj.canSeeOnboardingHome(guildId)) {
      return id;
    }
    obj = OnboardingHomeUtils;
  }
  if (channelId === StaticChannelRoute.GUILD_SPACE) {
    if (obj6.canUseGuildSpace(GuildStore.getGuild(guildId), "getChannelIdForGuildTransition")) {
      id = channelId;
    }
    return id;
  } else {
    if (channelId === tmp8.GAME_SHOP) {
      if (obj2.canSeeGameShop(guildId)) {
        return channelId;
      }
      obj2 = SlayerStorefrontUtils;
    }
    if (channelId === tmp8.VIBEGRATIONS) {
      const guild = GuildStore.getGuild(guildId);
      let tmp21 = id;
      if (null != guild) {
        tmp21 = id;
        if (obj5.canAccessVibegrations(guild, "getChannelIdForGuildTransition")) {
          tmp21 = channelId;
        }
        obj5 = VibegrationsUtils;
      }
      return tmp21;
    } else {
      const channel = ChannelStore.getChannel(channelId);
      if (null != channel) {
        if (!channel.isGuildVocal()) {
          let tmp17 = channelId;
          if (obj4.isFavoritesGuildId(guildId)) {
            tmp17 = channelId;
          }
          obj4 = FavoritesUtils;
        }
        return tmp17;
      }
      tmp17 = id;
    }
  }
};
