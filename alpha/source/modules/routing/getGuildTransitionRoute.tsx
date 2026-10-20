// Module ID: 7269
// Function ID: 7270
// Name: getGuildTransitionRoute
// Dependencies: [7270, 4803, 7142, 4800, 4878, 4822, 4851, 7271, 1087, 4807, 7273, 7277, 7279, 4825, 7294, 2]
// Exports: getGuildTransitionRoute

// Module 7269 (getGuildTransitionRoute)
import Constants from "Constants" /* 1087 */;
import ChannelConstants from "ChannelConstants" /* 4807 */;
import FavoritesUtils from "FavoritesUtils" /* 4825 */;
import OnboardingHomeUtils from "OnboardingHomeUtils" /* 7273 */;
import canUseGuildSpace from "canUseGuildSpace" /* 7277 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 7279 */;
import ConjureUtils from "ConjureUtils" /* 7294 */;
import ConjureBuilderRouteStore from "ConjureBuilderRouteStore" /* 7270 */;
import FavoriteStore from "FavoriteStore" /* 4803 */;
import GuildOnboardingStore from "GuildOnboardingStore" /* 7142 */;
import ChannelStore from "ChannelStore" /* 4800 */;
import GuildChannelStore from "GuildChannelStore" /* 4878 */;
import GuildStore from "GuildStore" /* 4822 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4851 */;
import PrivateChannelSortStore from "PrivateChannelSortStore" /* 7271 */;
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
