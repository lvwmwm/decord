// Module ID: 8252
// Function ID: 8253
// Name: useDisplayProfileSocialLayerStorefrontApplicationIds
// Dependencies: [19, 6649, 7631, 8253, 504, 7037, 7047, 12, 2]
// Exports: default

// Module 8252 (useDisplayProfileSocialLayerStorefrontApplicationIds)
import _mod12 from "module_12" /* 12 */;
import UserProfileGameWidgetTypes from "UserProfileGameWidgetTypes" /* 7037 */;
import react from "react" /* 19 */;
import SocialLayerStorefrontStore from "SocialLayerStorefrontStore" /* 6649 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

const result = size.fileFinishedImporting("modules/slayer_storefront/hooks/useDisplayProfileSocialLayerStorefrontApplicationIds.tsx");

export default function useDisplayProfileSocialLayerStorefrontApplicationIds(userId) {
  let usersPlayingStorefrontEnabledGamesApplicationIds;
  let usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds;
  let areUsersInSocialLayerStorefrontMutualGuildsApplicationIds;
  let stateFromStoresArray;
  const tmp = usersPlayingStorefrontEnabledGamesApplicationIds(usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds[2])(userId.userId);
  _require = tmp;
  let items = [tmp];
  const memo = areUsersInSocialLayerStorefrontMutualGuildsApplicationIds.useMemo(() => {
    let items1;
    let userId;
    if (application != null) {
      userId = tmp.userId;
    }
    if (null != userId) {
      const items = [application.userId];
      items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items);
  const obj = require("SocialLayerStorefrontEligibilityHooks");
  usersPlayingStorefrontEnabledGamesApplicationIds = obj.useUsersPlayingStorefrontEnabledGamesApplicationIds({ userIds: memo });
  const obj2 = require("SocialLayerStorefrontEligibilityHooks");
  usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds = obj2.useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds({ userIds: memo });
  const obj3 = require("SocialLayerStorefrontEligibilityHooks");
  areUsersInSocialLayerStorefrontMutualGuildsApplicationIds = obj3.useAreUsersInSocialLayerStorefrontMutualGuildsApplicationIds(memo);
  let items1 = [stateFromStoresArray];
  const items2 = [tmp];
  const obj4 = require("get initialized");
  stateFromStoresArray = obj4.useStateFromStoresArray(items1, function() {
    let widgets;
    if (application != null) {
      widgets = tmp.widgets;
    }
    if (null == widgets) {
      return [];
    } else {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set();
      let widgets1;
      if (application != null) {
        widgets1 = tmp.widgets;
      }
      if (widgets1 == null) {
        widgets1 = [];
      }
      for (const item10011 of widgets1) {
        let tmp5 = item10011;
        let tmp6 = require;
        if (item10011 instanceof UserProfileGameWidgetTypes.BaseGameWidget) {
          let games = tmp5.games;
          let item = games.forEach((gameId) => {
            applicationIdFromDetectableId = applicationIdFromDetectableId.getApplicationIdFromDetectableId(gameId.gameId);
            if (null != applicationIdFromDetectableId) {
              set.add(applicationIdFromDetectableId);
            }
          });
        } else if (tmp5 instanceof tmp6(7047).ApplicationWidget) {
          let applicationIdFromDetectableId = SocialLayerStorefrontStore.getApplicationIdFromDetectableId(tmp5.applicationId);
          if (null != applicationIdFromDetectableId) {
            let addResult = set.add(tmp12);
          }
        }
        continue;
      }
      const _Array = Array;
      const arr = Array.from(set);
      return arr.sort();
    }
  }, items2);
  let application;
  const useMemo = areUsersInSocialLayerStorefrontMutualGuildsApplicationIds.useMemo;
  if (tmp != null) {
    application = tmp.application;
  }
  const items3 = [application, usersPlayingStorefrontEnabledGamesApplicationIds, usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds, areUsersInSocialLayerStorefrontMutualGuildsApplicationIds, stateFromStoresArray];
  return useMemo(() => {
    let items;
    application = undefined;
    if (application != null) {
      application = application.application;
    }
    if (null != application) {
      items = [];
    } else {
      const items1 = [];
      const uniq = _mod12.uniq;
      _mod12;
      HermesBuiltin.arraySpread(items1, stateFromStoresArray, HermesBuiltin.arraySpread(items1, areUsersInSocialLayerStorefrontMutualGuildsApplicationIds, HermesBuiltin.arraySpread(items1, usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds, HermesBuiltin.arraySpread(items1, usersPlayingStorefrontEnabledGamesApplicationIds, 0))));
      items = uniq(items1);
    }
    return items;
  }, items3);
};
