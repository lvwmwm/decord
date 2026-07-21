// Module ID: 11176
// Function ID: 86899
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: bucketCommandSectionNameContains, bucketCommandSectionNameStartsWith, useGlobalSearchResults, useLocalSearchResults

// Module 11176 (_createForOfIteratorHelperLoose)
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
function useApplicationsInContext(allowFetch) {
  let context;
  let onlyWithCommands;
  ({ context, onlyWithCommands } = allowFetch);
  const arg1 = onlyWithCommands;
  let flag = allowFetch.allowFetch;
  if (flag === undefined) {
    flag = true;
  }
  const includeEmbeddedApps = allowFetch.includeEmbeddedApps;
  const importDefault = includeEmbeddedApps;
  let includeBuiltIn = allowFetch.includeNonEmbeddedApps;
  const importAll = includeBuiltIn;
  let channel;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  let obj = arg1(dependencyMap[8]);
  const items = [arg1(dependencyMap[9]).ApplicationCommandType.CHAT];
  const hasBaseAccessPermissions = obj.usePermissionContext(channel, items).hasBaseAccessPermissions;
  const tmp2 = callback3(context, hasBaseAccessPermissions, flag);
  const tmp3 = callback4(hasBaseAccessPermissions, flag);
  const items1 = [includeEmbeddedApps, includeBuiltIn, onlyWithCommands];
  const callback = React.useCallback((descriptor) => {
    const application = descriptor.descriptor.application;
    let tmp = null != application;
    if (tmp) {
      let tmp3 = !includeEmbeddedApps;
      if (!tmp3) {
        tmp3 = !onlyWithCommands(closure_3[10]).isEmbeddedApp(application);
        const obj = onlyWithCommands(closure_3[10]);
      }
      let tmp6 = !tmp3;
      if (tmp3) {
        let tmp7 = null != application && includeBuiltIn;
        if (tmp7) {
          tmp7 = !onlyWithCommands(closure_3[10]).isEmbeddedApp(application);
          const obj2 = onlyWithCommands(closure_3[10]);
        }
        if (tmp7) {
          let tmp11 = !onlyWithCommands;
          if (!tmp11) {
            const _Object = Object;
            tmp11 = Object.keys(descriptor.commands).length > 0;
          }
          tmp7 = tmp11;
        }
        tmp6 = tmp7;
      }
      tmp = tmp6;
    }
    return tmp;
  }, items1);
  const items2 = [];
  const set = new Set();
  if (null != tmp2.result) {
    const _Object = Object;
    let values = Object.values(tmp2.result.sections);
    for (let num = 0; num < values.length; num = num + 1) {
      let tmp5 = values[num];
      let application = tmp5.descriptor.application;
      let tmp6 = null != application && callback(tmp5);
      if (tmp6) {
        let arr = items2.push(application);
        let addResult = set.add(application.id);
      }
    }
  }
  if (null != tmp3.result) {
    const _Object2 = Object;
    values = Object.values(tmp3.result.sections);
    for (let num2 = 0; num2 < values.length; num2 = num2 + 1) {
      let tmp9 = values[num2];
      let application2 = tmp9.descriptor.application;
      let tmp10 = null != application2 && !set.has(application2.id) && callback(tmp9);
      if (tmp10) {
        arr = items2.push(application2);
      }
    }
  }
  if (includeBuiltIn) {
    includeBuiltIn = allowFetch.includeBuiltIn;
  }
  if (includeBuiltIn) {
    items2.push(arg1(dependencyMap[10]).FAKE_BUILT_IN_APP);
  }
  obj = { apps: items2 };
  let fetching;
  if (null != tmp2) {
    fetching = tmp2.fetchState.fetching;
  }
  let tmp16 = true === fetching;
  if (!tmp16) {
    let fetching1;
    if (null != tmp3) {
      fetching1 = tmp3.fetchState.fetching;
    }
    tmp16 = true === fetching1;
  }
  obj.loading = tmp16;
  return obj;
}
function useApplicationCommandsInContext(context) {
  context = context.context;
  const arg1 = context;
  let flag = context.includeBuiltIn;
  if (flag === undefined) {
    flag = true;
  }
  const importDefault = flag;
  let flag2 = context.allowFetch;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let importAll;
  let dependencyMap;
  const tmp = callback3(context, true, flag2);
  importAll = tmp;
  const tmp2 = callback4(true, flag2);
  dependencyMap = tmp2;
  const items = [context, flag, tmp.fetchState.fetching, , , ];
  const result = tmp.result;
  let sections;
  if (null != result) {
    sections = result.sections;
  }
  items[3] = sections;
  items[4] = tmp2.fetchState.fetching;
  const result2 = tmp2.result;
  let sections1;
  if (null != result2) {
    sections1 = result2.sections;
  }
  items[5] = sections1;
  return React.useMemo(() => {
    let length;
    const result = tmp.result;
    let sections;
    if (null != result) {
      sections = result.sections;
    }
    if (null == sections) {
      sections = {};
    }
    const context = sections;
    const result2 = tmp2.result;
    let sections1;
    if (null != result2) {
      sections1 = result2.sections;
    }
    if (null == sections1) {
      sections1 = {};
    }
    const items = [...Object.keys(sections)];
    const keys = Object.keys(sections1);
    HermesBuiltin.arraySpread(keys.filter((arg0) => !(arg0 in sections)), tmp);
    if (items1) {
      items.push(constants.BUILT_IN);
    }
    const items1 = [];
    let obj = {};
    let num = 0;
    if (0 < items.length) {
      do {
        closure_3 = items[num];
        let tmp5Result = tmp5();
        num = num + 1;
        length = items.length;
      } while (num < length);
    }
    obj = { commands: items1, commandSectionMap: obj };
    let tmp7 = true === tmp.fetchState.fetching;
    if (!tmp7) {
      tmp7 = true === tmp2.fetchState.fetching;
    }
    obj.loading = tmp7;
    return obj;
  }, items);
}
function filterApplicationAllowed(type) {
  const arg1 = type;
  let channel;
  if ("channel" === type.type) {
    channel = type.channel;
  }
  const items = [arg1(dependencyMap[9]).ApplicationCommandType.CHAT, arg1(dependencyMap[9]).ApplicationCommandType.PRIMARY_ENTRY_POINT];
  let closure_1 = arg1(dependencyMap[8]).buildPermissionContext(channel, items);
  return (id) => {
    let sectionCommands;
    const context = closure_1.context;
    const userId = closure_1.userId;
    const roleIds = closure_1.roleIds;
    const isImpersonating = closure_1.isImpersonating;
    const tmp = callback2(id, id.id);
    const descriptor = tmp.descriptor;
    id = descriptor;
    ({ sectionCommands, isGuildInstalled: closure_1, isUserInstalled: closure_2 } = tmp);
    let guild_id;
    if (null != context) {
      guild_id = context.guild_id;
    }
    let allowedForUser = null;
    if (null != guild_id) {
      const obj = callback(allowedForUser[11]);
      let permissions;
      if (null != descriptor) {
        permissions = descriptor.permissions;
      }
      allowedForUser = obj.computeAllowedForUser(permissions, context.guild_id, userId, roleIds, isImpersonating);
    }
    let guild_id1;
    if (null != context) {
      guild_id1 = context.guild_id;
    }
    let allowedForChannel = null;
    if (null != guild_id1) {
      let permissions1;
      if (null != descriptor) {
        permissions1 = descriptor.permissions;
      }
      allowedForChannel = callback(allowedForUser[11]).computeAllowedForChannel(permissions1, context, context.guild_id);
      const obj2 = callback(allowedForUser[11]);
    }
    let tmp17 = null != sectionCommands;
    if (tmp17) {
      tmp17 = sectionCommands.length > 0;
    }
    let someResult = !tmp17;
    if (tmp17) {
      someResult = sectionCommands.some((arg0) => {
        let obj = callback(allowedForUser[11]);
        obj = { applicationAllowedForUser: allowedForUser, applicationAllowedForChannel: allowedForChannel };
        let botId;
        if (null != descriptor) {
          botId = descriptor.botId;
        }
        obj.commandBotId = botId;
        obj.isGuildInstalled = closure_1;
        obj.isUserInstalled = callback;
        return obj.hasAccess(arg0, closure_1, obj) === descriptor(allowedForUser[11]).HasAccessResult.ALLOWED;
      });
    }
    return someResult;
  };
}
function defaultApplicationBucketing(arg0) {
  const items = [bucketApplicationNameStartsWith(arg0), bucketApplicationNameContains(arg0), bucketApplicationDescriptionStartsWith(arg0), bucketApplicationDescriptionContains(arg0)];
  return items;
}
function bucketApplicationNameStartsWith(arg0) {
  const arg1 = arg0;
  return (FAKE_BUILT_IN_APP) => {
    const sectionName = FAKE_BUILT_IN_APP(closure_3[10]).getSectionName(FAKE_BUILT_IN_APP);
    const obj = FAKE_BUILT_IN_APP(closure_3[10]);
    return sectionName.toLocaleLowerCase().startsWith(FAKE_BUILT_IN_APP.toLocaleLowerCase());
  };
}
function bucketApplicationNameContains(arg0) {
  const arg1 = arg0;
  return (FAKE_BUILT_IN_APP) => {
    const sectionName = FAKE_BUILT_IN_APP(closure_3[10]).getSectionName(FAKE_BUILT_IN_APP);
    const obj = FAKE_BUILT_IN_APP(closure_3[10]);
    return sectionName.toLocaleLowerCase().includes(FAKE_BUILT_IN_APP.toLocaleLowerCase());
  };
}
function bucketApplicationDescriptionStartsWith(arg0) {
  const arg1 = arg0;
  return (FAKE_BUILT_IN_APP) => {
    const sectionDescription = FAKE_BUILT_IN_APP(closure_3[10]).getSectionDescription(FAKE_BUILT_IN_APP);
    let toLocaleLowerCaseResult;
    if (null != sectionDescription) {
      toLocaleLowerCaseResult = sectionDescription.toLocaleLowerCase();
    }
    let startsWithResult;
    if (null != toLocaleLowerCaseResult) {
      startsWithResult = toLocaleLowerCaseResult.startsWith(FAKE_BUILT_IN_APP.toLocaleLowerCase());
    }
    return null != startsWithResult && startsWithResult;
  };
}
function bucketApplicationDescriptionContains(arg0) {
  const arg1 = arg0;
  return (FAKE_BUILT_IN_APP) => {
    const sectionDescription = FAKE_BUILT_IN_APP(closure_3[10]).getSectionDescription(FAKE_BUILT_IN_APP);
    let toLocaleLowerCaseResult;
    if (null != sectionDescription) {
      toLocaleLowerCaseResult = sectionDescription.toLocaleLowerCase();
    }
    let hasItem;
    if (null != toLocaleLowerCaseResult) {
      hasItem = toLocaleLowerCaseResult.includes(FAKE_BUILT_IN_APP.toLocaleLowerCase());
    }
    return null != hasItem && hasItem;
  };
}
function sortApplicationFreceny(id, id2) {
  const scoreWithoutLoadingLatest = store.getScoreWithoutLoadingLatest(id.id);
  return store.getScoreWithoutLoadingLatest(id2.id) - scoreWithoutLoadingLatest;
}
function sortApplicationAlpha(FAKE_BUILT_IN_APP, FAKE_BUILT_IN_APP) {
  const sectionName = FAKE_BUILT_IN_APP(dependencyMap[10]).getSectionName(FAKE_BUILT_IN_APP);
  const obj = FAKE_BUILT_IN_APP(dependencyMap[10]);
  return callback2(sectionName, FAKE_BUILT_IN_APP(dependencyMap[10]).getSectionName(FAKE_BUILT_IN_APP));
}
function filterCommandAllowed(type) {
  const arg1 = type;
  let channel;
  if ("channel" === type.type) {
    channel = type.channel;
  }
  const items = [arg1(dependencyMap[9]).ApplicationCommandType.CHAT];
  let closure_1 = arg1(dependencyMap[8]).buildPermissionContext(channel, items);
  let closure_2 = {};
  return (applicationId) => {
    let applicationAllowedForChannel;
    let applicationAllowedForUser;
    let isGuildInstalled;
    let isGuildInstalled2;
    let isUserInstalled;
    let isUserInstalled2;
    const context = closure_1.context;
    const userId = closure_1.userId;
    const roleIds = closure_1.roleIds;
    const isImpersonating = closure_1.isImpersonating;
    if (!(applicationId.applicationId in callback)) {
      const tmp3 = callback2(applicationId, applicationId.applicationId);
      const descriptor = tmp3.descriptor;
      let guild_id;
      ({ isGuildInstalled, isUserInstalled } = tmp3);
      if (null != context) {
        guild_id = context.guild_id;
      }
      let allowedForUser = null;
      if (null != guild_id) {
        let obj = callback(closure_3[11]);
        let permissions;
        if (null != descriptor) {
          permissions = descriptor.permissions;
        }
        allowedForUser = obj.computeAllowedForUser(permissions, context.guild_id, userId, roleIds, isImpersonating);
      }
      let guild_id1;
      if (null != context) {
        guild_id1 = context.guild_id;
      }
      let allowedForChannel = null;
      if (null != guild_id1) {
        let permissions1;
        if (null != descriptor) {
          permissions1 = descriptor.permissions;
        }
        allowedForChannel = callback(closure_3[11]).computeAllowedForChannel(permissions1, context, context.guild_id);
        const obj2 = callback(closure_3[11]);
      }
      obj = { descriptor, applicationAllowedForUser: allowedForUser, applicationAllowedForChannel: allowedForChannel, isGuildInstalled, isUserInstalled };
      callback[applicationId.applicationId] = obj;
    }
    const descriptor2 = tmp21.descriptor;
    ({ applicationAllowedForChannel, applicationAllowedForUser, isGuildInstalled: isGuildInstalled2, isUserInstalled: isUserInstalled2 } = callback[applicationId.applicationId]);
    obj = { applicationAllowedForUser, applicationAllowedForChannel };
    let botId;
    if (null != descriptor2) {
      botId = descriptor2.botId;
    }
    obj.commandBotId = botId;
    obj.isGuildInstalled = isGuildInstalled2;
    obj.isUserInstalled = isUserInstalled2;
    const obj4 = callback(closure_3[11]);
    const tmp22 = closure_1;
    return callback(closure_3[11]).hasAccess(applicationId, closure_1, obj) === applicationId(closure_3[11]).HasAccessResult.ALLOWED;
  };
}
function defaultCommandBucketing(arg0) {
  const items = [bucketRootCommandNameStartsWith(arg0), bucketFullCommandNameStartsWith(arg0), bucketCommandNameContains(arg0), bucketOptionNameStartsWithOrCommandAndOptionStartsWith(arg0), bucketCommandOptionNameContains(arg0)];
  return items;
}
function bucketRootCommandNameStartsWith(arg0) {
  const arg1 = arg0;
  return (arg0) => {
    let displayName;
    let untranslatedName;
    ({ untranslatedName, displayName } = arg0);
    let startsWithResult = untranslatedName.startsWith(arg0);
    if (!startsWithResult) {
      startsWithResult = displayName.startsWith(arg0);
    }
    return startsWithResult;
  };
}
function bucketFullCommandNameStartsWith(str) {
  let parts;
  if (null != str) {
    parts = str.split(" ");
  }
  let closure_0 = parts[0];
  const substr = parts.slice(1);
  let closure_1 = substr.join(" ");
  return (arg0) => {
    let displayName;
    let untranslatedName;
    ({ untranslatedName, displayName } = arg0);
    if (untranslatedName.startsWith(closure_0)) {
      const parts = untranslatedName.split(" ");
      const substr = parts.slice(1);
      const joined = substr.join(" ");
      if (joined.startsWith(closure_1)) {
        return true;
      }
    }
    if (displayName.startsWith(closure_0)) {
      const parts1 = displayName.split(" ");
      const substr1 = parts1.slice(1);
      const joined1 = substr1.join(" ");
      if (joined1.startsWith(closure_1)) {
        return true;
      }
    }
    return false;
  };
}
function bucketCommandNameContains(arg0) {
  const arg1 = arg0;
  return (arg0) => {
    let displayName;
    let untranslatedName;
    ({ untranslatedName, displayName } = arg0);
    let hasItem = untranslatedName.includes(arg0);
    if (!hasItem) {
      hasItem = displayName.includes(arg0);
    }
    return hasItem;
  };
}
function bucketOptionNameStartsWithOrCommandAndOptionStartsWith(arg0) {
  const arg1 = arg0;
  return (options) => {
    let name;
    let serverLocalizedName;
    options = options.options;
    if (null == options) {
      options = [];
    }
    const tmpResult = closure_16(options);
    let iter = tmpResult();
    if (!iter.done) {
      ({ name, serverLocalizedName } = iter.value);
      while (!name.startsWith(options)) {
        let _HermesInternal = HermesInternal;
        let combined = "" + options.untranslatedName + " " + name;
        let tmp4 = options;
        if (combined.startsWith(options)) {
          break;
        } else {
          if (null == options.displayName) {
            if (null != serverLocalizedName) {
              let tmp6 = options;
              if (!serverLocalizedName.startsWith(options)) {
                let _HermesInternal3 = HermesInternal;
                let combined1 = "" + options.untranslatedName + " " + serverLocalizedName;
                let tmp7 = options;
                if (!combined1.startsWith(options)) {
                  if (null != options.displayName) {
                    let _HermesInternal4 = HermesInternal;
                    let combined2 = "" + options.displayName + " " + serverLocalizedName;
                    let tmp8 = options;
                  }
                }
              }
              let flag = true;
              return true;
            }
            let iter2 = tmpResult();
            iter = iter2;
          } else {
            let _HermesInternal2 = HermesInternal;
            let combined3 = "" + options.displayName + " " + name;
            let tmp5 = options;
            if (combined3.startsWith(options)) {
              break;
            }
          }
          let flag2 = true;
          return true;
        }
      }
    }
    return false;
  };
}
function bucketCommandOptionNameContains(arg0) {
  const arg1 = arg0;
  return (options) => {
    let name;
    let serverLocalizedName;
    options = options.options;
    if (null == options) {
      options = [];
    }
    const tmpResult = closure_16(options);
    let iter = tmpResult();
    if (!iter.done) {
      ({ name, serverLocalizedName } = iter.value);
      while (!name.includes(options)) {
        if (null == serverLocalizedName) {
          let iter2 = tmpResult();
          iter = iter2;
        } else {
          let tmp4 = options;
          if (serverLocalizedName.includes(options)) {
            break;
          }
        }
        let flag = true;
        return true;
      }
    }
    return false;
  };
}
function defaultCommandsSort(arg0) {
  const items = [sortCommandsByFreceny(arg0), sortCommandsAlpha];
  return items;
}
function sortCommandsByFreceny(arg0) {
  const arg1 = arg0;
  return (arg0, arg1) => {
    const scoreWithoutLoadingLatest = store.getScoreWithoutLoadingLatest(arg0, arg0);
    return store.getScoreWithoutLoadingLatest(arg0, arg1) - scoreWithoutLoadingLatest;
  };
}
function sortCommandsAlpha(displayName, displayName2) {
  return callback2(displayName.displayName, displayName2.displayName);
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importAll(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
({ appLauncherOnlyCompareNames: closure_7, getSection: closure_8, useContextIndexState: closure_9, useUserIndexState: closure_10 } = arg1(dependencyMap[3]));
let closure_11 = importDefault(dependencyMap[4]);
let closure_12 = importDefault(dependencyMap[5]);
const FetchState = arg1(dependencyMap[5]).FetchState;
const BuiltInSectionId = arg1(dependencyMap[6]).BuiltInSectionId;
const COMMAND_SENTINEL = arg1(dependencyMap[7]).COMMAND_SENTINEL;
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/app_launcher/utils/AppLauncherSearchUtils.tsx");

export { useApplicationsInContext };
export { useApplicationCommandsInContext };
export { filterApplicationAllowed };
export { defaultApplicationBucketing };
export { bucketApplicationNameStartsWith };
export { bucketApplicationNameContains };
export { bucketApplicationDescriptionStartsWith };
export { bucketApplicationDescriptionContains };
export { sortApplicationFreceny };
export { sortApplicationAlpha };
export { filterCommandAllowed };
export { defaultCommandBucketing };
export { bucketRootCommandNameStartsWith };
export { bucketFullCommandNameStartsWith };
export { bucketCommandNameContains };
export { bucketOptionNameStartsWithOrCommandAndOptionStartsWith };
export { bucketCommandOptionNameContains };
export function bucketCommandSectionNameStartsWith(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  let closure_2 = {};
  return (applicationId) => {
    if (applicationId.applicationId in closure_2) {
      return closure_2[applicationId.applicationId];
    } else {
      let FAKE_BUILT_IN_APP = applicationId.find((id) => id.id === id.applicationId);
      if (null == FAKE_BUILT_IN_APP) {
        FAKE_BUILT_IN_APP = applicationId(closure_3[10]).FAKE_BUILT_IN_APP;
      }
      const sectionName = applicationId(closure_3[10]).getSectionName(FAKE_BUILT_IN_APP);
      const obj = applicationId(closure_3[10]);
      const startsWithResult = sectionName.toLocaleLowerCase().startsWith(arg1.toLocaleLowerCase());
      closure_2[applicationId.applicationId] = startsWithResult;
      return startsWithResult;
    }
  };
}
export function bucketCommandSectionNameContains(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  let closure_2 = {};
  return (applicationId) => {
    if (applicationId.applicationId in closure_2) {
      return closure_2[applicationId.applicationId];
    } else {
      let FAKE_BUILT_IN_APP = applicationId.find((id) => id.id === id.applicationId);
      if (null == FAKE_BUILT_IN_APP) {
        FAKE_BUILT_IN_APP = applicationId(closure_3[10]).FAKE_BUILT_IN_APP;
      }
      const sectionName = applicationId(closure_3[10]).getSectionName(FAKE_BUILT_IN_APP);
      const obj = applicationId(closure_3[10]);
      const hasItem = sectionName.toLocaleLowerCase().includes(arg1.toLocaleLowerCase());
      closure_2[applicationId.applicationId] = hasItem;
      return hasItem;
    }
  };
}
export { defaultCommandsSort };
export { sortCommandsByFreceny };
export { sortCommandsAlpha };
export const useLocalSearchResults = function useLocalSearchResults(context) {
  context = context.context;
  const arg1 = context;
  let importDefault = str;
  const commandLimit = context.commandLimit;
  const importAll = commandLimit;
  const applicationLimit = context.applicationLimit;
  const dependencyMap = applicationLimit;
  let flag = context.searchesCommands;
  if (flag === undefined) {
    flag = true;
  }
  let closure_4 = flag;
  let flag2 = context.searchesBots;
  if (flag2 === undefined) {
    flag2 = true;
  }
  const React = flag2;
  let flag3 = context.searchesActivities;
  if (flag3 === undefined) {
    flag3 = true;
  }
  let closure_6 = flag3;
  let commands;
  let commandSectionMap;
  let apps;
  let tmp4Result;
  let closure_11;
  let tmp = str;
  if (context.query.startsWith("" + COMMAND_SENTINEL)) {
    const substr = str.substring(1);
    importDefault = substr;
    tmp = substr;
  }
  const tmp3 = useApplicationCommandsInContext({ context, includeBuiltIn: true });
  commands = tmp3.commands;
  commandSectionMap = tmp3.commandSectionMap;
  let loading = tmp3.loading;
  let obj = { option: null, children: null, contentContainerStyles: null, context, includeEmbeddedApps: flag3, includeNonEmbeddedApps: flag2 };
  apps = useApplicationsInContext(obj).apps;
  obj = {};
  let guild_id = null;
  if ("channel" === context.type) {
    guild_id = context.channel.guild_id;
  }
  obj.guildId = guild_id;
  tmp4Result = importDefault(dependencyMap[12])(obj);
  const items = [flag, commands, commandLimit, context, tmp];
  const memo = React.useMemo(() => {
    if (flag) {
      let obj = context(applicationLimit[13]);
      obj = { limit: commandLimit };
      const items = [callback3(context)];
      obj.filterPredicates = items;
      obj.bucketPredicates = callback4(substr);
      obj = {};
      let channel;
      if ("channel" === context.type) {
        channel = context.channel;
      }
      obj.channel = channel;
      obj.sortComparers = closure_35(obj);
      let queryDataResult = obj.queryData(commands, obj);
      const tmp3 = commands;
      const tmp9 = closure_35;
    } else {
      queryDataResult = [];
    }
    return queryDataResult;
  }, items);
  closure_11 = memo;
  const items1 = [apps, memo, commandSectionMap];
  const memo1 = React.useMemo(() => {
    if (0 === memo.length) {
      return [];
    } else {
      const _Map = Map;
      const map = new Map(apps.map((id) => {
        const items = [id.id, id];
        return items;
      }));
      const context = map;
      return substr(applicationLimit[14]).compact(memo.map((applicationId) => {
        const value = map.get(applicationId.applicationId);
        let tmp2 = null;
        if (null != value) {
          const obj = { command: applicationId, application: value };
          let tmp5 = null;
          if (null != closure_8[applicationId.id]) {
            tmp5 = tmp4;
          }
          obj.section = tmp5;
          tmp2 = obj;
        }
        return tmp2;
      }));
    }
  }, items1);
  const items2 = [flag2, flag3, applicationLimit, context, tmp, apps, tmp4Result];
  const memo2 = React.useMemo(() => {
    const items = [];
    if (flag3) {
      const _Set = Set;
      const set = new Set(apps.map((id) => id.id));
      const context = set;
      const push = items.push;
      const items1 = [];
      HermesBuiltin.arraySpread(apps, 0);
      HermesBuiltin.apply(items1, items);
      const push2 = items.push;
      const found = tmp4Result.filter((application) => !set.has(application.application.id));
      const items2 = [];
      HermesBuiltin.arraySpread(found.map((application) => application.application), 0);
      HermesBuiltin.apply(items2, items);
      let tmp2 = items;
    } else {
      tmp2 = items;
      if (flag2) {
        tmp2 = apps;
      }
    }
    let obj = context(applicationLimit[13]);
    obj = { limit: applicationLimit };
    const items3 = [callback(context)];
    obj.filterPredicates = items3;
    obj.bucketPredicates = callback2(substr);
    const items4 = [closure_26, closure_27];
    obj.sortComparers = items4;
    return obj.queryData(tmp2, obj);
  }, items2);
  obj = { commandResults: memo1, hasCommandResults: tmp8, applicationResults: memo2, hasApplicationResults: tmp9 };
  let tmp10 = !tmp8;
  if (memo1.length <= 0) {
    tmp10 = !tmp9;
  }
  obj.isEmptyState = tmp10;
  if (loading) {
    loading = flag;
  }
  obj.loading = loading;
  return obj;
};
export const useGlobalSearchResults = function useGlobalSearchResults(fetches) {
  let context;
  let query;
  ({ context, query } = fetches);
  let arg1 = query;
  let flag = fetches.fetches;
  if (flag === undefined) {
    flag = true;
  }
  const importDefault = flag;
  let num = fetches.pageLimit;
  if (num === undefined) {
    num = Infinity;
  }
  const importAll = num;
  let dependencyMap;
  let callback;
  let React;
  let closure_6;
  let ref;
  let fetchState;
  let totalPages;
  let memo;
  let closure_11;
  let tmp = query;
  if (query.startsWith("" + COMMAND_SENTINEL)) {
    const substr = query.substring(1);
    arg1 = substr;
    tmp = substr;
  }
  const tmp3 = fetches.entrypoint === arg1(dependencyMap[15]).AppLauncherEntrypoint.VOICE;
  dependencyMap = tmp3;
  let guild_id;
  if ("channel" === context.type) {
    guild_id = context.channel.guild_id;
  }
  callback = guild_id;
  const tmp5 = callback(React.useState(1), 2);
  const first = tmp5[0];
  React = first;
  closure_6 = tmp5[1];
  ref = React.useRef(first);
  ref.current = first;
  let obj = arg1(dependencyMap[16]);
  const items = [closure_12];
  const items1 = [tmp, guild_id, first, tmp3];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let obj = {};
    obj = { query: substr, guildId: guild_id, page: first, integrationType: substr(tmp3[17]).ApplicationIntegrationType.USER_INSTALL, minUserInstallCommandCount: 1, excludeAppsWithCustomInstallUrl: true, excludeNonEmbeddedApps: tmp3, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: true, source: substr(tmp3[18]).SearchAppsRequestSource.APP_LAUNCHER };
    let totalPages;
    obj.fetchState = store.getFetchState(obj);
    obj = { query: substr, guildId: guild_id, page: first, integrationType: substr(tmp3[17]).ApplicationIntegrationType.USER_INSTALL, minUserInstallCommandCount: 1, excludeAppsWithCustomInstallUrl: true, excludeNonEmbeddedApps: tmp3, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: true, source: substr(tmp3[18]).SearchAppsRequestSource.APP_LAUNCHER };
    const searchResults = store.getSearchResults(obj);
    if (null != searchResults) {
      totalPages = searchResults.totalPages;
    }
    let num = 0;
    if (null != totalPages) {
      num = totalPages;
    }
    obj.totalPages = num;
    return obj;
  }, items1);
  fetchState = stateFromStoresObject.fetchState;
  totalPages = stateFromStoresObject.totalPages;
  const items2 = [fetchState, guild_id, tmp, first, tmp3];
  memo = React.useMemo(() => {
    const obj = {};
    if (fetchState !== constants.FETCHED) {
      if (fetchState !== constants.ERROR) {
        let diff = first - 1;
      }
      obj.length = diff;
      return tmp2(obj, (arg0, arg1) => {
        let results;
        const searchResults = searchResults.getSearchResults({ query: callback, guildId: closure_4, page: arg1 + 1, integrationType: callback(closure_3[17]).ApplicationIntegrationType.USER_INSTALL, minUserInstallCommandCount: 1, excludeAppsWithCustomInstallUrl: true, excludeNonEmbeddedApps: closure_3, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: true, source: callback(closure_3[18]).SearchAppsRequestSource.APP_LAUNCHER });
        if (null != searchResults) {
          results = searchResults.results;
        }
        if (null == results) {
          results = [];
        }
        return results;
      });
    }
    diff = first;
  }, items2);
  const items3 = [fetchState, num, memo, totalPages];
  const items4 = [tmp3];
  callback = React.useCallback(() => {
    let tmp = fetchState === constants.FETCHED;
    if (tmp) {
      tmp = length === ref.current;
    }
    if (tmp) {
      tmp = length > 0;
    }
    if (tmp) {
      tmp = length < totalPages;
    }
    if (tmp) {
      tmp = length < num;
    }
    if (tmp) {
      tmp = memo[length - 1].length > 0;
    }
    if (tmp) {
      ref.current = ref.current + 1;
      callback((arg0) => arg0 + 1);
    }
  }, items3);
  const callback1 = React.useCallback((arg0) => {
    let guildId;
    let page;
    let query;
    ({ query, page, guildId } = arg0);
    let obj = num(tmp3[19]);
    obj = { query, guildId };
    obj = { page, integrationType: substr(tmp3[17]).ApplicationIntegrationType.USER_INSTALL, excludeNonEmbeddedApps: tmp3, source: substr(tmp3[18]).SearchAppsRequestSource.APP_LAUNCHER };
    obj.options = obj;
    obj.search(obj);
  }, items4);
  closure_11 = callback1;
  const items5 = [tmp, guild_id, callback1, first, flag];
  const effect = React.useEffect(() => {
    if (flag) {
      const obj = { query: substr, page: first, guildId: guild_id };
      callback1(obj);
    }
  }, items5);
  const items6 = [guild_id, tmp];
  const effect1 = React.useEffect(() => {
    callback(1);
  }, items6);
  obj = { fetchState, applicationResults: memo.flat(), fetchNextPage: callback };
  return obj;
};
