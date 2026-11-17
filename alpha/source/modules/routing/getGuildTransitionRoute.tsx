// Module ID: 7240
// Function ID: 7241
// Name: getGuildTransitionRoute
// Dependencies: [7241, 7243, 5162, 7247, 5159, 5240, 5181, 5213, 7248, 1072, 5166, 7087, 7250, 7253, 5184, 7270, 2]
// Exports: getGuildTransitionRoute

// Module 7240 (getGuildTransitionRoute)
import ChannelConstants from "ChannelConstants" /* 5166 */;
import FavoritesUtils from "FavoritesUtils" /* 5184 */;
import OnboardingHomeUtils from "OnboardingHomeUtils" /* 7087 */;
import canUseGuildSpace from "canUseGuildSpace" /* 7250 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 7253 */;
import ConjureUtils from "ConjureUtils" /* 7270 */;
import ConjureBuilderRouteStore from "ConjureBuilderRouteStore" /* 7241 */;
import ConjureServerProjectRouteStore from "ConjureServerProjectRouteStore" /* 7243 */;
import FavoriteStore from "FavoriteStore" /* 5162 */;
import GuildOnboardingStore from "GuildOnboardingStore" /* 7247 */;
import ChannelStore from "ChannelStore" /* 5159 */;
import GuildChannelStore from "GuildChannelStore" /* 5240 */;
import GuildStore from "GuildStore" /* 5181 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5213 */;
import PrivateChannelSortStore from "PrivateChannelSortStore" /* 7248 */;
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
