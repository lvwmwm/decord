// Module ID: 6638
// Function ID: 6639
// Name: getChannelIdForGuildTransition
// Dependencies: [2048, 6517, 2045, 4467, 2067, 2099, 6639, 1074, 2052, 6643, 6645, 6647, 5370, 2070, 2]
// Exports: getChannelIdForGuildTransition

// Module 6638 (getChannelIdForGuildTransition)
import Constants from "Constants" /* 1074 */;
import ChannelConstants from "ChannelConstants" /* 2052 */;
import FavoritesUtils from "FavoritesUtils" /* 2070 */;
import VibegrationsUtils from "VibegrationsUtils" /* 5370 */;
import OnboardingHomeUtils from "OnboardingHomeUtils" /* 6643 */;
import canUseGuildSpace from "canUseGuildSpace" /* 6645 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 6647 */;
import FavoriteStore from "FavoriteStore" /* 2048 */;
import GuildOnboardingStore from "GuildOnboardingStore" /* 6517 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildChannelStore from "GuildChannelStore" /* 4467 */;
import GuildStore from "GuildStore" /* 2067 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import PrivateChannelSortStore from "PrivateChannelSortStore" /* 6639 */;
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
