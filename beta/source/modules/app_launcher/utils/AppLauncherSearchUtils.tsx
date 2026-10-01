// Module ID: 11549
// Function ID: 11550
// Name: AppLauncherSearchUtils
// Dependencies: [32, 19, 8593, 8591, 8592, 11550, 5305, 5306, 8596, 1979, 8590, 8708, 11521, 11552, 12, 8712, 504, 8505, 11551, 11553, 2]
// Exports: bucketApplicationDescriptionContains, bucketApplicationDescriptionStartsWith, bucketApplicationNameContains, bucketApplicationNameStartsWith, bucketCommandNameContains, bucketCommandOptionNameContains, bucketCommandSectionNameContains, bucketCommandSectionNameStartsWith, bucketFullCommandNameStartsWith, bucketOptionNameStartsWithOrCommandAndOptionStartsWith, bucketRootCommandNameStartsWith, defaultApplicationBucketing, defaultCommandBucketing, defaultCommandsSort, filterApplicationAllowed, filterCommandAllowed, sortCommandsByFreceny, useApplicationCommandsInContext, useGlobalSearchResults, useLocalSearchResults

// Module 11549 (AppLauncherSearchUtils)
import Server from "Server" /* 1979 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 5305 */;
import ChannelAutocompleteConstants from "ChannelAutocompleteConstants" /* 5306 */;
import ApplicationIntegrationType from "ApplicationIntegrationType" /* 8505 */;
import AppLauncherUtils from "AppLauncherUtils" /* 8590 */;
import CommandPermissionContext from "CommandPermissionContext" /* 8596 */;
import ApplicationDirectorySearchStore2 from "ApplicationDirectorySearchStore" /* 11550 */;
import SearchAppsRequestSource from "SearchAppsRequestSource" /* 11551 */;
import ArraySearch from "ArraySearch" /* 11552 */;
import ApplicationDirectoryActionCreatorsAll from "ApplicationDirectoryActionCreators" /* 11553 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ApplicationCommandFrecencyStore from "ApplicationCommandFrecencyStore" /* 8593 */;
import ApplicationCommandIndexStore from "ApplicationCommandIndexStore" /* 8591 */;
import ApplicationFrecencyStore from "ApplicationFrecencyStore" /* 8592 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ApplicationDirectorySearchStore = ApplicationDirectorySearchStore2;
let _require, dependencyMap, map, searchResults, set;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
function useApplicationsInContext(allowFetch) {
  let context;
  let onlyWithCommands;
  let tmp28;
  ({ context, onlyWithCommands } = allowFetch);
  let flag = allowFetch.allowFetch;
  const includeBuiltIn = allowFetch.includeBuiltIn;
  if (flag === undefined) {
    flag = true;
  }
  const includeEmbeddedApps = allowFetch.includeEmbeddedApps;
  let includeNonEmbeddedApps = allowFetch.includeNonEmbeddedApps;
  let channel;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  const usePermissionContext = onlyWithCommands(8596).usePermissionContext;
  const tmp2 = onlyWithCommands(8596);
  const items = [onlyWithCommands(1979).ApplicationCommandType.CHAT];
  const hasBaseAccessPermissions = usePermissionContext(channel, items).hasBaseAccessPermissions;
  let tmp3 = closure_9(context, hasBaseAccessPermissions, flag);
  const tmp4 = closure_10(hasBaseAccessPermissions, flag);
  const items1 = [includeEmbeddedApps, includeNonEmbeddedApps, onlyWithCommands];
  const callback = react.useCallback((descriptor) => {
    const application = descriptor.descriptor.application;
    let tmp = null != application;
    if (tmp) {
      let tmp3 = !includeEmbeddedApps;
      if (includeEmbeddedApps) {
        const obj = AppLauncherUtils;
        tmp3 = !obj.isEmbeddedApp(application);
      }
      let tmp6 = !tmp3;
      if (tmp3) {
        let tmp7 = null != application && includeNonEmbeddedApps;
        if (tmp7) {
          const obj2 = AppLauncherUtils;
          tmp7 = !obj2.isEmbeddedApp(application);
        }
        if (tmp7) {
          let tmp11 = !onlyWithCommands;
          if (onlyWithCommands) {
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
  set = new Set();
  if (null != tmp3.result) {
    let _Object = Object;
    const values = Object.values(tmp3.result.sections);
    let tmp7 = values;
    for (const item10053 of values) {
      let application = item10053.descriptor.application;
      let tmp10 = application;
      let callbackResult = null != application;
      if (callbackResult) {
        callbackResult = callback(tmp9);
      }
      if (callbackResult) {
        let arr = items2.push(tmp10);
        let addResult = set.add(tmp10.id);
      }
      continue;
    }
  }
  if (null != tmp4.result) {
    const _Object2 = Object;
    const values2 = Object.values(tmp4.result.sections);
    for (const item10070 of values2) {
      let application2 = item10070.descriptor.application;
      let tmp18 = application2;
      let callbackResult1 = null != application2;
      let tmp17 = item10070;
      if (callbackResult1) {
        callbackResult1 = !set.has(tmp18.id);
      }
      if (callbackResult1) {
        callbackResult1 = callback(tmp17);
      }
      if (callbackResult1) {
        let arr2 = items2.push(tmp18);
      }
      continue;
    }
  }
  if (includeNonEmbeddedApps) {
    includeNonEmbeddedApps = includeBuiltIn;
  }
  if (includeNonEmbeddedApps) {
    items2.push(onlyWithCommands(8590).FAKE_BUILT_IN_APP);
  }
  let obj = { apps: items2, loading: tmp28 };
  let fetching;
  if (tmp3 != null) {
    fetching = tmp3.fetchState.fetching;
  }
  tmp28 = true === fetching;
  if (!tmp28) {
    let fetching1;
    if (tmp4 != null) {
      fetching1 = tmp4.fetchState.fetching;
    }
    tmp28 = true === fetching1;
  }
  return obj;
}
function sortApplicationFreceny(id, id2) {
  const scoreWithoutLoadingLatest = ApplicationFrecencyStore.getScoreWithoutLoadingLatest(id.id);
  return ApplicationFrecencyStore.getScoreWithoutLoadingLatest(id2.id) - scoreWithoutLoadingLatest;
}
function sortApplicationAlpha(FAKE_BUILT_IN_APP, FAKE_BUILT_IN_APP2) {
  const obj = AppLauncherUtils;
  const sectionName = obj.getSectionName(FAKE_BUILT_IN_APP);
  const obj2 = AppLauncherUtils;
  return metroImportDefault(sectionName, obj2.getSectionName(FAKE_BUILT_IN_APP));
}
function sortCommandsAlpha(displayName, displayName2) {
  return metroImportDefault(displayName.displayName, displayName2.displayName);
}
({ appLauncherOnlyCompareNames: metroImportDefault, getSection: metroImportAll, useContextIndexState: c9, useUserIndexState: c10 } = ApplicationCommandIndexStore);
const FetchState = ApplicationDirectorySearchStore2.FetchState;
const BuiltInSectionId = ApplicationCommandConstants.BuiltInSectionId;
const COMMAND_SENTINEL = ChannelAutocompleteConstants.COMMAND_SENTINEL;
let result = size.fileFinishedImporting("modules/app_launcher/utils/AppLauncherSearchUtils.tsx");

export { useApplicationsInContext };
export const useApplicationCommandsInContext = function useApplicationCommandsInContext(context) {
  context = context.context;
  let flag = context.includeBuiltIn;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = context.allowFetch;
  if (flag2 === undefined) {
    flag2 = true;
  }
  const tmp = closure_9(context, true, flag2);
  let closure_2 = tmp;
  const tmp2 = closure_10(true, flag2);
  let closure_3 = tmp2;
  const items = [context, flag, tmp.fetchState.fetching, , , ];
  const result = tmp.result;
  let sections;
  const useMemo = react.useMemo;
  if (result != null) {
    sections = result.sections;
  }
  items[3] = sections;
  items[4] = tmp2.fetchState.fetching;
  const result2 = tmp2.result;
  let sections1;
  if (result2 != null) {
    sections1 = result2.sections;
  }
  items[5] = sections1;
  return useMemo(() => {
    let items1;
    const result = commandSectionMap.result;
    let sections;
    if (result != null) {
      sections = result.sections;
    }
    if (sections == null) {
      sections = {};
    }
    const result2 = item10038.result;
    let sections1;
    if (result2 != null) {
      sections1 = result2.sections;
    }
    if (sections1 == null) {
      sections1 = {};
    }
    let items = [...Object.keys(sections)];
    const keys = Object.keys(sections1);
    HermesBuiltin.arraySpread(items, keys.filter((item) => !(item in sections)), tmp2);
    const tmp4 = items1;
    if (tmp4) {
      items.push(constants.BUILT_IN);
    }
    items1 = [];
    commandSectionMap = {};
    for (const item10038 of items) {
      let tmp7Result = tmp7();
      continue;
    }
    const obj2 = { commands: items1, commandSectionMap, loading: tmp9 };
    return obj2;
  }, items);
};
export const filterApplicationAllowed = function filterApplicationAllowed(type) {
  _require = type;
  let channel;
  const buildPermissionContext = require("CommandPermissionContext").buildPermissionContext;
  require("CommandPermissionContext");
  if ("channel" === type.type) {
    channel = type.channel;
  }
  const items = [require("Server").ApplicationCommandType.CHAT, require("Server").ApplicationCommandType.PRIMARY_ENTRY_POINT];
  let closure_1 = buildPermissionContext(channel, items);
  return (id) => {
    let closure_2;
    let descriptor;
    let isImpersonating;
    let isUserInstalled;
    let roleIds;
    let sectionCommands;
    let userId;
    ({ context, userId, roleIds, isImpersonating } = isGuildInstalled);
    let tmp = closure_1_8(descriptor, id.id);
    descriptor = tmp.descriptor;
    ({ sectionCommands, isGuildInstalled: closure_1, isUserInstalled: closure_2 } = tmp);
    let guild_id;
    if (context != null) {
      guild_id = context.guild_id;
    }
    let allowedForUser = null;
    if (null != guild_id) {
      let permissions;
      const computeAllowedForUser = closure_1_2(closure_1_3[11]).computeAllowedForUser;
      const tmp6 = closure_1_2(closure_1_3[11]);
      if (descriptor != null) {
        permissions = descriptor.permissions;
      }
      allowedForUser = computeAllowedForUser(permissions, context.guild_id, userId, roleIds, isImpersonating);
    }
    let guild_id1;
    if (context != null) {
      guild_id1 = context.guild_id;
    }
    let allowedForChannel = null;
    if (null != guild_id1) {
      let permissions1;
      const computeAllowedForChannel = closure_1_2(closure_1_3[11]).computeAllowedForChannel;
      closure_1_2(closure_1_3[11]);
      if (descriptor != null) {
        permissions1 = descriptor.permissions;
      }
      allowedForChannel = computeAllowedForChannel(permissions1, context, context.guild_id);
    }
    let someResult = !tmp19;
    if (null != sectionCommands && sectionCommands.length > 0) {
      someResult = sectionCommands.some((item) => {
        let botId;
        const obj = { applicationAllowedForUser: allowedForUser, applicationAllowedForChannel: allowedForChannel, commandBotId: botId, isGuildInstalled, isUserInstalled };
        botId = undefined;
        const hasAccess = commandLimit(applicationLimit[11]).hasAccess;
        commandLimit(applicationLimit[11]);
        const tmp = applicationLimit;
        const tmp3 = isGuildInstalled;
        if (descriptor != null) {
          botId = descriptor.botId;
        }
        const hasAccessResult = hasAccess(item, tmp3, obj);
        return hasAccessResult === context(tmp[11]).HasAccessResult.ALLOWED;
      });
    }
    return someResult;
  };
};
export function defaultApplicationBucketing(arg0) {
  const items = [
    (FAKE_BUILT_IN_APP) => {
      const obj = context(applicationLimit[10]);
      const sectionName = obj.getSectionName(FAKE_BUILT_IN_APP);
      const toLocaleLowerCaseResult = sectionName.toLocaleLowerCase();
      return toLocaleLowerCaseResult.startsWith(closure_0.toLocaleLowerCase());
    },
  ,
  ,

  ];
  items[1] = (FAKE_BUILT_IN_APP) => {
    const obj = context(applicationLimit[10]);
    const sectionName = obj.getSectionName(FAKE_BUILT_IN_APP);
    const toLocaleLowerCaseResult = sectionName.toLocaleLowerCase();
    return toLocaleLowerCaseResult.includes(closure_0.toLocaleLowerCase());
  };
  items[2] = (FAKE_BUILT_IN_APP) => {
    const obj = context(applicationLimit[10]);
    const sectionDescription = obj.getSectionDescription(FAKE_BUILT_IN_APP);
    let toLocaleLowerCaseResult;
    if (sectionDescription != null) {
      toLocaleLowerCaseResult = sectionDescription.toLocaleLowerCase();
    }
    flag = undefined;
    if (toLocaleLowerCaseResult != null) {
      flag = toLocaleLowerCaseResult.startsWith(closure_0.toLocaleLowerCase());
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  };
  let closure_0 = arg0;
  items[3] = (FAKE_BUILT_IN_APP) => {
    const obj = context(applicationLimit[10]);
    const sectionDescription = obj.getSectionDescription(FAKE_BUILT_IN_APP);
    let toLocaleLowerCaseResult;
    if (sectionDescription != null) {
      toLocaleLowerCaseResult = sectionDescription.toLocaleLowerCase();
    }
    flag = undefined;
    if (toLocaleLowerCaseResult != null) {
      flag = toLocaleLowerCaseResult.includes(closure_0.toLocaleLowerCase());
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  };
  return items;
}
export function bucketApplicationNameStartsWith(arg0) {
  let closure_0 = arg0;
  return (FAKE_BUILT_IN_APP) => {
    const obj = context(applicationLimit[10]);
    const sectionName = obj.getSectionName(FAKE_BUILT_IN_APP);
    const toLocaleLowerCaseResult = sectionName.toLocaleLowerCase();
    return toLocaleLowerCaseResult.startsWith(closure_0.toLocaleLowerCase());
  };
}
export function bucketApplicationNameContains(arg0) {
  let closure_0 = arg0;
  return (FAKE_BUILT_IN_APP) => {
    const obj = context(applicationLimit[10]);
    const sectionName = obj.getSectionName(FAKE_BUILT_IN_APP);
    const toLocaleLowerCaseResult = sectionName.toLocaleLowerCase();
    return toLocaleLowerCaseResult.includes(closure_0.toLocaleLowerCase());
  };
}
export function bucketApplicationDescriptionStartsWith(arg0) {
  let closure_0 = arg0;
  return (FAKE_BUILT_IN_APP) => {
    const obj = context(applicationLimit[10]);
    const sectionDescription = obj.getSectionDescription(FAKE_BUILT_IN_APP);
    let toLocaleLowerCaseResult;
    if (sectionDescription != null) {
      toLocaleLowerCaseResult = sectionDescription.toLocaleLowerCase();
    }
    flag = undefined;
    if (toLocaleLowerCaseResult != null) {
      flag = toLocaleLowerCaseResult.startsWith(closure_0.toLocaleLowerCase());
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  };
}
export function bucketApplicationDescriptionContains(arg0) {
  let closure_0 = arg0;
  return (FAKE_BUILT_IN_APP) => {
    const obj = context(applicationLimit[10]);
    const sectionDescription = obj.getSectionDescription(FAKE_BUILT_IN_APP);
    let toLocaleLowerCaseResult;
    if (sectionDescription != null) {
      toLocaleLowerCaseResult = sectionDescription.toLocaleLowerCase();
    }
    flag = undefined;
    if (toLocaleLowerCaseResult != null) {
      flag = toLocaleLowerCaseResult.includes(closure_0.toLocaleLowerCase());
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  };
}
export { sortApplicationFreceny };
export { sortApplicationAlpha };
export const filterCommandAllowed = function filterCommandAllowed(type) {
  _require = type;
  let channel;
  const buildPermissionContext = require("CommandPermissionContext").buildPermissionContext;
  require("CommandPermissionContext");
  const tmp = _require;
  if ("channel" === type.type) {
    channel = type.channel;
  }
  const items = [tmp(1979).ApplicationCommandType.CHAT];
  let closure_1 = buildPermissionContext(channel, items);
  let closure_2 = {};
  return (applicationId) => {
    let applicationAllowedForChannel;
    let applicationAllowedForUser;
    let botId;
    let isGuildInstalled;
    let isGuildInstalled2;
    let isImpersonating;
    let isUserInstalled;
    let isUserInstalled2;
    let roleIds;
    let userId;
    ({ context, userId, roleIds, isImpersonating } = closure_1);
    const tmp = closure_1;
    if (!(applicationId.applicationId in closure_2)) {
      const tmp5 = commandSectionMap(closure_0, applicationId.applicationId);
      const descriptor = tmp5.descriptor;
      let guild_id;
      ({ isGuildInstalled, isUserInstalled } = tmp5);
      if (context != null) {
        guild_id = context.guild_id;
      }
      let allowedForUser = null;
      if (null != guild_id) {
        let permissions;
        const computeAllowedForUser = commandLimit(applicationLimit[11]).computeAllowedForUser;
        const tmp11 = commandLimit(applicationLimit[11]);
        if (descriptor != null) {
          permissions = descriptor.permissions;
        }
        allowedForUser = computeAllowedForUser(permissions, context.guild_id, userId, roleIds, isImpersonating);
      }
      let guild_id1;
      if (context != null) {
        guild_id1 = context.guild_id;
      }
      let allowedForChannel = null;
      if (null != guild_id1) {
        let permissions1;
        const computeAllowedForChannel = commandLimit(applicationLimit[11]).computeAllowedForChannel;
        commandLimit(applicationLimit[11]);
        if (descriptor != null) {
          permissions1 = descriptor.permissions;
        }
        allowedForChannel = computeAllowedForChannel(permissions1, context, context.guild_id);
      }
      const obj = { descriptor, applicationAllowedForUser: allowedForUser, applicationAllowedForChannel: allowedForChannel, isGuildInstalled, isUserInstalled };
      closure_2[applicationId.applicationId] = obj;
    }
    const descriptor2 = tmp24.descriptor;
    ({ applicationAllowedForChannel, applicationAllowedForUser, isGuildInstalled: isGuildInstalled2, isUserInstalled: isUserInstalled2 } = closure_2[applicationId.applicationId]);
    const obj2 = { applicationAllowedForUser, applicationAllowedForChannel, commandBotId: botId, isGuildInstalled: isGuildInstalled2, isUserInstalled: isUserInstalled2 };
    botId = undefined;
    const hasAccess = commandLimit(applicationLimit[11]).hasAccess;
    commandLimit(applicationLimit[11]);
    if (descriptor2 != null) {
      botId = descriptor2.botId;
    }
    const hasAccessResult = hasAccess(applicationId, tmp, obj2);
    return hasAccessResult === closure_2_0(applicationLimit[11]).HasAccessResult.ALLOWED;
  };
};
export const defaultCommandBucketing = function defaultCommandBucketing(str) {
  let closure_0 = str;
  const items = [
    (arg0) => {
      let displayName;
      let untranslatedName;
      ({ untranslatedName, displayName } = arg0);
      const tmp2 = untranslatedName.startsWith(closure_0) || displayName.startsWith(closure_0);
      return tmp2;
    },
  ,
  ,
  ,

  ];
  let parts;
  if (str != null) {
    parts = str.split(" ");
  }
  const substr = parts.slice(1);
  let closure_1 = substr.join(" ");
  items[1] = (arg0) => {
    let displayName;
    let untranslatedName;
    ({ untranslatedName, displayName } = arg0);
    const tmp = closure_0;
    if (untranslatedName.startsWith(closure_0)) {
      const parts = untranslatedName.split(" ");
      substr = parts.slice(1);
      const joined = substr.join(" ");
      if (joined.startsWith(closure_1)) {
        return true;
      }
    }
    if (displayName.startsWith(tmp)) {
      const parts1 = displayName.split(" ");
      const substr1 = parts1.slice(1);
      const joined1 = substr1.join(" ");
      if (joined1.startsWith(closure_1)) {
        return true;
      }
    }
    return false;
  };
  items[2] = (arg0) => {
    let displayName;
    let untranslatedName;
    ({ untranslatedName, displayName } = arg0);
    const tmp2 = untranslatedName.includes(str2) || displayName.includes(str2);
    return tmp2;
  };
  items[3] = (options) => {
    options = options.options;
    if (options == null) {
      options = [];
    }
    const iter = options[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let name = nextResult.name;
      let tmp2 = name;
      let serverLocalizedName = nextResult.serverLocalizedName;
      let tmp3 = str2;
      if (!name.startsWith(str2)) {
        let _HermesInternal = HermesInternal;
        let combined = "" + options.untranslatedName + " " + tmp2;
        if (!combined.startsWith(tmp3)) {
          if (null == options.displayName) {
            if (null != serverLocalizedName) {
              if (!serverLocalizedName.startsWith(tmp3)) {
                let _HermesInternal3 = HermesInternal;
                let combined1 = "" + options.untranslatedName + " " + serverLocalizedName;
                if (!combined1.startsWith(tmp3)) {
                  if (null != options.displayName) {
                    let _HermesInternal4 = HermesInternal;
                    let combined2 = "" + options.displayName + " " + serverLocalizedName;
                  }
                }
              }
              iter.return();
              flag = true;
              return true;
            }
            continue;
          } else {
            let _HermesInternal2 = HermesInternal;
            let combined3 = "" + options.displayName + " " + tmp2;
          }
        }
      }
      iter.return();
      flag2 = true;
      return true;
    }
    return false;
  };
  closure_0 = str;
  items[4] = (options) => {
    let name;
    let serverLocalizedName;
    options = options.options;
    if (options == null) {
      options = [];
    }
    for (const item10008 of options) {
      ({ name, serverLocalizedName } = item10008);
      let tmp = str2;
      if (!name.includes(str2)) {
        let hasItem;
        if (serverLocalizedName != null) {
          hasItem = serverLocalizedName.includes(tmp);
        }
      }
      obj.return();
      flag = true;
      return true;
    }
    return false;
  };
  return items;
};
export function bucketRootCommandNameStartsWith(arg0) {
  let closure_0 = arg0;
  return (arg0) => {
    let displayName;
    let untranslatedName;
    ({ untranslatedName, displayName } = arg0);
    const tmp2 = untranslatedName.startsWith(closure_0) || displayName.startsWith(closure_0);
    return tmp2;
  };
}
export const bucketFullCommandNameStartsWith = function bucketFullCommandNameStartsWith(str) {
  let parts;
  if (str != null) {
    parts = str.split(" ");
  }
  let closure_0 = parts[0];
  const substr = parts.slice(1);
  let closure_1 = substr.join(" ");
  return (arg0) => {
    let displayName;
    let untranslatedName;
    ({ untranslatedName, displayName } = arg0);
    const tmp = closure_0;
    if (untranslatedName.startsWith(closure_0)) {
      const parts = untranslatedName.split(" ");
      substr = parts.slice(1);
      const joined = substr.join(" ");
      if (joined.startsWith(closure_1)) {
        return true;
      }
    }
    if (displayName.startsWith(tmp)) {
      const parts1 = displayName.split(" ");
      const substr1 = parts1.slice(1);
      const joined1 = substr1.join(" ");
      if (joined1.startsWith(closure_1)) {
        return true;
      }
    }
    return false;
  };
};
export function bucketCommandNameContains(arg0) {
  let closure_0 = arg0;
  return (arg0) => {
    let displayName;
    let untranslatedName;
    ({ untranslatedName, displayName } = arg0);
    const tmp2 = untranslatedName.includes(str2) || displayName.includes(str2);
    return tmp2;
  };
}
export function bucketOptionNameStartsWithOrCommandAndOptionStartsWith(arg0) {
  let closure_0 = arg0;
  return (options) => {
    options = options.options;
    if (options == null) {
      options = [];
    }
    const iter = options[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let name = nextResult.name;
      let tmp2 = name;
      let serverLocalizedName = nextResult.serverLocalizedName;
      let tmp3 = str2;
      if (!name.startsWith(str2)) {
        let _HermesInternal = HermesInternal;
        let combined = "" + options.untranslatedName + " " + tmp2;
        if (!combined.startsWith(tmp3)) {
          if (null == options.displayName) {
            if (null != serverLocalizedName) {
              if (!serverLocalizedName.startsWith(tmp3)) {
                let _HermesInternal3 = HermesInternal;
                let combined1 = "" + options.untranslatedName + " " + serverLocalizedName;
                if (!combined1.startsWith(tmp3)) {
                  if (null != options.displayName) {
                    let _HermesInternal4 = HermesInternal;
                    let combined2 = "" + options.displayName + " " + serverLocalizedName;
                  }
                }
              }
              iter.return();
              flag = true;
              return true;
            }
            continue;
          } else {
            let _HermesInternal2 = HermesInternal;
            let combined3 = "" + options.displayName + " " + tmp2;
          }
        }
      }
      iter.return();
      flag2 = true;
      return true;
    }
    return false;
  };
}
export function bucketCommandOptionNameContains(arg0) {
  let closure_0 = arg0;
  return (options) => {
    let name;
    let serverLocalizedName;
    options = options.options;
    if (options == null) {
      options = [];
    }
    for (const item10008 of options) {
      ({ name, serverLocalizedName } = item10008);
      let tmp = str2;
      if (!name.includes(str2)) {
        let hasItem;
        if (serverLocalizedName != null) {
          hasItem = serverLocalizedName.includes(tmp);
        }
      }
      obj.return();
      flag = true;
      return true;
    }
    return false;
  };
}
export function bucketCommandSectionNameStartsWith(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = {};
  return (applicationId) => {
    closure_0 = applicationId;
    if (applicationId.applicationId in closure_2) {
      return closure_2[applicationId.applicationId];
    } else {
      let FAKE_BUILT_IN_APP = closure_0.find((id) => id.id === applicationId.applicationId);
      const getSectionName = AppLauncherUtils.getSectionName;
      AppLauncherUtils;
      const tmp3 = require;
      if (FAKE_BUILT_IN_APP == null) {
        FAKE_BUILT_IN_APP = tmp3(8590).FAKE_BUILT_IN_APP;
      }
      const sectionName = getSectionName(FAKE_BUILT_IN_APP);
      const toLocaleLowerCaseResult = sectionName.toLocaleLowerCase();
      const startsWithResult = toLocaleLowerCaseResult.startsWith(closure_1.toLocaleLowerCase());
      closure_2[applicationId.applicationId] = startsWithResult;
      return startsWithResult;
    }
  };
}
export function bucketCommandSectionNameContains(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = {};
  return (applicationId) => {
    closure_0 = applicationId;
    if (applicationId.applicationId in closure_2) {
      return closure_2[applicationId.applicationId];
    } else {
      let FAKE_BUILT_IN_APP = closure_0.find((id) => id.id === applicationId.applicationId);
      const getSectionName = AppLauncherUtils.getSectionName;
      AppLauncherUtils;
      const tmp3 = require;
      if (FAKE_BUILT_IN_APP == null) {
        FAKE_BUILT_IN_APP = tmp3(8590).FAKE_BUILT_IN_APP;
      }
      const sectionName = getSectionName(FAKE_BUILT_IN_APP);
      const toLocaleLowerCaseResult = sectionName.toLocaleLowerCase();
      const hasItem = toLocaleLowerCaseResult.includes(closure_1.toLocaleLowerCase());
      closure_2[applicationId.applicationId] = hasItem;
      return hasItem;
    }
  };
}
export function defaultCommandsSort(arg0) {
  let closure_0 = arg0;
  const items = [
    (arg0, arg1) => {
      const scoreWithoutLoadingLatest = flag3.getScoreWithoutLoadingLatest(obj2, arg0);
      return flag3.getScoreWithoutLoadingLatest(obj2, arg1) - scoreWithoutLoadingLatest;
    },
    sortCommandsAlpha
  ];
  return items;
}
export function sortCommandsByFreceny(arg0) {
  let closure_0 = arg0;
  return (arg0, arg1) => {
    const scoreWithoutLoadingLatest = flag3.getScoreWithoutLoadingLatest(obj2, arg0);
    return flag3.getScoreWithoutLoadingLatest(obj2, arg1) - scoreWithoutLoadingLatest;
  };
}
export { sortCommandsAlpha };
export const useLocalSearchResults = function useLocalSearchResults(context) {
  context = context.context;
  const str = context.query;
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
  let closure_10;
  let memo1;
  let tmp = str;
  if (str.startsWith("" + COMMAND_SENTINEL)) {
    substr = str.substring(1);
    tmp = substr;
  }
  let obj = { context, includeBuiltIn: true };
  const context2 = obj.context;
  let flag4 = obj.includeBuiltIn;
  if (flag4 === undefined) {
    flag4 = true;
  }
  let flag5 = obj.allowFetch;
  if (flag5 === undefined) {
    flag5 = true;
  }
  let tmp3 = apps(context2, true, flag5);
  let closure_2 = tmp3;
  let tmp4 = closure_10(true, flag5);
  let closure_3 = tmp4;
  let obj2 = flag2;
  let items = [context2, flag4, tmp3.fetchState.fetching, , , ];
  let result = tmp3.result;
  let sections;
  const useMemo = flag2.useMemo;
  if (result != null) {
    sections = result.sections;
  }
  items[3] = sections;
  items[4] = tmp4.fetchState.fetching;
  let result2 = tmp4.result;
  let sections1;
  if (result2 != null) {
    sections1 = result2.sections;
  }
  items[5] = sections1;
  const memo = useMemo(() => {
    let items1;
    const result = commandSectionMap.result;
    let sections;
    if (result != null) {
      sections = result.sections;
    }
    if (sections == null) {
      sections = {};
    }
    const result2 = item10038.result;
    let sections1;
    if (result2 != null) {
      sections1 = result2.sections;
    }
    if (sections1 == null) {
      sections1 = {};
    }
    let items = [...Object.keys(sections)];
    const keys = Object.keys(sections1);
    HermesBuiltin.arraySpread(items, keys.filter((item) => !(item in sections)), tmp2);
    const tmp4 = items1;
    if (tmp4) {
      items.push(constants.BUILT_IN);
    }
    items1 = [];
    commandSectionMap = {};
    for (const item10038 of items) {
      let tmp7Result = tmp7();
      continue;
    }
    const obj2 = { commands: items1, commandSectionMap, loading: tmp9 };
    return obj2;
  }, items);
  commands = memo.commands;
  commandSectionMap = memo.commandSectionMap;
  let loading = memo.loading;
  apps = useApplicationsInContext({ context, onlyWithCommands: true, includeBuiltIn: true, includeEmbeddedApps: flag3, includeNonEmbeddedApps: flag2 }).apps;
  let guild_id = null;
  let tmp8 = substr(applicationLimit[12]);
  if ("channel" === context.type) {
    guild_id = context.channel.guild_id;
  }
  const tmp8Result = tmp8({ guildId: guild_id });
  closure_10 = tmp8Result;
  let items1 = [flag, commands, commandLimit, context, tmp];
  memo1 = obj2.useMemo(() => {
    let items1;
    let items2;
    let items3;
    let queryDataResult;
    let tmp = flag;
    if (tmp) {
      let tmp2 = require;
      let tmp3 = dependencyMap;
      let tmp4 = ArraySearch;
      let obj = { limit: commandLimit, filterPredicates: items1, bucketPredicates: items2, sortComparers: items3 };
      let tmp6 = commandLimit;
      let tmp7 = context;
      let closure_0 = context;
      let closure_1;
      let closure_2;
      const queryData = tmp4.queryData;
      let tmp5 = commands;
      let tmp8 = CommandPermissionContext;
      let channel;
      const buildPermissionContext = tmp8.buildPermissionContext;
      if ("channel" === context.type) {
        channel = tmp7.channel;
      }
      const items = [tmp2(1979).ApplicationCommandType.CHAT];
      buildPermissionContext(channel, items);
      closure_2 = {};
      items1 = [
        (applicationId) => {
            let applicationAllowedForChannel;
            let applicationAllowedForUser;
            let botId;
            let isGuildInstalled;
            let isGuildInstalled2;
            let isImpersonating;
            let isUserInstalled;
            let isUserInstalled2;
            let roleIds;
            let userId;
            ({ context, userId, roleIds, isImpersonating } = closure_1);
            const tmp = closure_1;
            if (!(applicationId.applicationId in closure_2)) {
              const tmp5 = commandSectionMap(closure_0, applicationId.applicationId);
              const descriptor = tmp5.descriptor;
              let guild_id;
              ({ isGuildInstalled, isUserInstalled } = tmp5);
              if (context != null) {
                guild_id = context.guild_id;
              }
              let allowedForUser = null;
              if (null != guild_id) {
                let permissions;
                const computeAllowedForUser = commandLimit(applicationLimit[11]).computeAllowedForUser;
                const tmp11 = commandLimit(applicationLimit[11]);
                if (descriptor != null) {
                  permissions = descriptor.permissions;
                }
                allowedForUser = computeAllowedForUser(permissions, context.guild_id, userId, roleIds, isImpersonating);
              }
              let guild_id1;
              if (context != null) {
                guild_id1 = context.guild_id;
              }
              let allowedForChannel = null;
              if (null != guild_id1) {
                let permissions1;
                const computeAllowedForChannel = commandLimit(applicationLimit[11]).computeAllowedForChannel;
                commandLimit(applicationLimit[11]);
                if (descriptor != null) {
                  permissions1 = descriptor.permissions;
                }
                allowedForChannel = computeAllowedForChannel(permissions1, context, context.guild_id);
              }
              const obj = { descriptor, applicationAllowedForUser: allowedForUser, applicationAllowedForChannel: allowedForChannel, isGuildInstalled, isUserInstalled };
              closure_2[applicationId.applicationId] = obj;
            }
            const descriptor2 = tmp24.descriptor;
            ({ applicationAllowedForChannel, applicationAllowedForUser, isGuildInstalled: isGuildInstalled2, isUserInstalled: isUserInstalled2 } = closure_2[applicationId.applicationId]);
            const obj2 = { applicationAllowedForUser, applicationAllowedForChannel, commandBotId: botId, isGuildInstalled: isGuildInstalled2, isUserInstalled: isUserInstalled2 };
            botId = undefined;
            const hasAccess = commandLimit(applicationLimit[11]).hasAccess;
            commandLimit(applicationLimit[11]);
            if (descriptor2 != null) {
              botId = descriptor2.botId;
            }
            const hasAccessResult = hasAccess(applicationId, tmp, obj2);
            return hasAccessResult === closure_2_0(applicationLimit[11]).HasAccessResult.ALLOWED;
          }
      ];
      const str2 = substr;
      items2 = [
        (arg0) => {
            let displayName;
            let untranslatedName;
            ({ untranslatedName, displayName } = arg0);
            const tmp2 = untranslatedName.startsWith(closure_0) || displayName.startsWith(closure_0);
            return tmp2;
          },
    ,
    ,
    ,

      ];
      closure_0 = undefined;
      closure_1 = undefined;
      let tmp10 = null;
      let parts;
      if (substr != null) {
        parts = str2.split(" ");
      }
      closure_0 = parts[0];
      substr = parts.slice(1);
      closure_1 = substr.join(" ");
      items2[1] = (arg0) => {
        let displayName;
        let untranslatedName;
        ({ untranslatedName, displayName } = arg0);
        const tmp = closure_0;
        if (untranslatedName.startsWith(closure_0)) {
          const parts = untranslatedName.split(" ");
          substr = parts.slice(1);
          const joined = substr.join(" ");
          if (joined.startsWith(closure_1)) {
            return true;
          }
        }
        if (displayName.startsWith(tmp)) {
          const parts1 = displayName.split(" ");
          const substr1 = parts1.slice(1);
          const joined1 = substr1.join(" ");
          if (joined1.startsWith(closure_1)) {
            return true;
          }
        }
        return false;
      };
      items2[2] = (arg0) => {
        let displayName;
        let untranslatedName;
        ({ untranslatedName, displayName } = arg0);
        const tmp2 = untranslatedName.includes(str2) || displayName.includes(str2);
        return tmp2;
      };
      items2[3] = (options) => {
        options = options.options;
        if (options == null) {
          options = [];
        }
        const iter = options[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let name = nextResult.name;
          let tmp2 = name;
          let serverLocalizedName = nextResult.serverLocalizedName;
          let tmp3 = str2;
          if (!name.startsWith(str2)) {
            let _HermesInternal = HermesInternal;
            let combined = "" + options.untranslatedName + " " + tmp2;
            if (!combined.startsWith(tmp3)) {
              if (null == options.displayName) {
                if (null != serverLocalizedName) {
                  if (!serverLocalizedName.startsWith(tmp3)) {
                    let _HermesInternal3 = HermesInternal;
                    let combined1 = "" + options.untranslatedName + " " + serverLocalizedName;
                    if (!combined1.startsWith(tmp3)) {
                      if (null != options.displayName) {
                        let _HermesInternal4 = HermesInternal;
                        let combined2 = "" + options.displayName + " " + serverLocalizedName;
                      }
                    }
                  }
                  iter.return();
                  flag = true;
                  return true;
                }
                continue;
              } else {
                let _HermesInternal2 = HermesInternal;
                let combined3 = "" + options.displayName + " " + tmp2;
              }
            }
          }
          iter.return();
          flag2 = true;
          return true;
        }
        return false;
      };
      items2[4] = (options) => {
        let name;
        let serverLocalizedName;
        options = options.options;
        if (options == null) {
          options = [];
        }
        for (const item10008 of options) {
          ({ name, serverLocalizedName } = item10008);
          let tmp = str2;
          if (!name.includes(str2)) {
            let hasItem;
            if (serverLocalizedName != null) {
              hasItem = serverLocalizedName.includes(tmp);
            }
          }
          obj.return();
          flag = true;
          return true;
        }
        return false;
      };
      let channel1;
      if ("channel" === tmp7.type) {
        channel1 = tmp7.channel;
      }
      let obj2 = { channel: channel1 };
      items3 = [
        (arg0, arg1) => {
            const scoreWithoutLoadingLatest = flag3.getScoreWithoutLoadingLatest(obj2, arg0);
            return flag3.getScoreWithoutLoadingLatest(obj2, arg1) - scoreWithoutLoadingLatest;
          },

      ];
      items3[1] = sortCommandsAlpha;
      queryDataResult = queryData(tmp5, obj);
    } else {
      queryDataResult = [];
    }
    return queryDataResult;
  }, items1);
  let items2 = [apps, memo1, commandSectionMap];
  const memo2 = obj2.useMemo(function() {
    const arr = memo1;
    if (0 === memo1.length) {
      return [];
    } else {
      const _Map = Map;
      let tmp2 = apps;
      const self = this;
      const self2 = this;
      map = new Map(apps.map((id) => {
        const items = [id.id, id];
        return items;
      }));
      let tmp4 = map;
      let obj = substr(applicationLimit[14]);
      return obj.compact(arr.map((applicationId) => {
        let tmp4;
        const value = map.get(applicationId.applicationId);
        let tmp2 = null;
        if (null != value) {
          const obj = { command: applicationId, application: value, section: tmp4 };
          tmp4 = commandSectionMap[applicationId.id];
          if (tmp4 == null) {
            tmp4 = null;
          }
          tmp2 = obj;
        }
        return tmp2;
      }));
    }
  }, items2);
  let items3 = [flag2, flag3, applicationLimit, context, tmp, apps, tmp8Result];
  const memo3 = obj2.useMemo(function() {
    let items4;
    let items5;
    let items6;
    let tmp3;
    const items = [];
    let tmp = flag3;
    if (tmp) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(apps.map((id) => id.id));
      const push = items.push;
      const items1 = [];
      HermesBuiltin.arraySpread(items1, apps, 0);
      HermesBuiltin.apply(push, items1, items);
      const push2 = items.push;
      const found = closure_10.filter((application) => !set.has(application.application.id));
      const items2 = [];
      HermesBuiltin.arraySpread(items2, found.map((application) => application.application), 0);
      const tmp19 = items2;
      HermesBuiltin.apply(push2, items2, items);
      tmp3 = items;
    } else {
      tmp3 = items;
      if (flag2) {
        tmp3 = apps;
      }
    }
    let obj = { limit: applicationLimit, filterPredicates: items4, bucketPredicates: items5, sortComparers: items6 };
    let closure_0 = context;
    let closure_1;
    const queryData = ArraySearch.queryData;
    ArraySearch;
    let channel;
    const buildPermissionContext = CommandPermissionContext.buildPermissionContext;
    CommandPermissionContext;
    const tmp25 = context;
    if ("channel" === context.type) {
      channel = tmp25.channel;
    }
    const items3 = [Server.ApplicationCommandType.CHAT, Server.ApplicationCommandType.PRIMARY_ENTRY_POINT];
    closure_1 = buildPermissionContext(channel, items3);
    items4 = [
      (id) => {
        let closure_2;
        let descriptor;
        let isImpersonating;
        let isUserInstalled;
        let roleIds;
        let sectionCommands;
        let userId;
        ({ context, userId, roleIds, isImpersonating } = isGuildInstalled);
        let tmp = closure_1_8(descriptor, id.id);
        descriptor = tmp.descriptor;
        ({ sectionCommands, isGuildInstalled: closure_1, isUserInstalled: closure_2 } = tmp);
        let guild_id;
        if (context != null) {
          guild_id = context.guild_id;
        }
        let allowedForUser = null;
        if (null != guild_id) {
          let permissions;
          const computeAllowedForUser = closure_1_2(closure_1_3[11]).computeAllowedForUser;
          const tmp6 = closure_1_2(closure_1_3[11]);
          if (descriptor != null) {
            permissions = descriptor.permissions;
          }
          allowedForUser = computeAllowedForUser(permissions, context.guild_id, userId, roleIds, isImpersonating);
        }
        let guild_id1;
        if (context != null) {
          guild_id1 = context.guild_id;
        }
        let allowedForChannel = null;
        if (null != guild_id1) {
          let permissions1;
          const computeAllowedForChannel = closure_1_2(closure_1_3[11]).computeAllowedForChannel;
          closure_1_2(closure_1_3[11]);
          if (descriptor != null) {
            permissions1 = descriptor.permissions;
          }
          allowedForChannel = computeAllowedForChannel(permissions1, context, context.guild_id);
        }
        let someResult = !tmp19;
        if (null != sectionCommands && sectionCommands.length > 0) {
          someResult = sectionCommands.some((item) => {
            let botId;
            const obj = { applicationAllowedForUser: allowedForUser, applicationAllowedForChannel: allowedForChannel, commandBotId: botId, isGuildInstalled, isUserInstalled };
            botId = undefined;
            const hasAccess = commandLimit(applicationLimit[11]).hasAccess;
            commandLimit(applicationLimit[11]);
            const tmp = applicationLimit;
            const tmp3 = isGuildInstalled;
            if (descriptor != null) {
              botId = descriptor.botId;
            }
            const hasAccessResult = hasAccess(item, tmp3, obj);
            return hasAccessResult === context(tmp[11]).HasAccessResult.ALLOWED;
          });
        }
        return someResult;
      }
    ];
    items5 = [
      (FAKE_BUILT_IN_APP) => {
        const obj = context(applicationLimit[10]);
        const sectionName = obj.getSectionName(FAKE_BUILT_IN_APP);
        const toLocaleLowerCaseResult = sectionName.toLocaleLowerCase();
        return toLocaleLowerCaseResult.startsWith(closure_0.toLocaleLowerCase());
      },
    ,
    ,

    ];
    items5[1] = (FAKE_BUILT_IN_APP) => {
      const obj = context(applicationLimit[10]);
      const sectionName = obj.getSectionName(FAKE_BUILT_IN_APP);
      const toLocaleLowerCaseResult = sectionName.toLocaleLowerCase();
      return toLocaleLowerCaseResult.includes(closure_0.toLocaleLowerCase());
    };
    items5[2] = (FAKE_BUILT_IN_APP) => {
      const obj = context(applicationLimit[10]);
      const sectionDescription = obj.getSectionDescription(FAKE_BUILT_IN_APP);
      let toLocaleLowerCaseResult;
      if (sectionDescription != null) {
        toLocaleLowerCaseResult = sectionDescription.toLocaleLowerCase();
      }
      flag = undefined;
      if (toLocaleLowerCaseResult != null) {
        flag = toLocaleLowerCaseResult.startsWith(closure_0.toLocaleLowerCase());
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    };
    closure_0 = substr;
    items5[3] = (FAKE_BUILT_IN_APP) => {
      const obj = context(applicationLimit[10]);
      const sectionDescription = obj.getSectionDescription(FAKE_BUILT_IN_APP);
      let toLocaleLowerCaseResult;
      if (sectionDescription != null) {
        toLocaleLowerCaseResult = sectionDescription.toLocaleLowerCase();
      }
      flag = undefined;
      if (toLocaleLowerCaseResult != null) {
        flag = toLocaleLowerCaseResult.includes(closure_0.toLocaleLowerCase());
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    };
    items6 = [sortApplicationFreceny, sortApplicationAlpha];
    return queryData(tmp3, obj);
  }, items3);
  const tmp12 = memo2.length > 0;
  const tmp13 = memo3.length > 0;
  const obj3 = { commandResults: memo2, hasCommandResults: tmp12, applicationResults: memo3, hasApplicationResults: tmp13, isEmptyState: !tmp12 && !tmp13, loading };
  if (loading) {
    loading = flag;
  }
  return obj3;
};
export const useGlobalSearchResults = function useGlobalSearchResults(fetches) {
  let context;
  let excludeNonEmbeddedApps;
  let first;
  let query;
  ({ context, query } = fetches);
  let flag = fetches.fetches;
  if (flag === undefined) {
    flag = true;
  }
  let num = fetches.pageLimit;
  if (num === undefined) {
    num = Infinity;
  }
  dependencyMap = undefined;
  let guild_id;
  let current;
  let closure_6;
  let ref;
  let fetchState;
  let totalPages;
  let memo;
  let callback1;
  const entrypoint = fetches.entrypoint;
  let tmp = query;
  if (query.startsWith("" + COMMAND_SENTINEL)) {
    const substr = query.substring(1);
    query = substr;
    tmp = substr;
  }
  const tmp3 = query;
  const tmp5 = entrypoint === query(8712).AppLauncherEntrypoint.VOICE;
  dependencyMap = tmp5;
  guild_id = undefined;
  if ("channel" === context.type) {
    guild_id = context.channel.guild_id;
  }
  const tmp7 = guild_id(current.useState(1), 2);
  current = tmp7[0];
  closure_6 = tmp7[1];
  ref = current.useRef(current);
  ref.current = current;
  const items = [ApplicationDirectorySearchStore];
  const items1 = [tmp, guild_id, current, tmp5];
  const tmp3Result = tmp3(504);
  const stateFromStoresObject = tmp3Result.useStateFromStoresObject(items, () => {
    let obj2;
    const obj = { fetchState: ApplicationDirectorySearchStore.getFetchState(obj2), totalPages: num };
    obj2 = { query, guildId: guild_id, page, integrationType: ApplicationIntegrationType.ApplicationIntegrationType.USER_INSTALL, minUserInstallCommandCount: 1, excludeAppsWithCustomInstallUrl: true, excludeNonEmbeddedApps, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: true, source: SearchAppsRequestSource.SearchAppsRequestSource.APP_LAUNCHER };
    const obj3 = { query, guildId: guild_id, page, integrationType: ApplicationIntegrationType.ApplicationIntegrationType.USER_INSTALL, minUserInstallCommandCount: 1, excludeAppsWithCustomInstallUrl: true, excludeNonEmbeddedApps, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: true, source: SearchAppsRequestSource.SearchAppsRequestSource.APP_LAUNCHER };
    searchResults = ApplicationDirectorySearchStore.getSearchResults(obj3);
    num = undefined;
    if (searchResults != null) {
      num = searchResults.totalPages;
    }
    if (num == null) {
      num = 0;
    }
    return obj;
  }, items1);
  fetchState = stateFromStoresObject.fetchState;
  totalPages = stateFromStoresObject.totalPages;
  const items2 = [fetchState, guild_id, tmp, current, tmp5];
  memo = current.useMemo(() => {
    let guildId;
    if (fetchState !== FetchState.FETCHED) {
      let diff;
      if (tmp3 !== FetchState.ERROR) {
        diff = first - 1;
      }
      let obj = { length: diff };
      return tmp2(obj, (arg0, arg1) => {
        const obj = { query, guildId, page: arg1 + 1, integrationType: query(excludeNonEmbeddedApps[17]).ApplicationIntegrationType.USER_INSTALL, minUserInstallCommandCount: 1, excludeAppsWithCustomInstallUrl: true, excludeNonEmbeddedApps, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: true, source: query(excludeNonEmbeddedApps[18]).SearchAppsRequestSource.APP_LAUNCHER };
        searchResults = searchResults.getSearchResults(obj);
        let results;
        if (searchResults != null) {
          results = searchResults.results;
        }
        if (results == null) {
          results = [];
        }
        return results;
      });
    }
    diff = first;
  }, items2);
  const items3 = [fetchState, num, memo, totalPages];
  const items4 = [tmp5];
  const callback = current.useCallback(() => {
    let tmp2 = fetchState === FetchState.FETCHED;
    const tmp = memo;
    if (tmp2) {
      tmp2 = length === ref.current;
    }
    if (tmp2) {
      tmp2 = length > 0;
    }
    if (tmp2) {
      tmp2 = length < totalPages;
    }
    if (tmp2) {
      tmp2 = length < num;
    }
    if (tmp2) {
      tmp2 = tmp[length - 1].length > 0;
    }
    if (tmp2) {
      ref.current = ref.current + 1;
      closure_6((arg0) => arg0 + 1);
    }
  }, items3);
  callback1 = current.useCallback((arg0) => {
    let guildId;
    let page;
    ({ query, page, guildId } = arg0);
    const obj2 = { query, guildId, options: { page, integrationType: ApplicationIntegrationType.ApplicationIntegrationType.USER_INSTALL, minUserInstallCommandCount: 1, excludeAppsWithCustomInstallUrl: true, excludeNonEmbeddedApps, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: true, source: SearchAppsRequestSource.SearchAppsRequestSource.APP_LAUNCHER } };
    const obj = ApplicationDirectoryActionCreatorsAll;
    ({ page, integrationType: ApplicationIntegrationType.ApplicationIntegrationType.USER_INSTALL, minUserInstallCommandCount: 1, excludeAppsWithCustomInstallUrl: true, excludeNonEmbeddedApps, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: true, source: SearchAppsRequestSource.SearchAppsRequestSource.APP_LAUNCHER });
    obj.search(obj2);
  }, items4);
  const items5 = [tmp, guild_id, callback1, current, flag];
  const effect = current.useEffect(() => {
    const tmp = flag;
    if (tmp) {
      const obj = { query, page, guildId: guild_id };
      callback1(obj);
    }
  }, items5);
  const items6 = [guild_id, tmp];
  const effect1 = current.useEffect(() => {
    closure_6(1);
  }, items6);
  let obj = { fetchState, applicationResults: memo.flat(), fetchNextPage: callback };
  return obj;
};
