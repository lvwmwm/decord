// Module ID: 6921
// Function ID: 6922
// Name: getGuildTransitionRoute
// Dependencies: [6922, 2068, 6785, 2065, 4748, 2087, 2116, 6923, 1085, 2072, 6925, 6929, 6931, 2090, 6946, 2]
// Exports: getGuildTransitionRoute

// Module 6921 (getGuildTransitionRoute)
import Constants from "Constants" /* 1085 */;
import ChannelConstants from "ChannelConstants" /* 2072 */;
import FavoritesUtils from "FavoritesUtils" /* 2090 */;
import OnboardingHomeUtils from "OnboardingHomeUtils" /* 6925 */;
import canUseGuildSpace from "canUseGuildSpace" /* 6929 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 6931 */;
import ConjureUtils from "ConjureUtils" /* 6946 */;
import ConjureBuilderRouteStore from "ConjureBuilderRouteStore" /* 6922 */;
import FavoriteStore from "FavoriteStore" /* 2068 */;
import GuildOnboardingStore from "GuildOnboardingStore" /* 6785 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import GuildChannelStore from "GuildChannelStore" /* 4748 */;
import GuildStore from "GuildStore" /* 2087 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2116 */;
import PrivateChannelSortStore from "PrivateChannelSortStore" /* 6923 */;
import size from "module_2" /* 2 */;

const ME = Constants.ME;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/routing/getGuildTransitionRoute.tsx");

export const getGuildTransitionRoute = function getGuildTransitionRoute(id) {
  const lastProjectId = ConjureBuilderRouteStore.getLastProjectId(id);
  if (null != lastProjectId) {
    const guild = GuildStore.getGuild(id);
    let canAccessConjureResult = null != guild;
    if (canAccessConjureResult) {
      const obj = ConjureUtils;
      canAccessConjureResult = obj.canAccessConjure(guild, "getChannelIdForGuildTransition");
    }
    if (canAccessConjureResult) {
      const items = [StaticChannelRoute.CONJURE, lastProjectId];
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
    if (channelId === StaticChannelRoute.CONJURE) {
      let tmp29;
      const guild1 = GuildStore.getGuild(id);
      let canAccessConjureResult1 = null != guild1;
      if (canAccessConjureResult1) {
        const obj6 = ConjureUtils;
        canAccessConjureResult1 = obj6.canAccessConjure(guild1, "getChannelIdForGuildTransition");
      }
      const items5 = [, ];
      if (canAccessConjureResult1) {
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
