// Module ID: 8719
// Function ID: 8720
// Name: ApplicationCommandQueryApi
// Dependencies: [32, 19, 2067, 8591, 5305, 1074, 6941, 8599, 504, 8601, 1370, 1979, 8596, 8708, 6943, 2]
// Exports: executeQuery, getCachedApplicationSection, getCachedCommand, getCachedResults, getChangeKeys, useAccessibleCommandsForApplication, useCachedResults, useCommand, useCommandsForApplication, useDiscovery, useQuery

// Module 8719 (ApplicationCommandQueryApi)
import Constants from "Constants" /* 1074 */;
import Server from "Server" /* 1979 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 5305 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 6941 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 6943 */;
import ApplicationCommandQueryTypes from "ApplicationCommandQueryTypes" /* 8599 */;
import ApplicationCommandBuiltIns from "ApplicationCommandBuiltIns" /* 8601 */;
import CommandPermissionUtils from "CommandPermissionUtils" /* 8708 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import ApplicationCommandIndexStore_mod from "ApplicationCommandIndexStore" /* 8591 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const CommandPermissionUtilsAll = CommandPermissionUtils;
let _require;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function findCommandInSection(found, commandId) {
  let str;
  let closure_0 = commandId;
  if (null != commandId) {
    if (null != found.commands[commandId]) {
      return found.commands[commandId];
    } else {
      const _Object = Object;
      const values = Object.values(found.commands);
      found = values.find((rootCommand) => {
        rootCommand = rootCommand.rootCommand;
        let id;
        if (rootCommand != null) {
          id = rootCommand.id;
        }
        return id === closure_0;
      });
      let rootCommand;
      if (found != null) {
        rootCommand = found.rootCommand;
      }
      let command;
      if (null != rootCommand) {
        const application = found.descriptor.application;
        const obj = { rootCommand, command: rootCommand, applicationId: str };
        str = undefined;
        const buildCommand = ApplicationCommandUtils.buildCommand;
        ApplicationCommandUtils;
        if (application != null) {
          str = application.id;
        }
        if (str == null) {
          str = "";
        }
        command = buildCommand(obj);
      }
      return command;
    }
  }
}
let ApplicationCommandIndexStore = ApplicationCommandIndexStore_mod;
({ useContextIndexState: metroRequire, useDiscoveryState: metroImportDefault, useQueryState: metroImportAll, useUserIndexState: c9 } = ApplicationCommandIndexStore);
ApplicationCommandIndexStore = ApplicationCommandIndexStore_mod;
const BuiltInSectionId = ApplicationCommandConstants.BuiltInSectionId;
const NOOP = Constants.NOOP;
let items = [Server.ApplicationCommandType.CHAT];
let section = { id: "placeholder-section", type: ApplicationCommandTypes.ApplicationCommandSectionType.APPLICATION, name: "" };
let result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandQueryApi.tsx");

export const getCachedCommand = function getCachedCommand(type, commandId, applicationId) {
  let closure_0 = applicationId;
  if (null == commandId) {
    return { application: "Array", command: "add", section: "ao" };
  } else {
    const userState = ApplicationCommandIndexStore.getUserState();
    const result2 = userState.result;
    let sections;
    const contextState = ApplicationCommandIndexStore.getContextState(type);
    const _Object2 = Object;
    const values2 = Object.values;
    if (result2 != null) {
      sections = result2.sections;
    }
    if (sections == null) {
      sections = {};
    }
    const result = contextState.result;
    let sections1;
    const concat = values2(sections).concat;
    const _Object = Object;
    values2(sections);
    if (result != null) {
      sections1 = result.sections;
    }
    if (sections1 == null) {
      sections1 = {};
    }
    const combined = concat(values(sections1));
    if (null != applicationId) {
      const found = combined.find((descriptor) => {
        const application = descriptor.descriptor.application;
        let id;
        if (application != null) {
          id = application.id;
        }
        return id === closure_0;
      });
      if (null != found) {
        const obj = { application: found.descriptor.application, command: findCommandInSection(found, commandId), section: found.descriptor };
        return obj;
      }
    } else {
      const iter = combined[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp8 = findCommandInSection(nextResult, commandId);
        if (null != tmp8) {
          let obj2 = { application: nextResult.descriptor.application, command: tmp8, section: nextResult.descriptor };
          iter.return();
          return obj2;
        }
      }
    }
    return { application: "Array", command: "add", section: "ao" };
  }
};
export const getCachedApplicationSection = function getCachedApplicationSection(type, CHAT, applicationId) {
  const userState = ApplicationCommandIndexStore.getUserState();
  const contextState = ApplicationCommandIndexStore.getContextState(type);
  const result = userState.result;
  let tmp4;
  const applicationState = ApplicationCommandIndexStore.getApplicationState(applicationId);
  if (result != null) {
    const sections = result.sections;
    if (sections != null) {
      tmp4 = sections[applicationId];
    }
  }
  if (tmp4 == null) {
    const result2 = contextState.result;
    let tmp5;
    if (result2 != null) {
      const sections2 = result2.sections;
      if (sections2 != null) {
        tmp5 = sections2[applicationId];
      }
    }
    tmp4 = tmp5;
  }
  if (tmp4 == null) {
    const result3 = applicationState.result;
    let tmp6;
    if (result3 != null) {
      const sections3 = result3.sections;
      if (sections3 != null) {
        tmp6 = sections3[applicationId];
      }
    }
    tmp4 = tmp6;
  }
  let descriptor;
  if (tmp4 != null) {
    descriptor = tmp4.descriptor;
  }
  return descriptor;
};
export const getCachedResults = function getCachedResults(withAffinitySuggestions, CHAT, query) {
  const obj = { commandTypes: items, text: query };
  items = [CHAT];
  const obj2 = { scoreMethod: ApplicationCommandQueryTypes.ScoreMethod.COMMAND_OR_APPLICATION, allowFetch: false };
  query = ApplicationCommandIndexStore.query(withAffinitySuggestions, obj, obj2);
  return { commands: query.commands, sections: query.descriptors };
};
export const getChangeKeys = function getChangeKeys(type) {
  const userState = ApplicationCommandIndexStore.getUserState();
  const contextState = ApplicationCommandIndexStore.getContextState(type);
  let result;
  if (userState != null) {
    result = userState.result;
  }
  items = [result, ];
  let result1;
  if (contextState != null) {
    result1 = contextState.result;
  }
  items[1] = result1;
  return items;
};
export const useCachedResults = function useCachedResults(arg0, CHAT, text) {
  let closure_0 = CHAT;
  items = [CHAT];
  const obj = {
    commandTypes: react.useMemo(() => {
      items = [closure_0];
      return items;
    }, items),
    text
  };
  const obj2 = { scoreMethod: ApplicationCommandQueryTypes.ScoreMethod.COMMAND_OR_APPLICATION, allowFetch: false };
  const tmp = metroImportAll(arg0, obj, obj2);
  return { commands: tmp.commands, sections: tmp.descriptors };
};
export const useDiscovery = function useDiscovery(options) {
  let context;
  let filters;
  ({ context, filters } = options);
  options = options.options;
  let descriptors;
  let commands;
  let sectionedCommands;
  let loading;
  let filteredSectionId;
  let closure_8;
  let memo;
  let guild_id = null;
  const allowFetch = options.allowFetch;
  if ("channel" === context.type) {
    guild_id = context.channel.guild_id;
  }
  let obj = filters(guild_id[8]);
  items = [sectionedCommands];
  let items1 = [guild_id];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guild_id), items1);
  let obj2 = { allowFetch };
  const merged = Object.assign(options);
  let tmp4 = filteredSectionId(context, stateFromStores, filters, obj2);
  descriptors = tmp4.descriptors;
  commands = tmp4.commands;
  sectionedCommands = tmp4.sectionedCommands;
  loading = tmp4.loading;
  const tmp5 = descriptors(commands.useState(null), 2);
  filteredSectionId = tmp5[0];
  closure_8 = tmp5[1];
  let items2 = [filters.commandTypes, options.placeholderCount];
  memo = commands.useMemo(() => {
    let num2;
    let num = options.placeholderCount;
    if (num == null) {
      num = 0;
    }
    items = [];
    for (let num2 = 0; num2 < num; num2 = num2 + 1) {
      section = { type: tmp, inputType: ApplicationCommandTypes.ApplicationCommandInputType.PLACEHOLDER, id: "placeholder-" + num2, untranslatedName: "", displayName: "", untranslatedDescription: "", displayDescription: "", applicationId: "", section };
      let push = items.push;
      let _HermesInternal = HermesInternal;
      let arr = push(section);
    }
    return items;
  }, items2);
  let items3 = [loading, commands, descriptors, sectionedCommands, filteredSectionId, memo];
  return commands.useMemo(() => {
    let items4;
    const obj = {
      loading,
      commands,
      activeSections: descriptors,
      commandsByActiveSection: sectionedCommands,
      filteredSectionId,
      hasMoreAfter: false,
      placeholders: loading ? memo : [],
      sectionDescriptors: descriptors,
      filterSection(id) {
        closure_1_8(id);
      },
      scrollDown: NOOP
    };
    const tmp2 = loading;
    if (null != filteredSectionId) {
      let items1;
      let items3;
      const found = arr.find((section) => section.section.id === filteredSectionId);
      if (null != found) {
        items = [found.section];
        items1 = items;
      } else {
        items1 = [];
      }
      obj.activeSections = items1;
      if (null != found) {
        const items2 = [found];
        items3 = items2;
      } else {
        items3 = [];
      }
      obj.commandsByActiveSection = items3;
    }
    if (tmp2) {
      let tmp10;
      filteredSectionId = arr[0];
      if (null != filteredSectionId) {
        const obj2 = { section: filteredSectionId.section, data: items4 };
        items4 = [];
        HermesBuiltin.arraySpread(items4, memo, HermesBuiltin.arraySpread(items4, filteredSectionId.data, 0));
        const items5 = [obj2];
        HermesBuiltin.arraySpread(items5, sectionedCommands.slice(1), 1);
        obj.commandsByActiveSection = items5;
        tmp10 = memo;
      } else {
        const tmp9 = ApplicationCommandBuiltIns.BUILT_IN_SECTIONS[BuiltInSectionId.BUILT_IN];
        const items6 = [tmp9];
        obj.activeSections = items6;
        tmp10 = memo;
        const items7 = [{ section: tmp9, data: memo }];
        const obj3 = { section: tmp9, data: memo };
        obj.commandsByActiveSection = items7;
      }
      const items8 = [];
      HermesBuiltin.arraySpread(items8, tmp10, HermesBuiltin.arraySpread(items8, commands, 0));
      obj.commands = items8;
    }
    return obj;
  }, items3);
};
export const executeQuery = function executeQuery(withAffinitySuggestions, commandTypes, placeholderCount) {
  let commands;
  let descriptors;
  let loading;
  let num3;
  let tmp15;
  const query = ApplicationCommandIndexStore.query(withAffinitySuggestions, commandTypes, placeholderCount);
  ({ descriptors, commands, loading } = query);
  let num = 0;
  if (loading) {
    let num2 = placeholderCount.placeholderCount;
    if (num2 == null) {
      num2 = 0;
    }
    num = num2;
  }
  items = [];
  for (let num3 = 0; num3 < num; num3 = num3 + 1) {
    section = { type: tmp4, inputType: ApplicationCommandTypes.ApplicationCommandInputType.PLACEHOLDER, id: "placeholder-" + num3, untranslatedName: "", displayName: "", untranslatedDescription: "", displayDescription: "", applicationId: "", section };
    let push = items.push;
    let _HermesInternal = HermesInternal;
    let arr = push(section);
  }
  let tmp9 = commands;
  if (loading) {
    const items1 = [];
    HermesBuiltin.arraySpread(items1, items, HermesBuiltin.arraySpread(items1, commands, 0));
    tmp9 = items1;
  }
  const obj2 = { commands: tmp9, sections: tmp15 };
  tmp15 = descriptors;
  if (loading) {
    tmp15 = descriptors;
    if (0 === descriptors.length) {
      const items2 = [ApplicationCommandBuiltIns.BUILT_IN_SECTIONS[BuiltInSectionId.BUILT_IN]];
      tmp15 = items2;
    }
  }
  return obj2;
};
export const useQuery = function useQuery(arg0, commandTypes, placeholderCount) {
  let closure_0 = commandTypes;
  let obj = { allowFetch: true };
  const merged = Object.assign(placeholderCount);
  let tmp2 = closure_8(arg0, commandTypes, obj);
  const descriptors = tmp2.descriptors;
  const commands = tmp2.commands;
  const loading = tmp2.loading;
  items = [commandTypes.commandTypes, placeholderCount.placeholderCount];
  const memo = loading.useMemo(() => {
    let num2;
    let num = placeholderCount.placeholderCount;
    if (num == null) {
      num = 0;
    }
    items = [];
    for (let num2 = 0; num2 < num; num2 = num2 + 1) {
      section = { type: tmp, inputType: ApplicationCommandTypes.ApplicationCommandInputType.PLACEHOLDER, id: "placeholder-" + num2, untranslatedName: "", displayName: "", untranslatedDescription: "", displayDescription: "", applicationId: "", section };
      let push = items.push;
      let _HermesInternal = HermesInternal;
      let arr = push(section);
    }
    return items;
  }, items);
  let items1 = [loading, commands, descriptors, memo];
  return loading.useMemo(() => {
    let tmp4;
    if (loading) {
      items = [];
      HermesBuiltin.arraySpread(items, memo, HermesBuiltin.arraySpread(items, commands, 0));
      tmp4 = items;
    } else {
      tmp4 = tmp3;
    }
    const obj = { commands: tmp4, sections: null, scrollDown: null };
    if (loading) {
      let tmp11;
      if (0 === descriptors.length) {
        const items1 = [ApplicationCommandBuiltIns.BUILT_IN_SECTIONS[BuiltInSectionId.BUILT_IN]];
        tmp11 = items1;
      }
      obj.sections = tmp11;
      obj.scrollDown = NOOP;
      return obj;
    }
    tmp11 = descriptors;
  }, items1);
};
export const useCommand = function useCommand(arg0, commandId) {
  let closure_0 = commandId;
  const tmp = React4(true, true);
  let closure_1 = tmp;
  const tmp2 = metroRequire(arg0, true, true);
  let closure_2 = tmp2;
  items = [tmp2.result, tmp.result, commandId];
  return react.useMemo(() => {
    if (null != closure_0) {
      result2 = result.result;
      let sections;
      const _Object2 = Object;
      const values2 = Object.values;
      if (result2 != null) {
        sections = result2.sections;
      }
      if (sections == null) {
        sections = {};
      }
      result = result2.result;
      let sections1;
      const concat = values2(sections).concat;
      const _Object = Object;
      values2(sections);
      if (result != null) {
        sections1 = result.sections;
      }
      if (sections1 == null) {
        sections1 = {};
      }
      const combined = concat(values(sections1));
      for (const item10019 of combined) {
        let tmp8 = item10019.commands[closure_0];
        if (null != tmp8) {
          let obj = { command: tmp8, application: item10019.descriptor.application };
          obj3.return();
          return obj;
        }
      }
    }
    return { command: "Array", application: "channel" };
  }, items);
};
export const useCommandsForApplication = function useCommandsForApplication(arg0, arg1, arg2) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  const tmp = closure_9(true, true);
  let closure_2 = tmp;
  const tmp2 = closure_6(arg0, true, true);
  let closure_3 = tmp2;
  let result;
  const useMemo = react.useMemo;
  if (tmp != null) {
    result = tmp.result;
  }
  items = [result, , , ];
  let result1;
  if (tmp2 != null) {
    result1 = tmp2.result;
  }
  items[1] = result1;
  items[2] = arg1;
  items[3] = arg2;
  return useMemo(() => {
    let descriptor1;
    let mapped1;
    result = result.result;
    let tmp2;
    const tmp = result;
    if (result != null) {
      const sections = result.sections;
      if (sections != null) {
        tmp2 = sections[closure_0];
      }
    }
    result2 = result2.result;
    let tmp6;
    const tmp4 = null != tmp2;
    const tmp5 = result2;
    if (result2 != null) {
      const sections2 = result2.sections;
      if (sections2 != null) {
        tmp6 = sections2[closure_0];
      }
    }
    const result3 = tmp.result;
    let tmp9;
    const tmp8 = null != tmp6;
    if (result3 != null) {
      const sections3 = result3.sections;
      if (sections3 != null) {
        tmp9 = sections3[closure_0];
      }
    }
    if (tmp9 == null) {
      const result4 = tmp5.result;
      let tmp11;
      if (result4 != null) {
        tmp11 = result4.sections[closure_0];
      }
      tmp9 = tmp11;
    }
    commands = undefined;
    const _Object = Object;
    if (tmp9 != null) {
      commands = tmp9.commands;
    }
    if (commands == null) {
      commands = {};
    }
    const values2 = values(commands);
    const mapped = values2.map((rootCommand) => {
      let command = rootCommand;
      if (null != rootCommand.rootCommand) {
        const obj3 = { rootCommand: null, command: null, applicationId: null };
        ({ rootCommand: obj2.rootCommand, rootCommand: obj2.command, applicationId: obj2.applicationId } = rootCommand);
        const obj = closure_1_0(closure_1_2[6]);
        command = obj.buildCommand(obj3);
      }
      return command;
    });
    closure_0 = mapped.reduce((acc, id) => {
      acc[id.id] = id;
      return acc;
    }, {});
    let application;
    if (tmp9 != null) {
      const descriptor = tmp9.descriptor;
      if (descriptor != null) {
        application = descriptor.application;
      }
    }
    let obj = { application, commands: mapped1.filter(closure_0(sectionDescriptor[10]).isNotNullish), sectionDescriptor: descriptor1, isGuildInstalled: tmp8, isUserInstalled: tmp4 };
    mapped1 = closure_1.map((item) => closure_0[item]);
    descriptor1 = undefined;
    if (tmp9 != null) {
      descriptor1 = tmp9.descriptor;
    }
    return obj;
  }, items);
};
export const useAccessibleCommandsForApplication = function useAccessibleCommandsForApplication(channel, arg1, arg2) {
  let isUserInstalled;
  let items2;
  let obj = isUserInstalled;
  items = [channel];
  _require = arg1;
  let closure_1 = arg2;
  const memo = isUserInstalled.useMemo(() => ({ channel, type: "channel" }), items);
  let tmp2 = closure_9(true, true);
  let closure_2 = tmp2;
  let tmp3 = closure_6(memo, true, true);
  let closure_3 = tmp3;
  let result;
  const useMemo = isUserInstalled.useMemo;
  if (tmp2 != null) {
    result = tmp2.result;
  }
  const items1 = [result, , , ];
  let result1;
  if (tmp3 != null) {
    result1 = tmp3.result;
  }
  items1[1] = result1;
  items1[2] = arg1;
  items1[3] = arg2;
  const memo1 = useMemo(() => {
    let descriptor1;
    let mapped1;
    result = result.result;
    let tmp2;
    const tmp = result;
    if (result != null) {
      const sections = result.sections;
      if (sections != null) {
        tmp2 = sections[closure_0];
      }
    }
    result2 = result2.result;
    let tmp6;
    const tmp4 = null != tmp2;
    const tmp5 = result2;
    if (result2 != null) {
      const sections2 = result2.sections;
      if (sections2 != null) {
        tmp6 = sections2[closure_0];
      }
    }
    const result3 = tmp.result;
    let tmp9;
    const tmp8 = null != tmp6;
    if (result3 != null) {
      const sections3 = result3.sections;
      if (sections3 != null) {
        tmp9 = sections3[closure_0];
      }
    }
    if (tmp9 == null) {
      const result4 = tmp5.result;
      let tmp11;
      if (result4 != null) {
        tmp11 = result4.sections[closure_0];
      }
      tmp9 = tmp11;
    }
    commands = undefined;
    const _Object = Object;
    if (tmp9 != null) {
      commands = tmp9.commands;
    }
    if (commands == null) {
      commands = {};
    }
    const values2 = values(commands);
    const mapped = values2.map((rootCommand) => {
      let command = rootCommand;
      if (null != rootCommand.rootCommand) {
        const obj3 = { rootCommand: null, command: null, applicationId: null };
        ({ rootCommand: obj2.rootCommand, rootCommand: obj2.command, applicationId: obj2.applicationId } = rootCommand);
        const obj = closure_1_0(closure_1_2[6]);
        command = obj.buildCommand(obj3);
      }
      return command;
    });
    closure_0 = mapped.reduce((acc, id) => {
      acc[id.id] = id;
      return acc;
    }, {});
    let application;
    if (tmp9 != null) {
      const descriptor = tmp9.descriptor;
      if (descriptor != null) {
        application = descriptor.application;
      }
    }
    let obj = { application, commands: mapped1.filter(closure_0(sectionDescriptor[10]).isNotNullish), sectionDescriptor: descriptor1, isGuildInstalled: tmp8, isUserInstalled: tmp4 };
    mapped1 = closure_1.map((item) => closure_0[item]);
    descriptor1 = undefined;
    if (tmp9 != null) {
      descriptor1 = tmp9.descriptor;
    }
    return obj;
  }, items1);
  let commands = memo1.commands;
  const sectionDescriptor = memo1.sectionDescriptor;
  const isGuildInstalled = memo1.isGuildInstalled;
  isUserInstalled = memo1.isUserInstalled;
  let application = memo1.application;
  let obj2 = require("CommandPermissionContext");
  const permissionContext = obj2.usePermissionContext(channel, items);
  let obj3 = {
    application,
    commands: obj.useMemo(() => {
      let allowedForChannel;
      const arr = allowedForChannel;
      if (null != allowedForChannel) {
        let allowedForUser = null;
        if (null != allowedForUser.guild_id) {
          let tmp3 = sectionDescriptor;
          let permissions;
          if (sectionDescriptor != null) {
            permissions = tmp3.permissions;
          }
          allowedForUser = null;
          if (null != permissions) {
            let obj = commands(sectionDescriptor[13]);
            allowedForUser = obj.computeAllowedForUser(tmp3.permissions, tmp.guild_id, permissionContext.userId, permissionContext.roleIds, permissionContext.isImpersonating);
          }
        }
        allowedForChannel = null;
        if (null != allowedForUser.guild_id) {
          let permissions1;
          if (sectionDescriptor != null) {
            permissions1 = tmp10.permissions;
          }
          allowedForChannel = null;
          if (null != permissions1) {
            const obj2 = commands(sectionDescriptor[13]);
            allowedForChannel = obj2.computeAllowedForChannel(tmp10.permissions, tmp, tmp.guild_id);
          }
        }
        return arr.filter((item) => {
          let botId;
          const obj = { applicationAllowedForUser: allowedForUser, applicationAllowedForChannel: allowedForChannel, isGuildInstalled, isUserInstalled, commandBotId: botId };
          botId = undefined;
          const hasAccess = CommandPermissionUtilsAll.hasAccess;
          CommandPermissionUtilsAll;
          const tmp3 = permissionContext;
          if (sectionDescriptor != null) {
            botId = sectionDescriptor.botId;
          }
          const hasAccessResult = hasAccess(item, tmp3, obj);
          return hasAccessResult === CommandPermissionUtils.HasAccessResult.ALLOWED;
        });
      }
    }, items2)
  };
  items2 = [commands, permissionContext, sectionDescriptor, isGuildInstalled, isUserInstalled, channel];
  return obj3;
};
