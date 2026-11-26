// Module ID: 7573
// Function ID: 7574
// Name: getGuildTransitionRoute
// Dependencies: [7574, 4895, 7451, 4892, 4973, 4914, 4946, 7578, 1071, 4899, 7580, 7585, 7588, 4917, 7602, 2]
// Exports: getGuildTransitionRoute

// Module 7573 (getGuildTransitionRoute)
import ChannelConstants from "ChannelConstants" /* 4899 */;
import FavoritesUtils from "FavoritesUtils" /* 4917 */;
import OnboardingHomeUtils from "OnboardingHomeUtils" /* 7580 */;
import canUseGuildSpace from "canUseGuildSpace" /* 7585 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 7588 */;
import ConjureUtils from "ConjureUtils" /* 7602 */;
import ConjureServerProjectRouteStore from "ConjureServerProjectRouteStore" /* 7574 */;
import FavoriteStore from "FavoriteStore" /* 4895 */;
import GuildOnboardingStore from "GuildOnboardingStore" /* 7451 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import GuildChannelStore from "GuildChannelStore" /* 4973 */;
import GuildStore from "GuildStore" /* 4914 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4946 */;
import PrivateChannelSortStore from "PrivateChannelSortStore" /* 7578 */;
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
