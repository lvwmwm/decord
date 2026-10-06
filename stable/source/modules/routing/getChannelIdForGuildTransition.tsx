// Module ID: 6639
// Function ID: 6640
// Name: getChannelIdForGuildTransition
// Dependencies: [2054, 6518, 2051, 4470, 2073, 2102, 6640, 1086, 2058, 6644, 6646, 6648, 5371, 2076, 2]
// Exports: getChannelIdForGuildTransition

// Module 6639 (getChannelIdForGuildTransition)
import Constants from "Constants" /* 1086 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import FavoritesUtils from "FavoritesUtils" /* 2076 */;
import VibegrationsUtils from "VibegrationsUtils" /* 5371 */;
import OnboardingHomeUtils from "OnboardingHomeUtils" /* 6644 */;
import canUseGuildSpace from "canUseGuildSpace" /* 6646 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 6648 */;
import FavoriteStore from "FavoriteStore" /* 2054 */;
import GuildOnboardingStore from "GuildOnboardingStore" /* 6518 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildChannelStore from "GuildChannelStore" /* 4470 */;
import GuildStore from "GuildStore" /* 2073 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2102 */;
import PrivateChannelSortStore from "PrivateChannelSortStore" /* 6640 */;
import size from "module_2" /* 2 */;

const ME = Constants.ME;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/routing/getChannelIdForGuildTransition.tsx");

export const getChannelIdForGuildTransition = function getChannelIdForGuildTransition(id) {
  const channelId = SelectedChannelStore.getChannelId(id);
  const defaultChannel = GuildChannelStore.getDefaultChannel(id);
  id = undefined;
  if (defaultChannel != null) {
    id = defaultChannel.id;
  }
  if (id == null) {
    let tmp5;
    if (id === ME) {
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
    if (!GuildOnboardingStore.shouldShowOnboarding(id)) {
      return id;
    }
  }
  if (channelId === StaticChannelRoute.GUILD_HOME) {
    const obj = OnboardingHomeUtils;
    if (!obj.canSeeOnboardingHome(id)) {
      return id;
    }
  }
  if (channelId === StaticChannelRoute.GUILD_SPACE) {
    const obj6 = canUseGuildSpace;
    if (obj6.canUseGuildSpace(GuildStore.getGuild(id), "getChannelIdForGuildTransition")) {
      id = channelId;
    }
    return id;
  } else {
    if (channelId === StaticChannelRoute.GAME_SHOP) {
      const obj2 = SlayerStorefrontUtils;
      if (obj2.canSeeGameShop(id)) {
        return channelId;
      }
    }
    if (channelId === StaticChannelRoute.VIBEGRATIONS) {
      const guild = GuildStore.getGuild(id);
      let tmp21 = id;
      if (null != guild) {
        tmp21 = id;
        const obj5 = VibegrationsUtils;
        if (obj5.canAccessVibegrations(guild, "getChannelIdForGuildTransition")) {
          tmp21 = channelId;
        }
      }
      return tmp21;
    } else {
      const channel = ChannelStore.getChannel(channelId);
      if (null != channel) {
        let tmp17;
        if (!channel.isGuildVocal()) {
          tmp17 = channelId;
          const obj4 = FavoritesUtils;
          if (obj4.isFavoritesGuildId(id)) {
            tmp17 = channelId;
          }
        }
        return tmp17;
      }
      tmp17 = id;
    }
  }
};
