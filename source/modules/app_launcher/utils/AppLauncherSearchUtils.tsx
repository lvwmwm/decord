// Module ID: 11187
// Function ID: 86962
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 7922, 7920, 7921, 11188, 4566, 4567, 7925, 1881, 7919, 8176, 11159, 11190, 22, 8182, 566, 8180, 11189, 11191, 2]
// Exports: bucketCommandSectionNameContains, bucketCommandSectionNameStartsWith, useGlobalSearchResults, useLocalSearchResults

// Module 11187 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import result from "result";
import closure_6 from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import { FetchState } from "_isNativeReflectConstruct";
import { BuiltInSectionId } from "TRUE_OPTION_NAME";
import { COMMAND_SENTINEL } from "MENTION_SENTINEL";

let closure_10;
let closure_7;
let closure_8;
let closure_9;
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
function useApplicationsInContext(allowFetch) {
  let context;
  let onlyWithCommands;
  ({ context, onlyWithCommands } = allowFetch);
  let flag = allowFetch.allowFetch;
  if (flag === undefined) {
    flag = true;
  }
  const includeEmbeddedApps = allowFetch.includeEmbeddedApps;
  let includeBuiltIn = allowFetch.includeNonEmbeddedApps;
  let channel;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  let obj = onlyWithCommands(7925);
  const items = [onlyWithCommands(1881).ApplicationCommandType.CHAT];
  const hasBaseAccessPermissions = obj.usePermissionContext(channel, items).hasBaseAccessPermissions;
  const tmp2 = callback2(context, hasBaseAccessPermissions, flag);
  let tmp3 = callback3(hasBaseAccessPermissions, flag);
  const items1 = [includeEmbeddedApps, includeBuiltIn, onlyWithCommands];
  const callback = React.useCallback((descriptor) => {
    const application = descriptor.descriptor.application;
    let tmp = null != application;
    if (tmp) {
      let tmp3 = !includeEmbeddedApps;
      if (!tmp3) {
        tmp3 = !onlyWithCommands(outer1_3[10]).isEmbeddedApp(application);
        const obj = onlyWithCommands(outer1_3[10]);
      }
      let tmp6 = !tmp3;
      if (tmp3) {
        let tmp7 = null != application && includeBuiltIn;
        if (tmp7) {
          tmp7 = !onlyWithCommands(outer1_3[10]).isEmbeddedApp(application);
          const obj2 = onlyWithCommands(outer1_3[10]);
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
    let _Object = Object;
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
    items2.push(onlyWithCommands(7919).FAKE_BUILT_IN_APP);
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
  let flag = context.includeBuiltIn;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = context.allowFetch;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let c2;
  let c3;
  let tmp = callback2(context, true, flag2);
  c2 = tmp;
  const tmp2 = callback3(true, flag2);
  c3 = tmp2;
  let items = [context, flag, tmp.fetchState.fetching, , , ];
  let result = tmp.result;
  let sections;
  if (null != result) {
    sections = result.sections;
  }
  items[3] = sections;
  items[4] = tmp2.fetchState.fetching;
  let result2 = tmp2.result;
  let sections1;
  if (null != result2) {
    sections1 = result2.sections;
  }
  items[5] = sections1;
  return React.useMemo(() => {
    let _undefined;
    let length;
    const result = obj.result;
    let sections;
    if (null != result) {
      sections = result.sections;
    }
    if (null == sections) {
      sections = {};
    }
    const result2 = _undefined.result;
    let sections1;
    if (null != result2) {
      sections1 = result2.sections;
    }
    if (null == sections1) {
      sections1 = {};
    }
    let items = [...Object.keys(sections)];
    const keys = Object.keys(sections1);
    HermesBuiltin.arraySpread(keys.filter((arg0) => !(arg0 in sections)), tmp);
    if (items1) {
      items.push(outer1_14.BUILT_IN);
    }
    items1 = [];
    obj = {};
    let num = 0;
    if (0 < items.length) {
      do {
        _undefined = items[num];
        let tmp5Result = tmp5();
        num = num + 1;
        length = items.length;
      } while (num < length);
    }
    obj = { commands: items1, commandSectionMap: obj };
    let tmp7 = true === obj.fetchState.fetching;
    if (!tmp7) {
      tmp7 = true === _undefined.fetchState.fetching;
    }
    obj.loading = tmp7;
    return obj;
  }, items);
}
function filterApplicationAllowed(type) {
  const _require = type;
  let channel;
  if ("channel" === type.type) {
    channel = type.channel;
  }
  const items = [_require(1881).ApplicationCommandType.CHAT, _require(1881).ApplicationCommandType.PRIMARY_ENTRY_POINT];
  let closure_1 = _require(7925).buildPermissionContext(channel, items);
  return (id) => {
    let closure_1;
    let closure_2;
    let sectionCommands;
    const context = closure_1.context;
    const userId = closure_1.userId;
    const roleIds = closure_1.roleIds;
    const isImpersonating = closure_1.isImpersonating;
    const tmp = outer1_8(descriptor, id.id);
    descriptor = tmp.descriptor;
    ({ sectionCommands, isGuildInstalled: closure_1, isUserInstalled: closure_2 } = tmp);
    let guild_id;
    if (null != context) {
      guild_id = context.guild_id;
    }
    let allowedForUser = null;
    if (null != guild_id) {
      let obj = outer1_2(outer1_3[11]);
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
      allowedForChannel = outer1_2(outer1_3[11]).computeAllowedForChannel(permissions1, context, context.guild_id);
      const obj2 = outer1_2(outer1_3[11]);
    }
    let tmp17 = null != sectionCommands;
    if (tmp17) {
      tmp17 = sectionCommands.length > 0;
    }
    let someResult = !tmp17;
    if (tmp17) {
      someResult = sectionCommands.some((arg0) => {
        let obj = outer2_2(outer2_3[11]);
        obj = { applicationAllowedForUser: allowedForUser, applicationAllowedForChannel: allowedForChannel };
        let botId;
        if (null != descriptor) {
          botId = descriptor.botId;
        }
        obj.commandBotId = botId;
        obj.isGuildInstalled = closure_1;
        obj.isUserInstalled = closure_2;
        return obj.hasAccess(arg0, outer1_1, obj) === descriptor(outer2_3[11]).HasAccessResult.ALLOWED;
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
  let closure_0 = arg0;
  return (FAKE_BUILT_IN_APP) => {
    const sectionName = lib(outer1_3[10]).getSectionName(FAKE_BUILT_IN_APP);
    const obj = lib(outer1_3[10]);
    return sectionName.toLocaleLowerCase().startsWith(lib.toLocaleLowerCase());
  };
}
function bucketApplicationNameContains(arg0) {
  let closure_0 = arg0;
  return (FAKE_BUILT_IN_APP) => {
    const sectionName = lib(outer1_3[10]).getSectionName(FAKE_BUILT_IN_APP);
    const obj = lib(outer1_3[10]);
    return sectionName.toLocaleLowerCase().includes(lib.toLocaleLowerCase());
  };
}
function bucketApplicationDescriptionStartsWith(arg0) {
  let closure_0 = arg0;
  return (FAKE_BUILT_IN_APP) => {
    const sectionDescription = lib(outer1_3[10]).getSectionDescription(FAKE_BUILT_IN_APP);
    let toLocaleLowerCaseResult;
    if (null != sectionDescription) {
      toLocaleLowerCaseResult = sectionDescription.toLocaleLowerCase();
    }
    let startsWithResult;
    if (null != toLocaleLowerCaseResult) {
      startsWithResult = toLocaleLowerCaseResult.startsWith(lib.toLocaleLowerCase());
    }
    return null != startsWithResult && startsWithResult;
  };
}
function bucketApplicationDescriptionContains(arg0) {
  let closure_0 = arg0;
  return (FAKE_BUILT_IN_APP) => {
    const sectionDescription = lib(outer1_3[10]).getSectionDescription(FAKE_BUILT_IN_APP);
    let toLocaleLowerCaseResult;
    if (null != sectionDescription) {
      toLocaleLowerCaseResult = sectionDescription.toLocaleLowerCase();
    }
    let hasItem;
    if (null != toLocaleLowerCaseResult) {
      hasItem = toLocaleLowerCaseResult.includes(lib.toLocaleLowerCase());
    }
    return null != hasItem && hasItem;
  };
}
function sortApplicationFreceny(id, id2) {
  const scoreWithoutLoadingLatest = store.getScoreWithoutLoadingLatest(id.id);
  return store.getScoreWithoutLoadingLatest(id2.id) - scoreWithoutLoadingLatest;
}
function sortApplicationAlpha(FAKE_BUILT_IN_APP, FAKE_BUILT_IN_APP) {
  const sectionName = require(7919) /* _createForOfIteratorHelperLoose */.getSectionName(FAKE_BUILT_IN_APP);
  const obj = require(7919) /* _createForOfIteratorHelperLoose */;
  return callback(sectionName, require(7919) /* _createForOfIteratorHelperLoose */.getSectionName(FAKE_BUILT_IN_APP));
}
function filterCommandAllowed(type) {
  const _require = type;
  let channel;
  if ("channel" === type.type) {
    channel = type.channel;
  }
  const items = [_require(1881).ApplicationCommandType.CHAT];
  let closure_1 = _require(7925).buildPermissionContext(channel, items);
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
    if (!(applicationId.applicationId in dependencyMap)) {
      const tmp3 = outer1_8(type, applicationId.applicationId);
      const descriptor = tmp3.descriptor;
      let guild_id;
      ({ isGuildInstalled, isUserInstalled } = tmp3);
      if (null != context) {
        guild_id = context.guild_id;
      }
      let allowedForUser = null;
      if (null != guild_id) {
        let obj = dependencyMap(outer1_3[11]);
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
        allowedForChannel = dependencyMap(outer1_3[11]).computeAllowedForChannel(permissions1, context, context.guild_id);
        const obj2 = dependencyMap(outer1_3[11]);
      }
      obj = { descriptor, applicationAllowedForUser: allowedForUser, applicationAllowedForChannel: allowedForChannel, isGuildInstalled, isUserInstalled };
      dependencyMap[applicationId.applicationId] = obj;
    }
    const descriptor2 = tmp21.descriptor;
    ({ applicationAllowedForChannel, applicationAllowedForUser, isGuildInstalled: isGuildInstalled2, isUserInstalled: isUserInstalled2 } = dependencyMap[applicationId.applicationId]);
    obj = { applicationAllowedForUser, applicationAllowedForChannel };
    let botId;
    if (null != descriptor2) {
      botId = descriptor2.botId;
    }
    obj.commandBotId = botId;
    obj.isGuildInstalled = isGuildInstalled2;
    obj.isUserInstalled = isUserInstalled2;
    const obj4 = dependencyMap(outer1_3[11]);
    const tmp22 = closure_1;
    return dependencyMap(outer1_3[11]).hasAccess(applicationId, closure_1, obj) === type(outer1_3[11]).HasAccessResult.ALLOWED;
  };
}
function defaultCommandBucketing(arg0) {
  const items = [bucketRootCommandNameStartsWith(arg0), bucketFullCommandNameStartsWith(arg0), bucketCommandNameContains(arg0), bucketOptionNameStartsWithOrCommandAndOptionStartsWith(arg0), bucketCommandOptionNameContains(arg0)];
  return items;
}
function bucketRootCommandNameStartsWith(arg0) {
  let closure_0 = arg0;
  return (arg0) => {
    let displayName;
    let untranslatedName;
    ({ untranslatedName, displayName } = arg0);
    let startsWithResult = untranslatedName.startsWith(closure_0);
    if (!startsWithResult) {
      startsWithResult = displayName.startsWith(closure_0);
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
  let substr = parts.slice(1);
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
  let closure_0 = arg0;
  return (arg0) => {
    let displayName;
    let untranslatedName;
    ({ untranslatedName, displayName } = arg0);
    let hasItem = untranslatedName.includes(closure_0);
    if (!hasItem) {
      hasItem = displayName.includes(closure_0);
    }
    return hasItem;
  };
}
function bucketOptionNameStartsWithOrCommandAndOptionStartsWith(arg0) {
  let closure_0 = arg0;
  return (options) => {
    let name;
    let serverLocalizedName;
    options = options.options;
    if (null == options) {
      options = [];
    }
    const tmpResult = outer1_16(options);
    let iter = tmpResult();
    if (!iter.done) {
      ({ name, serverLocalizedName } = iter.value);
      while (!name.startsWith(closure_0)) {
        let _HermesInternal = HermesInternal;
        let combined = "" + options.untranslatedName + " " + name;
        let tmp4 = closure_0;
        if (combined.startsWith(closure_0)) {
          break;
        } else {
          if (null == options.displayName) {
            if (null != serverLocalizedName) {
              let tmp6 = closure_0;
              if (!serverLocalizedName.startsWith(closure_0)) {
                let _HermesInternal3 = HermesInternal;
                let combined1 = "" + options.untranslatedName + " " + serverLocalizedName;
                let tmp7 = closure_0;
                if (!combined1.startsWith(closure_0)) {
                  if (null != options.displayName) {
                    let _HermesInternal4 = HermesInternal;
                    let combined2 = "" + options.displayName + " " + serverLocalizedName;
                    let tmp8 = closure_0;
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
            let tmp5 = closure_0;
            if (combined3.startsWith(closure_0)) {
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
  let closure_0 = arg0;
  return (options) => {
    let name;
    let serverLocalizedName;
    options = options.options;
    if (null == options) {
      options = [];
    }
    const tmpResult = outer1_16(options);
    let iter = tmpResult();
    if (!iter.done) {
      ({ name, serverLocalizedName } = iter.value);
      while (!name.includes(closure_0)) {
        if (null == serverLocalizedName) {
          let iter2 = tmpResult();
          iter = iter2;
        } else {
          let tmp4 = closure_0;
          if (serverLocalizedName.includes(closure_0)) {
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
  let closure_0 = arg0;
  return (arg0, arg1) => {
    const scoreWithoutLoadingLatest = outer1_6.getScoreWithoutLoadingLatest(closure_0, arg0);
    return outer1_6.getScoreWithoutLoadingLatest(closure_0, arg1) - scoreWithoutLoadingLatest;
  };
}
function sortCommandsAlpha(displayName, displayName2) {
  return callback(displayName.displayName, displayName2.displayName);
}
({ appLauncherOnlyCompareNames: closure_7, getSection: closure_8, useContextIndexState: closure_9, useUserIndexState: closure_10 } = _isNativeReflectConstruct);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/app_launcher/utils/AppLauncherSearchUtils.tsx");

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
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = {};
  return (applicationId) => {
    const lib = applicationId;
    if (applicationId.applicationId in table) {
      return table[applicationId.applicationId];
    } else {
      let FAKE_BUILT_IN_APP = lib.find((id) => id.id === applicationId.applicationId);
      if (null == FAKE_BUILT_IN_APP) {
        FAKE_BUILT_IN_APP = lib(outer1_3[10]).FAKE_BUILT_IN_APP;
      }
      const sectionName = lib(outer1_3[10]).getSectionName(FAKE_BUILT_IN_APP);
      const obj = lib(outer1_3[10]);
      const startsWithResult = sectionName.toLocaleLowerCase().startsWith(closure_1.toLocaleLowerCase());
      table[applicationId.applicationId] = startsWithResult;
      return startsWithResult;
    }
  };
}
export function bucketCommandSectionNameContains(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = {};
  return (applicationId) => {
    const lib = applicationId;
    if (applicationId.applicationId in table) {
      return table[applicationId.applicationId];
    } else {
      let FAKE_BUILT_IN_APP = lib.find((id) => id.id === applicationId.applicationId);
      if (null == FAKE_BUILT_IN_APP) {
        FAKE_BUILT_IN_APP = lib(outer1_3[10]).FAKE_BUILT_IN_APP;
      }
      const sectionName = lib(outer1_3[10]).getSectionName(FAKE_BUILT_IN_APP);
      const obj = lib(outer1_3[10]);
      const hasItem = sectionName.toLocaleLowerCase().includes(closure_1.toLocaleLowerCase());
      table[applicationId.applicationId] = hasItem;
      return hasItem;
    }
  };
}
export { defaultCommandsSort };
export { sortCommandsByFreceny };
export { sortCommandsAlpha };
export const useLocalSearchResults = function useLocalSearchResults(context) {
  context = context.context;
  let substr = str;
  const commandLimit = context.commandLimit;
  const applicationLimit = context.applicationLimit;
  let flag = context.searchesCommands;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = context.searchesBots;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let flag3 = context.searchesActivities;
  if (flag3 === undefined) {
    flag3 = true;
  }
  let commands;
  let commandSectionMap;
  let apps;
  let c10;
  let memo;
  let tmp = str;
  if (context.query.startsWith("" + COMMAND_SENTINEL)) {
    substr = str.substring(1);
    tmp = substr;
  }
  let tmp3 = useApplicationCommandsInContext({ context, includeBuiltIn: true });
  commands = tmp3.commands;
  commandSectionMap = tmp3.commandSectionMap;
  let loading = tmp3.loading;
  let obj = { context, onlyWithCommands: true, includeBuiltIn: true, includeEmbeddedApps: flag3, includeNonEmbeddedApps: flag2 };
  apps = useApplicationsInContext(obj).apps;
  obj = {};
  let guild_id = null;
  if ("channel" === context.type) {
    guild_id = context.channel.guild_id;
  }
  obj.guildId = guild_id;
  const tmp4Result = substr(applicationLimit[12])(obj);
  c10 = tmp4Result;
  let items = [flag, commands, commandLimit, context, tmp];
  memo = flag2.useMemo(() => {
    if (flag) {
      let obj = context(applicationLimit[13]);
      obj = { limit: commandLimit };
      const items = [outer1_28(context)];
      obj.filterPredicates = items;
      obj.bucketPredicates = outer1_29(substr);
      obj = {};
      let channel;
      if ("channel" === context.type) {
        channel = context.channel;
      }
      obj.channel = channel;
      obj.sortComparers = outer1_35(obj);
      let queryDataResult = obj.queryData(commands, obj);
      const tmp3 = commands;
      const tmp9 = outer1_35;
    } else {
      queryDataResult = [];
    }
    return queryDataResult;
  }, items);
  let items1 = [apps, memo, commandSectionMap];
  const memo1 = flag2.useMemo(() => {
    if (0 === memo.length) {
      return [];
    } else {
      const _Map = Map;
      const map = new Map(apps.map((id) => {
        const items = [id.id, id];
        return items;
      }));
      return substr(applicationLimit[14]).compact(memo.map((applicationId) => {
        const value = map.get(applicationId.applicationId);
        let tmp2 = null;
        if (null != value) {
          const obj = { command: applicationId, application: value };
          let tmp5 = null;
          if (null != outer1_8[applicationId.id]) {
            tmp5 = tmp4;
          }
          obj.section = tmp5;
          tmp2 = obj;
        }
        return tmp2;
      }));
    }
  }, items1);
  let items2 = [flag2, flag3, applicationLimit, context, tmp, apps, tmp4Result];
  const memo2 = flag2.useMemo(() => {
    const items = [];
    if (flag3) {
      const _Set = Set;
      const set = new Set(apps.map((id) => id.id));
      const push = items.push;
      const items1 = [];
      HermesBuiltin.arraySpread(apps, 0);
      HermesBuiltin.apply(items1, items);
      const push2 = items.push;
      const found = _undefined.filter((application) => !set.has(application.application.id));
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
    const items3 = [outer1_20(set)];
    obj.filterPredicates = items3;
    obj.bucketPredicates = outer1_21(substr);
    const items4 = [outer1_26, outer1_27];
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
  let substr = query;
  let flag = fetches.fetches;
  if (flag === undefined) {
    flag = true;
  }
  let num = fetches.pageLimit;
  if (num === undefined) {
    num = Infinity;
  }
  let dependencyMap;
  let guild_id;
  let first;
  let closure_6;
  let ref;
  let fetchState;
  let totalPages;
  let memo;
  let callback1;
  let tmp = query;
  if (query.startsWith("" + COMMAND_SENTINEL)) {
    substr = query.substring(1);
    tmp = substr;
  }
  const tmp3 = fetches.entrypoint === substr(8182).AppLauncherEntrypoint.VOICE;
  dependencyMap = tmp3;
  guild_id = undefined;
  if ("channel" === context.type) {
    guild_id = context.channel.guild_id;
  }
  const tmp5 = guild_id(first.useState(1), 2);
  first = tmp5[0];
  closure_6 = tmp5[1];
  ref = first.useRef(first);
  ref.current = first;
  let obj = substr(566);
  const items = [closure_12];
  const items1 = [tmp, guild_id, first, tmp3];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let obj = {};
    obj = { query: substr, guildId: guild_id, page: first, integrationType: substr(_undefined[17]).ApplicationIntegrationType.USER_INSTALL, minUserInstallCommandCount: 1, excludeAppsWithCustomInstallUrl: true, excludeNonEmbeddedApps: _undefined, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: true, source: substr(_undefined[18]).SearchAppsRequestSource.APP_LAUNCHER };
    let totalPages;
    obj.fetchState = outer1_12.getFetchState(obj);
    obj = { query: substr, guildId: guild_id, page: first, integrationType: substr(_undefined[17]).ApplicationIntegrationType.USER_INSTALL, minUserInstallCommandCount: 1, excludeAppsWithCustomInstallUrl: true, excludeNonEmbeddedApps: _undefined, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: true, source: substr(_undefined[18]).SearchAppsRequestSource.APP_LAUNCHER };
    const searchResults = outer1_12.getSearchResults(obj);
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
  memo = first.useMemo(() => {
    const obj = {};
    if (fetchState !== outer1_13.FETCHED) {
      if (fetchState !== outer1_13.ERROR) {
        let diff = first - 1;
      }
      obj.length = diff;
      return tmp2(obj, (arg0, arg1) => {
        let results;
        const searchResults = outer2_12.getSearchResults({ query: outer1_0, guildId: outer1_4, page: arg1 + 1, integrationType: substr(8180).ApplicationIntegrationType.USER_INSTALL, minUserInstallCommandCount: 1, excludeAppsWithCustomInstallUrl: true, excludeNonEmbeddedApps: outer1_3, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: true, source: substr(11189).SearchAppsRequestSource.APP_LAUNCHER });
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
  const callback = first.useCallback(() => {
    let tmp = fetchState === outer1_13.FETCHED;
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
  callback1 = first.useCallback((arg0) => {
    let guildId;
    let page;
    let query;
    ({ query, page, guildId } = arg0);
    let obj = num(_undefined[19]);
    obj = { query, guildId };
    obj = { page, integrationType: substr(_undefined[17]).ApplicationIntegrationType.USER_INSTALL, minUserInstallCommandCount: 1, excludeAppsWithCustomInstallUrl: true, excludeNonEmbeddedApps: _undefined, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: true, source: substr(_undefined[18]).SearchAppsRequestSource.APP_LAUNCHER };
    obj.options = obj;
    obj.search(obj);
  }, items4);
  const items5 = [tmp, guild_id, callback1, first, flag];
  const effect = first.useEffect(() => {
    if (flag) {
      const obj = { query: substr, page: first, guildId: guild_id };
      callback1(obj);
    }
  }, items5);
  const items6 = [guild_id, tmp];
  const effect1 = first.useEffect(() => {
    callback(1);
  }, items6);
  obj = { fetchState, applicationResults: memo.flat(), fetchNextPage: callback };
  return obj;
};
