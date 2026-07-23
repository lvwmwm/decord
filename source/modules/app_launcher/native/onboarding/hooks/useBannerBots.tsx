// Module ID: 11186
// Function ID: 86949
// Name: _createForOfIteratorHelperLoose
// Dependencies: [31, 1838, 11165, 566, 7929, 11187, 11158, 2]
// Exports: useBannerBots

// Module 11186 (_createForOfIteratorHelperLoose)
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

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
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useBannerBots.tsx");

export const useBannerBots = function useBannerBots(context) {
  let tmp10;
  context = context.context;
  let first1;
  let obj = (function useAppsMap(context) {
    let obj = first1(outer1_1[5]);
    obj = { context: context.context, onlyWithCommands: true, includeBuiltIn: false, includeEmbeddedApps: false, includeNonEmbeddedApps: true };
    const apps = obj.useApplicationsInContext(obj).apps;
    const items = [apps];
    return outer1_2.useMemo(() => {
      let done;
      const map = new Map();
      const tmp = outer2_5(apps);
      let iter = tmp();
      if (!iter.done) {
        do {
          let value = iter.value;
          let result = map.set(value.id, value);
          let iter2 = tmp();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
      return map;
    }, items);
  })({ context });
  let obj1 = first1(11187);
  obj = { context, onlyWithCommands: true, includeBuiltIn: false, includeEmbeddedApps: false, includeNonEmbeddedApps: true };
  let apps = obj1.useApplicationsInContext(obj).apps;
  const obj4 = (function useCommandsMap(context) {
    const commands = first1(outer1_1[5]).useApplicationCommandsInContext({ context: context.context, includeBuiltIn: false }).commands;
    const items = [commands];
    return outer1_2.useMemo(() => {
      let done;
      const map = new Map();
      const tmp = outer2_5(commands);
      let iter = tmp();
      if (!iter.done) {
        do {
          let value = iter.value;
          let result = map.set(value.id, value);
          let iter2 = tmp();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
      return map;
    }, items);
  })({ context });
  let tmp = (function useFrecencyCommandIds(context) {
    context = context.context;
    let obj = first1(outer1_1[3]);
    const items = [outer1_3];
    obj = {
      channel: context.channel,
      guild: obj.useStateFromStores(items, () => {
        const channel = context.channel;
        let guild_id;
        if (null != channel) {
          guild_id = channel.guild_id;
        }
        return outer2_3.getGuild(guild_id);
      })
    };
    return first1(outer1_1[4]).useTopCommands(obj);
  })({ context });
  obj = {};
  let channel = context.channel;
  let guild_id;
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  obj.guildId = guild_id;
  obj.fetchesShelf = true;
  const activityApplications = first1(11158).useActivityApplications(obj);
  const obj5 = first1(11158);
  let items = [_isNativeReflectConstruct];
  const stateFromStores = first1(566).useStateFromStores(items, () => outer1_4.getRecentApplicationCommandMetadata());
  let value = null;
  if (null != stateFromStores) {
    value = obj.get(stateFromStores.applicationId);
  }
  first1 = value;
  const tmp6 = _createForOfIteratorHelperLoose(tmp);
  let iter = tmp6();
  let tmp7 = value;
  let iter2 = iter;
  let tmp9 = value;
  if (!iter.done) {
    while (true) {
      value = obj4.get(iter2.value);
      let tmp12 = tmp7;
      let tmp13 = tmp8;
      if (null != value) {
        let value1 = obj.get(value.applicationId);
        tmp12 = tmp7;
        tmp13 = tmp8;
        let tmp15 = value1;
        if (null != value1) {
          if (null == tmp7) {
            first1 = value1;
            tmp12 = value1;
            tmp13 = tmp8;
            let tmp18 = value1;
          } else {
            let id;
            if (null != tmp7) {
              id = tmp7.id;
            }
            tmp12 = tmp7;
            tmp13 = tmp7;
            let tmp17 = value1;
            tmp9 = tmp7;
            tmp10 = value1;
            if (value1.id !== id) {
              break;
            }
          }
          break;
        }
      }
      let iter3 = tmp6();
      tmp7 = tmp12;
      tmp8 = tmp13;
      iter2 = iter3;
      tmp9 = tmp12;
      if (iter3.done) {
        break;
      }
    }
  }
  if (null == tmp9) {
    if (apps.length > 0) {
      const first = apps[0];
      first1 = first;
      tmp9 = first;
    }
    let tmp19 = tmp9;
    let found = tmp10;
    if (apps.length > 1) {
      found = apps[1];
      tmp19 = tmp9;
    }
  } else {
    tmp19 = tmp9;
    found = tmp10;
    if (null == tmp10) {
      found = apps.find((id) => {
        id = undefined;
        if (null != first1) {
          id = first1.id;
        }
        return id.id !== id;
      });
      tmp19 = tmp9;
    }
  }
  if (null == tmp19) {
    first1 = activityApplications[0];
    found = activityApplications[1];
    let tmp22 = first1;
  } else {
    tmp22 = tmp19;
    if (null == found) {
      found = activityApplications[0];
      tmp22 = tmp19;
    }
  }
  obj1 = { firstBotApplication: tmp22, secondBotApplication: found };
  return obj1;
};
