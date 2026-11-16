// Module ID: 7485
// Function ID: 7486
// Name: getGuildTransitionRoute
// Dependencies: [7486, 7488, 5022, 7360, 5019, 5100, 5041, 5073, 7492, 1072, 5026, 7494, 7499, 7501, 5044, 7516, 2]
// Exports: getGuildTransitionRoute

// Module 7485 (getGuildTransitionRoute)
import ChannelConstants from "ChannelConstants" /* 5026 */;
import FavoritesUtils from "FavoritesUtils" /* 5044 */;
import OnboardingHomeUtils from "OnboardingHomeUtils" /* 7494 */;
import canUseGuildSpace from "canUseGuildSpace" /* 7499 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 7501 */;
import ConjureUtils from "ConjureUtils" /* 7516 */;
import ConjureBuilderRouteStore from "ConjureBuilderRouteStore" /* 7486 */;
import ConjureServerProjectRouteStore from "ConjureServerProjectRouteStore" /* 7488 */;
import FavoriteStore from "FavoriteStore" /* 5022 */;
import GuildOnboardingStore from "GuildOnboardingStore" /* 7360 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import GuildChannelStore from "GuildChannelStore" /* 5100 */;
import GuildStore from "GuildStore" /* 5041 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5073 */;
import PrivateChannelSortStore from "PrivateChannelSortStore" /* 7492 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let closure_12;
let unpackModuleId;
({ ME: unpackModuleId, WATERWHEELS: closure_12 } = Constants);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/routing/getGuildTransitionRoute.tsx");

export function getGuildTransitionRoute(id) {
  if (id === authStore2) {
    return [null, null];
  } else {
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
      let tmp12;
      if (id === unpackModuleId) {
        const privateChannelIds = PrivateChannelSortStore.getPrivateChannelIds();
        let first;
        if (privateChannelIds.length > 0) {
          first = privateChannelIds[0];
        }
        tmp12 = first;
      }
      id = tmp12;
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
      let tmp35;
      const items3 = [, ];
      const obj7 = canUseGuildSpace;
      if (obj7.canUseGuildSpace(GuildStore.getGuild(id), "getChannelIdForGuildTransition")) {
        items3[0] = channelId;
        items3[1] = null;
        tmp35 = items3;
      } else {
        items3[0] = id;
        items3[1] = null;
        tmp35 = items3;
      }
      return tmp35;
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
}
