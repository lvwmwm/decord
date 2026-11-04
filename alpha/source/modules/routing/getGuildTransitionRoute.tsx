// Module ID: 7528
// Function ID: 7529
// Name: getGuildTransitionRoute
// Dependencies: [7529, 7531, 4993, 7400, 4990, 5071, 5012, 5044, 7535, 1072, 4997, 7537, 7542, 7544, 5015, 7559, 2]
// Exports: getGuildTransitionRoute

// Module 7528 (getGuildTransitionRoute)
import Constants from "Constants" /* 1072 */;
import ChannelConstants from "ChannelConstants" /* 4997 */;
import FavoritesUtils from "FavoritesUtils" /* 5015 */;
import OnboardingHomeUtils from "OnboardingHomeUtils" /* 7537 */;
import canUseGuildSpace from "canUseGuildSpace" /* 7542 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 7544 */;
import ConjureUtils from "ConjureUtils" /* 7559 */;
import ConjureBuilderRouteStore from "ConjureBuilderRouteStore" /* 7529 */;
import ConjureServerProjectRouteStore from "ConjureServerProjectRouteStore" /* 7531 */;
import FavoriteStore from "FavoriteStore" /* 4993 */;
import GuildOnboardingStore from "GuildOnboardingStore" /* 7400 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import GuildChannelStore from "GuildChannelStore" /* 5071 */;
import GuildStore from "GuildStore" /* 5012 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5044 */;
import PrivateChannelSortStore from "PrivateChannelSortStore" /* 7535 */;
import size from "module_2" /* 2 */;

const ME = Constants.ME;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/routing/getGuildTransitionRoute.tsx");

export function getGuildTransitionRoute(id) {
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
    let tmp34;
    const items3 = [, ];
    const obj7 = canUseGuildSpace;
    if (obj7.canUseGuildSpace(GuildStore.getGuild(id), "getChannelIdForGuildTransition")) {
      items3[0] = channelId;
      items3[1] = null;
      tmp34 = items3;
    } else {
      items3[0] = id;
      items3[1] = null;
      tmp34 = items3;
    }
    return tmp34;
  } else {
    if (channelId === StaticChannelRoute.GAME_SHOP) {
      const obj3 = SlayerStorefrontUtils;
      if (obj3.canSeeGameShop(id)) {
        const items4 = [channelId, null];
        return items4;
      }
    }
    if (channelId !== StaticChannelRoute.CONJURE) {
      if (channelId !== StaticChannelRoute.CONJURE_PROJECT) {
        const channel = ChannelStore.getChannel(channelId);
        if (null != channel) {
          let items5;
          if (!channel.isGuildVocal()) {
            FavoritesUtils;
            items5 = [channelId, null];
          }
          return items5;
        }
        const items6 = [id, null];
        items5 = items6;
      }
    }
    const guild1 = GuildStore.getGuild(id);
    let canAccessConjureResult1 = null != guild1;
    if (canAccessConjureResult1) {
      const obj6 = ConjureUtils;
      canAccessConjureResult1 = obj6.canAccessConjure(guild1, "getChannelIdForGuildTransition");
    }
    if (canAccessConjureResult1) {
      let items8;
      let returnProjectId = null;
      if (channelId === StaticChannelRoute.CONJURE_PROJECT) {
        returnProjectId = ConjureServerProjectRouteStore.getReturnProjectId(id);
      }
      if (null != returnProjectId) {
        const items7 = [StaticChannelRoute.CONJURE_PROJECT, returnProjectId];
        items8 = items7;
      } else {
        items8 = [StaticChannelRoute.CONJURE, null];
      }
      return items8;
    } else {
      const items9 = [id, null];
      return items9;
    }
  }
}
