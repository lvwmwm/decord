// Module ID: 6717
// Function ID: 6718
// Name: getGuildTransitionRoute
// Dependencies: [2054, 6591, 6718, 2051, 4507, 2074, 2103, 6719, 1085, 2058, 6723, 6725, 6727, 2077, 6746, 2]
// Exports: getGuildTransitionRoute

// Module 6717 (getGuildTransitionRoute)
import Constants from "Constants" /* 1085 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import FavoritesUtils from "FavoritesUtils" /* 2077 */;
import OnboardingHomeUtils from "OnboardingHomeUtils" /* 6723 */;
import canUseGuildSpace from "canUseGuildSpace" /* 6725 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 6727 */;
import VibegrationsUtils from "VibegrationsUtils" /* 6746 */;
import FavoriteStore from "FavoriteStore" /* 2054 */;
import GuildOnboardingStore from "GuildOnboardingStore" /* 6591 */;
import VibegrationsBuilderRouteStore from "VibegrationsBuilderRouteStore" /* 6718 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildChannelStore from "GuildChannelStore" /* 4507 */;
import GuildStore from "GuildStore" /* 2074 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import PrivateChannelSortStore from "PrivateChannelSortStore" /* 6719 */;
import size from "module_2" /* 2 */;

const ME = Constants.ME;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
let result = size.fileFinishedImporting("modules/routing/getGuildTransitionRoute.tsx");

export const getGuildTransitionRoute = function getGuildTransitionRoute(id) {
  const lastProjectId = VibegrationsBuilderRouteStore.getLastProjectId(id);
  if (null != lastProjectId) {
    const guild = GuildStore.getGuild(id);
    let result = null != guild;
    if (result) {
      const obj = VibegrationsUtils;
      result = obj.canAccessVibegrations(guild, "getChannelIdForGuildTransition");
    }
    if (result) {
      const items = [StaticChannelRoute.VIBEGRATIONS, lastProjectId];
      return items;
    }
  }
  const channelId = SelectedChannelStore.getChannelId(id);
  const defaultChannel = GuildChannelStore.getDefaultChannel(id);
  id = undefined;
  if (defaultChannel != null) {
    id = defaultChannel.id;
  }
  if (id == null) {
    let tmp11;
    if (id === ME) {
      const privateChannelIds = PrivateChannelSortStore.getPrivateChannelIds();
      let first;
      if (privateChannelIds.length > 0) {
        first = privateChannelIds[0];
      }
      tmp11 = first;
    }
    id = tmp11;
  }
  if (channelId === StaticChannelRoute.GUILD_ONBOARDING) {
    if (!GuildOnboardingStore.shouldShowOnboarding(id)) {
      const items1 = [id, null];
      return items1;
    }
  }
  if (channelId === StaticChannelRoute.GUILD_HOME) {
    const obj2 = OnboardingHomeUtils;
    if (!obj2.canSeeOnboardingHome(id)) {
      const items2 = [id, null];
      return items2;
    }
  }
  if (channelId === StaticChannelRoute.GUILD_SPACE) {
    let tmp33;
    const items3 = [, ];
    const obj7 = canUseGuildSpace;
    if (obj7.canUseGuildSpace(GuildStore.getGuild(id), "getChannelIdForGuildTransition")) {
      items3[0] = channelId;
      items3[1] = null;
      tmp33 = items3;
    } else {
      items3[0] = id;
      items3[1] = null;
      tmp33 = items3;
    }
    return tmp33;
  } else {
    if (channelId === StaticChannelRoute.GAME_SHOP) {
      const obj3 = SlayerStorefrontUtils;
      if (obj3.canSeeGameShop(id)) {
        const items4 = [channelId, null];
        return items4;
      }
    }
    if (channelId === StaticChannelRoute.VIBEGRATIONS) {
      let tmp29;
      const guild1 = GuildStore.getGuild(id);
      let result1 = null != guild1;
      if (result1) {
        const obj6 = VibegrationsUtils;
        result1 = obj6.canAccessVibegrations(guild1, "getChannelIdForGuildTransition");
      }
      const items5 = [, ];
      if (result1) {
        items5[0] = channelId;
        items5[1] = null;
        tmp29 = items5;
      } else {
        items5[0] = id;
        items5[1] = null;
        tmp29 = items5;
      }
      return tmp29;
    } else {
      const channel = ChannelStore.getChannel(channelId);
      if (null != channel) {
        let items6;
        if (!channel.isGuildVocal()) {
          FavoritesUtils;
          items6 = [channelId, null];
        }
        return items6;
      }
      const items7 = [id, null];
      items6 = items7;
    }
  }
};
