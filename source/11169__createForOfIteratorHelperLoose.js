// Module ID: 11169
// Function ID: 86851
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: useBannerBots

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
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useBannerBots.tsx");

export const useBannerBots = function useBannerBots(context) {
  let tmp10;
  context = context.context;
  let arg1;
  let obj = function useAppsMap(context) {
    const apps = first1(closure_1[5]).useApplicationsInContext({ context: context.context }).apps;
    const first1 = apps;
    const items = [apps];
    return React.useMemo(() => {
      let done;
      const map = new Map();
      const tmp = callback(apps);
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
  }({ context });
  const apps = arg1(dependencyMap[5]).useApplicationsInContext({ context }).apps;
  const obj2 = arg1(dependencyMap[5]);
  const obj3 = function useCommandsMap(context) {
    const commands = first1(closure_1[5]).useApplicationCommandsInContext({ context: context.context, includeBuiltIn: false }).commands;
    const first1 = commands;
    const items = [commands];
    return React.useMemo(() => {
      let done;
      const map = new Map();
      const tmp = callback(commands);
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
  }({ context });
  const tmp = function useFrecencyCommandIds(context) {
    context = context.context;
    const first1 = context;
    let obj = first1(closure_1[3]);
    const items = [closure_3];
    obj = {
      channel: context.channel,
      guild: obj.useStateFromStores(items, () => {
        const channel = context.channel;
        let guild_id;
        if (null != channel) {
          guild_id = channel.guild_id;
        }
        return guild.getGuild(guild_id);
      })
    };
    return first1(closure_1[4]).useTopCommands(obj);
  }({ context });
  obj = {};
  const channel = context.channel;
  let guild_id;
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  obj.guildId = guild_id;
  obj.fetchesShelf = true;
  const activityApplications = arg1(dependencyMap[6]).useActivityApplications(obj);
  const obj4 = arg1(dependencyMap[6]);
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items, () => recentApplicationCommandMetadata.getRecentApplicationCommandMetadata());
  let value = null;
  if (null != stateFromStores) {
    value = obj.get(stateFromStores.applicationId);
  }
  arg1 = value;
  const tmp6 = _createForOfIteratorHelperLoose(tmp);
  const iter = tmp6();
  let tmp7 = value;
  let iter2 = iter;
  let tmp9 = value;
  if (!iter.done) {
    while (true) {
      value = obj3.get(iter2.value);
      let tmp12 = tmp7;
      let tmp13 = tmp8;
      if (null != value) {
        let value1 = obj.get(value.applicationId);
        tmp12 = tmp7;
        tmp13 = tmp8;
        let tmp15 = value1;
        if (null != value1) {
          if (null == tmp7) {
            arg1 = value1;
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
      let tmp8 = tmp13;
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
      arg1 = first;
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
    const first1 = activityApplications[0];
    arg1 = first1;
    found = activityApplications[1];
    let tmp22 = first1;
  } else {
    tmp22 = tmp19;
    if (null == found) {
      found = activityApplications[0];
      tmp22 = tmp19;
    }
  }
  obj = { firstBotApplication: tmp22, secondBotApplication: found };
  return obj;
};
