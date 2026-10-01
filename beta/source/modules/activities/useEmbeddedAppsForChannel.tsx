// Module ID: 11541
// Function ID: 11542
// Name: useEmbeddedAppsForChannel
// Dependencies: [19, 4876, 1372, 2044, 504, 4458, 6589, 1370, 2]
// Exports: default, useEmbeddedAppsByChannel, useEmbeddedAppsWithPresence

// Module 11541 (useEmbeddedAppsForChannel)
import EmbeddedActivitiesStore2 from "EmbeddedActivitiesStore" /* 2044 */;
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 6589 */;
import react from "react" /* 19 */;
import PresenceStore from "PresenceStore" /* 4876 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const EmbeddedActivitiesStore = EmbeddedActivitiesStore2;
let _require, application_id, dependencyMap, findActivity, importDefault, map, set;

function useEmbeddedApps(arr, arg1) {
  let closure_1;
  let closure_2;
  _require = arr;
  importDefault = arg1;
  let mapped = arr.map((applicationId) => applicationId.applicationId);
  let tmp2 = useGetOrFetchApplicationsDefault(mapped);
  dependencyMap = tmp2;
  set = new Set([]);
  const iter = arr[Symbol.iterator]();
  while (iter !== undefined) {
    let userIds = iter.next().userIds;
    let tmp3 = userIds;
    let tmp4 = userIds;
    for (const item10027 of userIds) {
      let addResult = set.add(item10027);
      continue;
    }
    continue;
  }
  let items = [UserStore];
  const items1 = [set];
  const obj2 = require("get initialized");
  const stateFromStoresArray = obj2.useStateFromStoresArray(items, () => {
    const items = [];
    for (const item10006 of set) {
      arr = items.push(UserStore.getUser(item10006));
      continue;
    }
    return items;
  }, items1);
  const items2 = [arr, tmp2, stateFromStoresArray, arg1];
  return set.useMemo(() => {
    map = new Map();
    const item = stateFromStoresArray.forEach((id) => {
      if (null != id) {
        const result = map.set(id.id, id);
      }
    });
    const mapped = map.map((embeddedActivity, index) => {
      const items = [];
      const tmp2 = embeddedActivity.userIds[Symbol.iterator]();
      while (tmp2 !== undefined) {
        let value = map.get(tmp3);
        if (null != value) {
          if (null != closure_1) {
            let tmp7Result = tmp7(tmp6);
            if (null != tmp7Result) {
              arr = items.push(tmp10);
            }
          }
        }
        continue;
      }
      let tmp13 = null;
      if (null != closure_2[index]) {
        tmp13 = { embeddedActivity, application: closure_2[index], userParticipantAvatarUrls: items };
        const obj = { embeddedActivity, application: closure_2[index], userParticipantAvatarUrls: items };
      }
      return tmp13;
    });
    return mapped.filter(arr(closure_2[7]).isNotNullish);
  }, items2);
}
const NO_ACTIVITIES = EmbeddedActivitiesStore2.NO_ACTIVITIES;
let result = size.fileFinishedImporting("modules/activities/useEmbeddedAppsForChannel.tsx");

export default function useEmbeddedAppsForChannel(arg0, arg1) {
  let user;
  _require = arg0;
  const items = [EmbeddedActivitiesStore];
  const obj = require("get initialized");
  return useEmbeddedApps(obj.useStateFromStoresArray(items, () => {
    if (null != user) {
      if (null != user.id) {
        let embeddedActivitiesForChannel;
        if ("" !== user.id) {
          embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(tmp.id);
        }
        return embeddedActivitiesForChannel;
      }
    }
    embeddedActivitiesForChannel = NO_ACTIVITIES;
  }), arg1);
};
export const useEmbeddedAppsByChannel = function useEmbeddedAppsByChannel(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  let items = [EmbeddedActivitiesStore];
  const tmp = useEmbeddedApps(obj.useStateFromStores(items, () => {
    let embeddedActivitiesForGuild;
    if (null != closure_0) {
      embeddedActivitiesForGuild = EmbeddedActivitiesStore.getEmbeddedActivitiesForGuild(tmp);
    } else {
      embeddedActivitiesForGuild = NO_ACTIVITIES;
    }
    return embeddedActivitiesForGuild;
  }));
  let closure_1 = tmp;
  const items1 = [tmp];
  return react.useMemo(() => {
    map = new Map();
    const item = closure_1.forEach((embeddedActivity) => {
      const obj = closure_2_0(closure_2_2[5]);
      const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(embeddedActivity.embeddedActivity.location);
      if (null != embeddedActivityLocationChannelId) {
        let items = map.get(embeddedActivityLocationChannelId);
        const obj2 = map;
        if (items == null) {
          items = [];
        }
        items.push(embeddedActivity);
        const result = obj2.set(embeddedActivityLocationChannelId, items);
      }
    });
    return map;
  }, items1);
};
export { useEmbeddedApps };
export const useEmbeddedAppsWithPresence = function useEmbeddedAppsWithPresence(arg0) {
  _require = arg0;
  let obj = require("get initialized");
  const items = [PresenceStore];
  const items1 = [arg0];
  return obj.useStateFromStores(items, () => {
    map = new Map();
    const item = closure_0.forEach((embeddedActivity) => {
      closure_0 = embeddedActivity;
      let value;
      findActivity = findActivity.findActivity;
      if (embeddedActivity != null) {
        const userIds = embeddedActivity.embeddedActivity.userIds;
        const iter = userIds.values();
        value = iter.next().value;
      }
      let id;
      const findActivityResult = findActivity(value, (application_id) => {
        let id;
        application_id = application_id.application_id;
        if (application != null) {
          application = application.application;
          if (application != null) {
            id = application.id;
          }
        }
        return application_id === id;
      });
      set = map.set;
      if (embeddedActivity != null) {
        let application = embeddedActivity.application;
        if (application != null) {
          id = application.id;
        }
      }
      const obj = { presenceActivity: findActivityResult };
      const merged = Object.assign(embeddedActivity);
      const result = set(id, obj);
    });
    return map;
  }, items1, require("get initialized").statesWillNeverBeEqual);
};
