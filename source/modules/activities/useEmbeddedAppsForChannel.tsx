// Module ID: 11169
// Function ID: 86864
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default, useEmbeddedAppsByChannel, useEmbeddedAppsWithPresence

// Module 11169 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  arg1 = arr;
  const importDefault = arg1;
  const mapped = arr.map((applicationId) => applicationId.applicationId);
  const tmp2 = importDefault(dependencyMap[6])(mapped);
  const dependencyMap = tmp2;
  const set = new Set([]);
  const React = set;
  const tmp3 = _createForOfIteratorHelperLoose(arr);
  let iter = tmp3();
  if (!iter.done) {
    do {
      let tmp4 = closure_8;
      let tmp5 = closure_8(iter.value.userIds);
      let iter2 = tmp5();
      if (!iter2.done) {
        do {
          let addResult = set.add(iter2.value);
          let iter3 = tmp5();
          iter2 = iter3;
          let done = iter3.done;
        } while (!done);
      }
      iter4 = tmp3();
      iter = iter4;
    } while (!iter4.done);
  }
  const items = [closure_5];
  const items1 = [set];
  const stateFromStoresArray = arg1(dependencyMap[4]).useStateFromStoresArray(items, () => {
    let done;
    const items = [];
    const tmp = callback(set);
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = closure_5;
        let arr = items.push(closure_5.getUser(iter.value));
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    return items;
  }, items1);
  let closure_4 = stateFromStoresArray;
  const items2 = [arr, tmp2, stateFromStoresArray, arg1];
  return React.useMemo(() => {
    const arg0 = new Map();
    const item = stateFromStoresArray.forEach((id) => {
      if (null != id) {
        const result = map.set(id.id, id);
      }
    });
    const mapped = arg0.map((userIds) => {
      let iter;
      const items = [];
      if (null != items) {
        const tmp12 = callback(userIds.userIds);
        const iter3 = tmp12();
        let iter2 = iter3;
        if (!iter3.done) {
          do {
            let tmp2 = closure_0;
            let value = closure_0.get(iter2.value);
            let tmp4 = tmp9;
            if (null != value) {
              let tmp5 = closure_1;
              tmp4 = tmp9;
              if (null != closure_1) {
                let tmp6 = closure_1;
                let tmp7 = closure_1(value);
                tmp4 = tmp7;
                if (null != tmp7) {
                  let arr = items.push(tmp7);
                  tmp4 = tmp7;
                }
              }
            }
            iter = tmp12();
            let tmp9 = tmp4;
            iter2 = iter;
          } while (!iter.done);
        }
      }
      let tmp10 = null;
      if (null != closure_2[arg1]) {
        const obj = { embeddedActivity: userIds, application: tmp, userParticipantAvatarUrls: items };
        tmp10 = obj;
      }
      return tmp10;
    });
    return mapped.filter(arg0(tmp2[7]).isNotNullish);
  }, items2);
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const NO_ACTIVITIES = arg1(dependencyMap[3]).NO_ACTIVITIES;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/activities/useEmbeddedAppsForChannel.tsx");

export default function useEmbeddedAppsForChannel(arg0, arg1) {
  arg1 = arg0;
  const items = [closure_6];
  return useEmbeddedApps(arg1(dependencyMap[4]).useStateFromStoresArray(items, () => {
    if (null != arg0) {
      if (null != arg0.id) {
        if ("" !== arg0.id) {
          let embeddedActivitiesForChannel = embeddedActivitiesForChannel.getEmbeddedActivitiesForChannel(arg0.id);
        }
        return embeddedActivitiesForChannel;
      }
    }
    embeddedActivitiesForChannel = closure_7;
  }), arg1);
};
export const useEmbeddedAppsByChannel = function useEmbeddedAppsByChannel(arg0) {
  const arg1 = arg0;
  const items = [closure_6];
  const tmp = useEmbeddedApps(arg1(dependencyMap[4]).useStateFromStores(items, () => {
    if (null != arg0) {
      let embeddedActivitiesForGuild = embeddedActivitiesForGuild.getEmbeddedActivitiesForGuild(arg0);
    } else {
      embeddedActivitiesForGuild = closure_7;
    }
    return embeddedActivitiesForGuild;
  }));
  const importDefault = tmp;
  const items1 = [tmp];
  return React.useMemo(() => {
    const map = new Map();
    const arg0 = map;
    const item = tmp.forEach((embeddedActivity) => {
      const embeddedActivityLocationChannelId = map(closure_2[5]).getEmbeddedActivityLocationChannelId(embeddedActivity.embeddedActivity.location);
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
  const arg1 = arg0;
  const items = [closure_4];
  const items1 = [arg0];
  return arg1(dependencyMap[4]).useStateFromStores(items, () => {
    const map = new Map();
    const arg0 = map;
    const item = arg0.forEach((embeddedActivity) => {
      let value;
      if (null != embeddedActivity) {
        const userIds = embeddedActivity.embeddedActivity.userIds;
        value = userIds.values().next().value;
        const iter = userIds.values();
      }
      let id;
      if (null != embeddedActivity) {
        const application = embeddedActivity.application;
        if (null != application) {
          id = application.id;
        }
      }
      const obj = {};
      const merged = Object.assign(embeddedActivity);
      obj["presenceActivity"] = closure_4.findActivity(value, (application_id) => {
        let id;
        if (null != application_id) {
          const application = application_id.application;
          if (null != application) {
            id = application.id;
          }
        }
        return application_id.application_id === id;
      });
      const result = map.set(id, obj);
    });
    return map;
  }, items1, arg1(dependencyMap[4]).statesWillNeverBeEqual);
};
