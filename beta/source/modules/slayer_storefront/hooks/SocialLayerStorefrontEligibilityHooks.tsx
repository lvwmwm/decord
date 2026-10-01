// Module ID: 8253
// Function ID: 8254
// Name: SocialLayerStorefrontEligibilityHooks
// Dependencies: [19, 8254, 2000, 7035, 2067, 4876, 6649, 504, 7789, 8255, 2]
// Exports: useAreUsersInSocialLayerStorefrontMutualGuildsApplicationIds, useAreUsersPlayingStorefrontEnabledGames, useCurrentUserPlayedSocialLayerStorefrontGamesApplicationIds, useCurrentUserPlayingSocialLayerStorefrontGamesApplicationIds, useIsCurrentUserInSocialLayerStorefrontGuildsApplicationIds, useIsCurrentUserPlayingSocialLayerStorefrontGames, useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds, useUsersPlayingStorefrontEnabledGamesApplicationIds

// Module 8253 (SocialLayerStorefrontEligibilityHooks)
import get_initialized from "get initialized" /* 504 */;
import ContentInventoryTypes from "ContentInventoryTypes" /* 7789 */;
import react from "react" /* 19 */;
import ContentInventoryOutboxStore from "ContentInventoryOutboxStore" /* 8254 */;
import RunningGameStore from "RunningGameStore" /* 2000 */;
import UserProfileStore from "UserProfileStore" /* 7035 */;
import GuildStore from "GuildStore" /* 2067 */;
import PresenceStore from "PresenceStore" /* 4876 */;
import SocialLayerStorefrontStore from "SocialLayerStorefrontStore" /* 6649 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, gamesSeen;

const f86008 = () => {
  const items = [];
  const runningGames = RunningGameStore.getRunningGames();
  const iter = runningGames[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    if (null != nextResult.id) {
      if (RunningGameStore.isDetectionEnabled(tmp3)) {
        applicationIdFromDetectableId = applicationIdFromDetectableId.getApplicationIdFromDetectableId(tmp3.id);
        if (null != applicationIdFromDetectableId) {
          let arr = items.push(tmp9);
        }
      }
    }
    continue;
  }
  return items;
};
const result = size.fileFinishedImporting("modules/slayer_storefront/hooks/SocialLayerStorefrontEligibilityHooks.tsx");

export const useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds = function useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds(userIds) {
  userIds = userIds.userIds;
  let obj = userIds(504);
  let items = [ContentInventoryOutboxStore, SocialLayerStorefrontStore];
  const items1 = [userIds];
  return obj.useStateFromStoresArray(items, () => {
    const items = [];
    const tmp2 = userIds[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let userOutbox = ContentInventoryOutboxStore.getUserOutbox(tmp3);
      let entries;
      if (userOutbox != null) {
        entries = userOutbox.entries;
      }
      if (entries == null) {
        entries = [];
      }
      for (const item10019 of entries) {
        let tmp8 = item10019;
        if (null != item10019) {
          let obj = ContentInventoryTypes;
          if (obj.isGamingLikeEntry(tmp8)) {
            let applicationIdFromDetectableId = SocialLayerStorefrontStore.getApplicationIdFromDetectableId(tmp8.extra.application_id);
            if (null != applicationIdFromDetectableId) {
              let arr = items.push(tmp15);
            }
          }
        }
        continue;
      }
      continue;
    }
    return items;
  }, items1);
};
export const useAreUsersInSocialLayerStorefrontMutualGuildsApplicationIds = function useAreUsersInSocialLayerStorefrontMutualGuildsApplicationIds(memo) {
  _require = memo;
  let obj = require("get initialized");
  let items = [UserProfileStore, SocialLayerStorefrontStore];
  const items1 = [memo];
  return obj.useStateFromStoresArray(items, () => {
    const items = [];
    const tmp2 = memo[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let mutualGuilds = UserProfileStore.getMutualGuilds(tmp3);
      if (null != mutualGuilds) {
        for (const item10020 of mutualGuilds) {
          let obj = SocialLayerStorefrontStore;
          let tmp9 = item10020;
          let storefrontGuildIds = SocialLayerStorefrontStore.getStorefrontGuildIds();
          if (storefrontGuildIds.has(item10020.guild.id)) {
            let applicationIdFromGuildId = obj.getApplicationIdFromGuildId(tmp9.guild.id);
            if (null != applicationIdFromGuildId) {
              let arr = items.push(tmp12);
            }
          }
          continue;
        }
      }
      continue;
    }
    return items;
  }, items1);
};
export const useUsersPlayingStorefrontEnabledGamesApplicationIds = function useUsersPlayingStorefrontEnabledGamesApplicationIds(userIds) {
  userIds = userIds.userIds;
  let stateFromStoresArray;
  const items = [PresenceStore, SocialLayerStorefrontStore];
  const items1 = [userIds];
  const obj = userIds(stateFromStoresArray[7]);
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const items = [];
    const tmp2 = userIds[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let activities = PresenceStore.getActivities(tmp3);
      for (const item10017 of activities) {
        if (null != item10017.application_id) {
          let applicationIdFromDetectableId = SocialLayerStorefrontStore.getApplicationIdFromDetectableId(tmp8.application_id);
          if (null != applicationIdFromDetectableId) {
            let arr = items.push(tmp12);
          }
        }
        continue;
      }
      continue;
    }
    return items;
  }, items1);
  const obj2 = userIds(stateFromStoresArray[9]);
  const slayerStorefrontDevApplicationIdOverride = obj2.useSlayerStorefrontDevApplicationIdOverride();
  const items2 = [stateFromStoresArray, slayerStorefrontDevApplicationIdOverride];
  return slayerStorefrontDevApplicationIdOverride.useMemo(() => {
    let tmp3;
    if (null != slayerStorefrontDevApplicationIdOverride) {
      const items = [];
      items[HermesBuiltin.arraySpread(items, stateFromStoresArray, 0)] = tmp2;
      tmp3 = items;
    } else {
      tmp3 = stateFromStoresArray;
    }
    return tmp3;
  }, items2);
};
export const useAreUsersPlayingStorefrontEnabledGames = function useAreUsersPlayingStorefrontEnabledGames(userIds) {
  userIds = userIds.userIds;
  let stateFromStoresArray;
  let items = [PresenceStore, SocialLayerStorefrontStore];
  const items1 = [userIds];
  const obj = userIds(stateFromStoresArray[7]);
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const items = [];
    const tmp2 = userIds[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let activities = PresenceStore.getActivities(tmp3);
      for (const item10017 of activities) {
        if (null != item10017.application_id) {
          let applicationIdFromDetectableId = SocialLayerStorefrontStore.getApplicationIdFromDetectableId(tmp8.application_id);
          if (null != applicationIdFromDetectableId) {
            let arr = items.push(tmp12);
          }
        }
        continue;
      }
      continue;
    }
    return items;
  }, items1);
  const obj2 = userIds(stateFromStoresArray[9]);
  const slayerStorefrontDevApplicationIdOverride = obj2.useSlayerStorefrontDevApplicationIdOverride();
  const items2 = [stateFromStoresArray, slayerStorefrontDevApplicationIdOverride];
  return slayerStorefrontDevApplicationIdOverride.useMemo(() => {
    let tmp3;
    if (null != slayerStorefrontDevApplicationIdOverride) {
      const items = [];
      items[HermesBuiltin.arraySpread(items, stateFromStoresArray, 0)] = tmp2;
      tmp3 = items;
    } else {
      tmp3 = stateFromStoresArray;
    }
    return tmp3;
  }, items2).length > 0;
};
export const useCurrentUserPlayedSocialLayerStorefrontGamesApplicationIds = function useCurrentUserPlayedSocialLayerStorefrontGamesApplicationIds() {
  let items = [RunningGameStore, SocialLayerStorefrontStore];
  const obj = get_initialized;
  return obj.useStateFromStoresArray(items, () => {
    const items = [];
    gamesSeen = gamesSeen.getGamesSeen(false, false);
    const iter = gamesSeen[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (null != nextResult.id) {
        applicationIdFromDetectableId = applicationIdFromDetectableId.getApplicationIdFromDetectableId(tmp3.id);
        if (null != applicationIdFromDetectableId) {
          let arr = items.push(tmp7);
        }
      }
      continue;
    }
    return items;
  });
};
export const useCurrentUserPlayingSocialLayerStorefrontGamesApplicationIds = function useCurrentUserPlayingSocialLayerStorefrontGamesApplicationIds() {
  const items = [RunningGameStore, SocialLayerStorefrontStore];
  const obj = get_initialized;
  return obj.useStateFromStoresArray(items, f86008, []);
};
export const useIsCurrentUserPlayingSocialLayerStorefrontGames = function useIsCurrentUserPlayingSocialLayerStorefrontGames() {
  let items = [RunningGameStore, SocialLayerStorefrontStore];
  const obj = get_initialized;
  return obj.useStateFromStoresArray(items, f86008, []).length > 0;
};
export const useIsCurrentUserInSocialLayerStorefrontGuildsApplicationIds = function useIsCurrentUserInSocialLayerStorefrontGuildsApplicationIds() {
  let guildIds;
  let stateFromStores;
  let items = [GuildStore];
  const obj = stateFromStores(504);
  stateFromStores = obj.useStateFromStores(items, () => guildIds.getGuildIds());
  const items1 = [SocialLayerStorefrontStore];
  const items2 = [stateFromStores];
  const obj2 = stateFromStores(504);
  return obj2.useStateFromStoresArray(items1, () => {
    const items = [];
    const tmp2 = stateFromStores[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let applicationIdFromGuildId = SocialLayerStorefrontStore.getApplicationIdFromGuildId(tmp3);
      if (null != applicationIdFromGuildId) {
        let arr = items.push(tmp6);
      }
      continue;
    }
    return items;
  }, items2);
};
