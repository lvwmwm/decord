// Module ID: 7542
// Function ID: 7543
// Name: getGuildTransitionRoute
// Dependencies: [7543, 4864, 7420, 4861, 4942, 4883, 4915, 7547, 1071, 4868, 7549, 7554, 7557, 4886, 7571, 2]
// Exports: getGuildTransitionRoute

// Module 7542 (getGuildTransitionRoute)
import ChannelConstants from "ChannelConstants" /* 4868 */;
import FavoritesUtils from "FavoritesUtils" /* 4886 */;
import OnboardingHomeUtils from "OnboardingHomeUtils" /* 7549 */;
import canUseGuildSpace from "canUseGuildSpace" /* 7554 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 7557 */;
import ConjureUtils from "ConjureUtils" /* 7571 */;
import ConjureServerProjectRouteStore from "ConjureServerProjectRouteStore" /* 7543 */;
import FavoriteStore from "FavoriteStore" /* 4864 */;
import GuildOnboardingStore from "GuildOnboardingStore" /* 7420 */;
import ChannelStore from "ChannelStore" /* 4861 */;
import GuildChannelStore from "GuildChannelStore" /* 4942 */;
import GuildStore from "GuildStore" /* 4883 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4915 */;
import PrivateChannelSortStore from "PrivateChannelSortStore" /* 7547 */;
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
