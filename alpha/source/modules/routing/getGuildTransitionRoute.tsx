// Module ID: 7379
// Function ID: 7380
// Name: getGuildTransitionRoute
// Dependencies: [7380, 4860, 7251, 4857, 4935, 4879, 4908, 7382, 1084, 4864, 7384, 7388, 7390, 4882, 7405, 2]
// Exports: getGuildTransitionRoute

// Module 7379 (getGuildTransitionRoute)
import Constants from "Constants" /* 1084 */;
import ChannelConstants from "ChannelConstants" /* 4864 */;
import FavoritesUtils from "FavoritesUtils" /* 4882 */;
import OnboardingHomeUtils from "OnboardingHomeUtils" /* 7384 */;
import canUseGuildSpace from "canUseGuildSpace" /* 7388 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 7390 */;
import ConjureUtils from "ConjureUtils" /* 7405 */;
import ConjureBuilderRouteStore from "ConjureBuilderRouteStore" /* 7380 */;
import FavoriteStore from "FavoriteStore" /* 4860 */;
import GuildOnboardingStore from "GuildOnboardingStore" /* 7251 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import GuildChannelStore from "GuildChannelStore" /* 4935 */;
import GuildStore from "GuildStore" /* 4879 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4908 */;
import PrivateChannelSortStore from "PrivateChannelSortStore" /* 7382 */;
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
}
