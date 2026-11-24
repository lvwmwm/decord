// Module ID: 7447
// Function ID: 7448
// Name: getGuildTransitionRoute
// Dependencies: [7448, 4769, 7325, 4766, 4847, 4788, 4820, 7452, 1071, 4773, 7454, 7459, 7462, 4791, 7476, 2]
// Exports: getGuildTransitionRoute

// Module 7447 (getGuildTransitionRoute)
import ChannelConstants from "ChannelConstants" /* 4773 */;
import FavoritesUtils from "FavoritesUtils" /* 4791 */;
import OnboardingHomeUtils from "OnboardingHomeUtils" /* 7454 */;
import canUseGuildSpace from "canUseGuildSpace" /* 7459 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 7462 */;
import ConjureUtils from "ConjureUtils" /* 7476 */;
import ConjureServerProjectRouteStore from "ConjureServerProjectRouteStore" /* 7448 */;
import FavoriteStore from "FavoriteStore" /* 4769 */;
import GuildOnboardingStore from "GuildOnboardingStore" /* 7325 */;
import ChannelStore from "ChannelStore" /* 4766 */;
import GuildChannelStore from "GuildChannelStore" /* 4847 */;
import GuildStore from "GuildStore" /* 4788 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4820 */;
import PrivateChannelSortStore from "PrivateChannelSortStore" /* 7452 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

let c10;
let unpackModuleId;
({ ME: c10, WATERWHEELS: unpackModuleId } = Constants);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const CONJURE_PROJECT = StaticChannelRoute.CONJURE_PROJECT;
const result = size.fileFinishedImporting("modules/routing/getGuildTransitionRoute.tsx");

export function getGuildTransitionRoute(id) {
  if (id === unpackModuleId) {
    return [null, null];
  } else {
    const channelId = SelectedChannelStore.getChannelId(id);
    const defaultChannel = GuildChannelStore.getDefaultChannel(id);
    id = undefined;
    if (defaultChannel != null) {
      id = defaultChannel.id;
    }
    if (id == null) {
      let tmp3;
      if (id === authStore) {
        const privateChannelIds = PrivateChannelSortStore.getPrivateChannelIds();
        let first;
        if (privateChannelIds.length > 0) {
          first = privateChannelIds[0];
        }
        tmp3 = first;
      }
      id = tmp3;
    }
    if (channelId === StaticChannelRoute.GUILD_ONBOARDING) {
      if (!GuildOnboardingStore.shouldShowOnboarding(id)) {
        const items = [id, null];
        return items;
      }
    }
    if (channelId === StaticChannelRoute.GUILD_HOME) {
      const obj = OnboardingHomeUtils;
      if (!obj.canSeeOnboardingHome(id)) {
        const items1 = [id, null];
        return items1;
      }
    }
    if (channelId === StaticChannelRoute.GUILD_SPACE) {
      let tmp27;
      const items2 = [, ];
      const obj6 = canUseGuildSpace;
      if (obj6.canUseGuildSpace(GuildStore.getGuild(id), "getChannelIdForGuildTransition")) {
        items2[0] = channelId;
        items2[1] = null;
        tmp27 = items2;
      } else {
        items2[0] = id;
        items2[1] = null;
        tmp27 = items2;
      }
      return tmp27;
    } else {
      if (channelId === StaticChannelRoute.GAME_SHOP) {
        const obj2 = SlayerStorefrontUtils;
        if (obj2.canSeeGameShop(id)) {
          const items3 = [channelId, null];
          return items3;
        }
      }
      if (channelId !== StaticChannelRoute.CONJURE) {
        if (channelId !== StaticChannelRoute.CONJURE_PROJECT) {
          const channel = ChannelStore.getChannel(channelId);
          if (null != channel) {
            let items4;
            if (!channel.isGuildVocal()) {
              FavoritesUtils;
              items4 = [channelId, null];
            }
            return items4;
          }
          const items5 = [id, null];
          items4 = items5;
        }
      }
      const guild = GuildStore.getGuild(id);
      let canAccessConjureResult = null != guild;
      if (canAccessConjureResult) {
        const obj5 = ConjureUtils;
        canAccessConjureResult = obj5.canAccessConjure(guild, "getChannelIdForGuildTransition");
      }
      if (canAccessConjureResult) {
        let items7;
        let returnProjectId = null;
        if (channelId === StaticChannelRoute.CONJURE_PROJECT) {
          returnProjectId = ConjureServerProjectRouteStore.getReturnProjectId(id);
        }
        if (null != returnProjectId) {
          const items6 = [StaticChannelRoute.CONJURE_PROJECT, returnProjectId];
          items7 = items6;
        } else {
          items7 = [CONJURE_PROJECT, null];
        }
        return items7;
      } else {
        const items8 = [id, null];
        return items8;
      }
    }
  }
}
