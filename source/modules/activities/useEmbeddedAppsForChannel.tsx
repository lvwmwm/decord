// Module ID: 11209
// Function ID: 87183
// Name: _createForOfIteratorHelperLoose
// Dependencies: [31, 4217, 1849, 1347, 566, 3748, 5468, 1327, 2]
// Exports: default, useEmbeddedAppsByChannel, useEmbeddedAppsWithPresence

// Module 11209 (_createForOfIteratorHelperLoose)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { NO_ACTIVITIES } from "_createForOfIteratorHelperLoose";

const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function useEmbeddedApps(arr, arg1) {
  let iter4;
  const _require = arr;
  const importDefault = arg1;
  let mapped = arr.map((applicationId) => applicationId.applicationId);
  let tmp2 = importDefault(5468)(mapped);
  const dependencyMap = tmp2;
  const set = new Set([]);
  const tmp3 = _createForOfIteratorHelperLoose(arr);
  let iter = tmp3();
  if (!iter.done) {
    do {
      let tmp4 = _createForOfIteratorHelperLoose;
      let tmp5 = _createForOfIteratorHelperLoose(iter.value.userIds);
      let iter2 = tmp5();
      if (!iter2.done) {
        do {
          let addResult = set.add(iter2.value);
          let iter3 = tmp5();
          iter2 = iter3;
          done = iter3.done;
        } while (!done);
      }
      iter4 = tmp3();
      iter = iter4;
    } while (!iter4.done);
  }
  let items = [closure_5];
  const items1 = [set];
  const stateFromStoresArray = _require(566).useStateFromStoresArray(items, () => {
    let done;
    const items = [];
    const tmp = outer1_8(set);
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = outer1_5;
        let arr = items.push(outer1_5.getUser(iter.value));
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    return items;
  }, items1);
  const items2 = [arr, tmp2, stateFromStoresArray, arg1];
  return set.useMemo(() => {
    const map = new Map();
    const item = stateFromStoresArray.forEach((id) => {
      if (null != id) {
        const result = map.set(id.id, id);
      }
    });
    const mapped = map.map((userIds) => {
      let iter;
      const items = [];
      if (null != items) {
        const tmp12 = outer2_8(userIds.userIds);
        const iter3 = tmp12();
        let iter2 = iter3;
        if (!iter3.done) {
          do {
            let tmp2 = map;
            let value = map.get(iter2.value);
            let tmp4 = tmp9;
            if (null != value) {
              let tmp5 = outer1_1;
              tmp4 = tmp9;
              if (null != outer1_1) {
                let tmp6 = outer1_1;
                let tmp7 = outer1_1(value);
                tmp4 = tmp7;
                if (null != tmp7) {
                  let arr = items.push(tmp7);
                  tmp4 = tmp7;
                }
              }
            }
            iter = tmp12();
            tmp9 = tmp4;
            iter2 = iter;
          } while (!iter.done);
        }
      }
      let tmp10 = null;
      if (null != outer1_2[arg1]) {
        const obj = { embeddedActivity: userIds, application: tmp, userParticipantAvatarUrls: items };
        tmp10 = obj;
      }
      return tmp10;
    });
    return mapped.filter(arr(tmp2[7]).isNotNullish);
  }, items2);
}
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/activities/useEmbeddedAppsForChannel.tsx");

export default function useEmbeddedAppsForChannel(arg0, arg1) {
  const _require = arg0;
  const items = [_createForOfIteratorHelperLoose];
  return useEmbeddedApps(_require(566).useStateFromStoresArray(items, () => {
    if (null != user) {
      if (null != user.id) {
        if ("" !== user.id) {
          let embeddedActivitiesForChannel = outer1_6.getEmbeddedActivitiesForChannel(user.id);
        }
        return embeddedActivitiesForChannel;
      }
    }
    embeddedActivitiesForChannel = outer1_7;
  }), arg1);
};
export const useEmbeddedAppsByChannel = function useEmbeddedAppsByChannel(arg0) {
  const _require = arg0;
  let items = [_createForOfIteratorHelperLoose];
  const tmp = useEmbeddedApps(_require(566).useStateFromStores(items, () => {
    if (null != closure_0) {
      let embeddedActivitiesForGuild = outer1_6.getEmbeddedActivitiesForGuild(closure_0);
    } else {
      embeddedActivitiesForGuild = outer1_7;
    }
    return embeddedActivitiesForGuild;
  }));
  const importDefault = tmp;
  const items1 = [tmp];
  return React.useMemo(() => {
    const map = new Map();
    const item = tmp.forEach((embeddedActivity) => {
      const embeddedActivityLocationChannelId = map(outer2_2[5]).getEmbeddedActivityLocationChannelId(embeddedActivity.embeddedActivity.location);
      if (null != embeddedActivityLocationChannelId) {
        let items = map.get(embeddedActivityLocationChannelId);
        if (null == items) {
          items = [];
        }
        items.push(embeddedActivity);
        const result = map.set(embeddedActivityLocationChannelId, items);
      }
    });
    return map;
  }, items1);
};
export { useEmbeddedApps };
export const useEmbeddedAppsWithPresence = function useEmbeddedAppsWithPresence(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct];
  const items1 = [arg0];
  return _require(566).useStateFromStores(items, () => {
    const map = new Map();
    const item = map.forEach((embeddedActivity) => {
      let value;
      if (null != embeddedActivity) {
        const userIds = embeddedActivity.embeddedActivity.userIds;
        value = userIds.values().next().value;
        const iter = userIds.values();
      }
      let id;
      if (null != embeddedActivity) {
        let application = embeddedActivity.application;
        if (null != application) {
          id = application.id;
        }
      }
      const obj = {};
      const merged = Object.assign(embeddedActivity);
      obj["presenceActivity"] = outer2_4.findActivity(value, (application_id) => {
        let id;
        if (null != embeddedActivity) {
          const application = embeddedActivity.application;
          if (null != application) {
            id = application.id;
          }
        }
        return application_id.application_id === id;
      });
      const result = map.set(id, obj);
    });
    return map;
  }, items1, _require(566).statesWillNeverBeEqual);
};
