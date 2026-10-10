// Module ID: 8995
// Function ID: 8996
// Name: SocialLayerStorefrontEligibilityHooks
// Dependencies: [19, 8996, 2019, 7320, 2087, 5108, 6932, 558, 576, 8459, 504, 8997, 2]
// Exports: useIsCurrentUserPlayingSocialLayerStorefrontGames

// Module 8995 (SocialLayerStorefrontEligibilityHooks)
import react2 from "react" /* 576 */;
import ContentInventoryTypes from "ContentInventoryTypes" /* 8459 */;
import react from "react" /* 19 */;
import ContentInventoryOutboxStore from "ContentInventoryOutboxStore" /* 8996 */;
import RunningGameStore from "RunningGameStore" /* 2019 */;
import UserProfileStore from "UserProfileStore" /* 7320 */;
import GuildStore from "GuildStore" /* 2087 */;
import PresenceStore from "PresenceStore" /* 5108 */;
import SocialLayerStorefrontStore from "SocialLayerStorefrontStore" /* 6932 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, gamesSeen;

let tmp;
const get_initialized = tmp(504);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds(userIds) {
  let first;
  let tmp7;
  let tmp8;
  let tmp2 = dependencyMap;
  let obj = userIds(576);
  const cResult = obj.c(4);
  const tmp = userIds;
  userIds = userIds.userIds;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ContentInventoryOutboxStore, ];
    let tmp6 = SocialLayerStorefrontStore;
    items[1] = SocialLayerStorefrontStore;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userIds) {
    const fn = function s() {
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
    };
    const items1 = [userIds];
    cResult[1] = userIds;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresArray(first, tmp7, tmp8);
}) : (function useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds(userIds) {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAreUsersInSocialLayerStorefrontMutualGuildsApplicationIds(arg0) {
  let closure_0;
  let first;
  let tmp7;
  let tmp8;
  _require = arg0;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserProfileStore, ];
    const tmp6 = SocialLayerStorefrontStore;
    items[1] = SocialLayerStorefrontStore;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
      const items = [];
      const tmp2 = closure_0[Symbol.iterator]();
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
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresArray(first, tmp7, tmp8);
}) : (function useAreUsersInSocialLayerStorefrontMutualGuildsApplicationIds(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  let items = [UserProfileStore, SocialLayerStorefrontStore];
  const items1 = [arg0];
  return obj.useStateFromStoresArray(items, () => {
    const items = [];
    const tmp2 = closure_0[Symbol.iterator]();
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useUsersPlayingStorefrontEnabledGamesApplicationIds(userIds) {
  let first;
  let tmp8;
  let tmp9;
  let tmp2 = userIds;
  const tmp3 = dependencyMap;
  const obj = userIds(576);
  const cResult = obj.c(7);
  userIds = userIds.userIds;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp6 = PresenceStore;
    let items = [PresenceStore, ];
    let tmp7 = SocialLayerStorefrontStore;
    items[1] = SocialLayerStorefrontStore;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userIds) {
    const fn = function n() {
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
    };
    const items1 = [userIds];
    cResult[1] = userIds;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmp2Result = tmp2(504);
  const stateFromStoresArray = tmp2Result.useStateFromStoresArray(first, tmp8, tmp9);
  const tmp2Result2 = tmp2(8997);
  const slayerStorefrontDevApplicationIdOverride = tmp2Result2.useSlayerStorefrontDevApplicationIdOverride();
  let tmp12 = stateFromStoresArray;
  if (null != slayerStorefrontDevApplicationIdOverride) {
    if (cResult[4] === stateFromStoresArray) {
      let tmp13;
      if (cResult[5] === slayerStorefrontDevApplicationIdOverride) {
        tmp13 = cResult[6];
      }
      tmp12 = tmp13;
    }
    const items2 = [];
    items2[HermesBuiltin.arraySpread(items2, stateFromStoresArray, 0)] = slayerStorefrontDevApplicationIdOverride;
    cResult[4] = stateFromStoresArray;
    cResult[5] = slayerStorefrontDevApplicationIdOverride;
    cResult[6] = items2;
    tmp13 = items2;
  }
  return tmp12;
}) : (function useUsersPlayingStorefrontEnabledGamesApplicationIds(userIds) {
  userIds = userIds.userIds;
  let stateFromStoresArray;
  let items = [PresenceStore, SocialLayerStorefrontStore];
  const items1 = [userIds];
  const obj = userIds(stateFromStoresArray[10]);
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
  const obj2 = userIds(stateFromStoresArray[11]);
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
});
let closure_9 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAreUsersPlayingStorefrontEnabledGames(userIds) {
  let tmp2;
  const obj = react2;
  const cResult = obj.c(2);
  userIds = userIds.userIds;
  if (cResult[0] !== userIds) {
    const obj2 = { userIds };
    cResult[0] = userIds;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return closure_9(tmp2).length > 0;
}) : (function useAreUsersPlayingStorefrontEnabledGames(userIds) {
  const obj = { userIds: userIds.userIds };
  return closure_9(obj).length > 0;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCurrentUserPlayedSocialLayerStorefrontGamesApplicationIds() {
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [RunningGameStore, ];
    const tmp7 = SocialLayerStorefrontStore;
    items[1] = SocialLayerStorefrontStore;
    const fn = function o() {
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
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = fn;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStoresArray(tmp4, tmp5);
}) : (function useCurrentUserPlayedSocialLayerStorefrontGamesApplicationIds() {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCurrentUserPlayingSocialLayerStorefrontGamesApplicationIds() {
  let tmp4;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp7 = RunningGameStore;
    let items = [RunningGameStore, SocialLayerStorefrontStore];
    const fn = function o() {
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
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp6 = items1;
    tmp5 = fn;
    tmp4 = items;
  } else {
    [tmp4, tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStoresArray(tmp4, tmp5, tmp6);
}) : (function useCurrentUserPlayingSocialLayerStorefrontGamesApplicationIds() {
  let items = [RunningGameStore, SocialLayerStorefrontStore];
  const obj = get_initialized;
  return obj.useStateFromStoresArray(items, () => {
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
  }, []);
});
let closure_10 = tmp7;
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsCurrentUserInSocialLayerStorefrontGuildsApplicationIds() {
  let guildIds;
  let stateFromStores;
  let tmp10;
  let tmp11;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp2 = dependencyMap;
  const obj = stateFromStores(576);
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = GuildStore;
    let items = [GuildStore];
    const fn = function o() {
      return guildIds.getGuildIds();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = stateFromStores(504);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SocialLayerStorefrontStore];
    cResult[2] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== stateFromStores) {
    const fn2 = function u() {
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
    };
    const items2 = [stateFromStores];
    cResult[3] = stateFromStores;
    cResult[4] = fn2;
    cResult[5] = items2;
    tmp11 = items2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[4];
    tmp11 = cResult[5];
  }
  const tmpResult2 = stateFromStores(504);
  return tmpResult2.useStateFromStoresArray(tmp8, tmp10, tmp11);
}) : (function useIsCurrentUserInSocialLayerStorefrontGuildsApplicationIds() {
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
});
function useIsCurrentUserPlayingSocialLayerStorefrontGames() {
  return closure_10().length > 0;
}
const result1 = size.fileFinishedImporting("modules/slayer_storefront/hooks/SocialLayerStorefrontEligibilityHooks.tsx");

export const useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds = tmp2;
export const useAreUsersInSocialLayerStorefrontMutualGuildsApplicationIds = tmp3;
export const useUsersPlayingStorefrontEnabledGamesApplicationIds = tmp4;
export const useAreUsersPlayingStorefrontEnabledGames = tmp5;
export const useCurrentUserPlayedSocialLayerStorefrontGamesApplicationIds = tmp6;
export const useCurrentUserPlayingSocialLayerStorefrontGamesApplicationIds = tmp7;
export { useIsCurrentUserPlayingSocialLayerStorefrontGames };
export const useIsCurrentUserInSocialLayerStorefrontGuildsApplicationIds = tmp9;
