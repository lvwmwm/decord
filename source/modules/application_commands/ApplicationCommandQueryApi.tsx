// Module ID: 8183
// Function ID: 64631
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: executeQuery, getCachedApplicationSection, getCachedCommand, getCachedResults, getChangeKeys, useAccessibleCommandsForApplication, useCachedResults, useCommand, useDiscovery, useQuery

// Module 8183 (_createForOfIteratorHelperLoose)
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
function findCommandInSection(found, commandKey) {
  if (null != commandKey) {
    if (null != found.commands[commandKey]) {
      return found.commands[commandKey];
    } else {
      const _Object = Object;
      const values = Object.values(found.commands);
      found = values.find((rootCommand) => {
        rootCommand = rootCommand.rootCommand;
        let id;
        if (null != rootCommand) {
          id = rootCommand.id;
        }
        return id === arg1;
      });
      let rootCommand;
      if (null != found) {
        rootCommand = found.rootCommand;
      }
      let command;
      if (null != rootCommand) {
        let obj = commandKey(dependencyMap[6]);
        obj = { rootCommand, command: rootCommand };
        const application = found.descriptor.application;
        let id;
        if (null != application) {
          id = application.id;
        }
        let str = "";
        if (null != id) {
          str = id;
        }
        obj.applicationId = str;
        command = obj.buildCommand(obj);
      }
      return command;
    }
  }
}
function useCommandsForApplication(closure_4, arg1, arg2) {
  const importAll = arg2;
  const tmp = callback4(true, true);
  const dependencyMap = tmp;
  const tmp2 = callback2(closure_4, true, true);
  let closure_3 = tmp2;
  let result;
  if (null != tmp) {
    result = tmp.result;
  }
  const items = [result, , , ];
  let result1;
  if (null != tmp2) {
    result1 = tmp2.result;
  }
  items[1] = result1;
  items[2] = arg1;
  items[3] = arg2;
  return React.useMemo(() => {
    const result = tmp.result;
    let tmp;
    if (null != result) {
      const sections = result.sections;
      if (null != sections) {
        tmp = sections[closure_0];
      }
    }
    const result2 = tmp2.result;
    let tmp4;
    if (null != result2) {
      const sections2 = result2.sections;
      if (null != sections2) {
        tmp4 = sections2[closure_0];
      }
    }
    const result3 = tmp.result;
    let tmp7;
    if (null != result3) {
      const sections3 = result3.sections;
      if (null != sections3) {
        tmp7 = sections3[closure_0];
      }
    }
    if (null == tmp7) {
      const result4 = tmp2.result;
      let tmp10;
      if (null != result4) {
        tmp10 = result4.sections[closure_0];
      }
      tmp7 = tmp10;
    }
    let commands;
    if (null != tmp7) {
      commands = tmp7.commands;
    }
    if (null == commands) {
      commands = {};
    }
    const values = Object.values(commands);
    const mapped = values.map((rootCommand) => {
      let command = rootCommand;
      if (null != rootCommand.rootCommand) {
        let obj = callback(closure_2[6]);
        obj = {};
        ({ rootCommand: obj2.rootCommand, rootCommand: obj2.command, applicationId: obj2.applicationId } = rootCommand);
        command = obj.buildCommand(obj);
      }
      return command;
    });
    const callback = mapped.reduce((arg0, id) => {
      arg0[id.id] = id;
      return arg0;
    }, {});
    const obj = {};
    let application;
    if (null != tmp7) {
      let descriptor = tmp7.descriptor;
      if (null != descriptor) {
        application = descriptor.application;
      }
    }
    obj.application = application;
    const mapped1 = arg2.map((arg0) => closure_0[arg0]);
    obj.commands = mapped1.filter(callback(tmp[10]).isNotNullish);
    descriptor = undefined;
    if (null != tmp7) {
      descriptor = tmp7.descriptor;
    }
    obj.sectionDescriptor = descriptor;
    obj.isGuildInstalled = null != tmp4;
    obj.isUserInstalled = null != tmp;
    return obj;
  }, items);
}
function createPlaceholderCommands(arg0, type) {
  const items = [];
  for (let num = 0; num < arg0; num = num + 1) {
    let tmp = createPlaceholderCommand;
    let arr = items.push(createPlaceholderCommand(num, type));
  }
  return items;
}
function createPlaceholderCommand(arg0, type) {
  const obj = { "Bool(false)": "relative", "Bool(false)": 20, "Bool(false)": "subheader_localized", "Bool(false)": "message", "Bool(false)": 21, "Bool(false)": "modal_top_pill_localized", "Bool(false)": "message", "Bool(false)": 7, type, inputType: type(dependencyMap[14]).ApplicationCommandInputType.PLACEHOLDER, id: "placeholder-" + arg0 };
  obj.section = obj;
  return obj;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ useContextIndexState: closure_6, useDiscoveryState: closure_7, useQueryState: closure_8, useUserIndexState: closure_9 } = arg1(dependencyMap[3]));
let closure_10 = importDefault(dependencyMap[3]);
const BuiltInSectionId = arg1(dependencyMap[4]).BuiltInSectionId;
const NOOP = arg1(dependencyMap[5]).NOOP;
const items = [arg1(dependencyMap[11]).ApplicationCommandType.CHAT];
const obj = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, type: arg1(dependencyMap[14]).ApplicationCommandSectionType.APPLICATION };
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/application_commands/ApplicationCommandQueryApi.tsx");

export const getCachedCommand = function getCachedCommand(arg0, commandKey) {
  commandKey = arg2;
  if (null == commandKey) {
    let obj = { application: undefined, command: undefined };
    return obj;
  } else {
    const userState = authStore.getUserState();
    const result2 = userState.result;
    let sections;
    const contextState = authStore.getContextState(arg0);
    if (null != result2) {
      sections = result2.sections;
    }
    if (null == sections) {
      sections = {};
    }
    const values = Object.values(sections);
    const result = contextState.result;
    let sections1;
    if (null != result) {
      sections1 = result.sections;
    }
    if (null == sections1) {
      sections1 = {};
    }
    const combined = values.concat(Object.values(sections1));
    if (null != arg2) {
      const found = combined.find((descriptor) => {
        const application = descriptor.descriptor.application;
        let id;
        if (null != application) {
          id = application.id;
        }
        return id === arg2;
      });
      if (null != found) {
        obj = { application: found.descriptor.application, command: findCommandInSection(found, commandKey) };
        return obj;
      }
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(combined);
      const iter = tmp2();
      let iter2 = iter;
      if (!iter.done) {
        const value = iter2.value;
        const tmp4 = findCommandInSection(value, commandKey);
        while (null == tmp4) {
          let iter3 = tmp2();
          iter2 = iter3;
        }
        const obj1 = { application: value.descriptor.application, command: tmp4 };
        return obj1;
      }
    }
    const obj2 = { application: undefined, command: undefined };
    return obj2;
  }
};
export const getCachedApplicationSection = function getCachedApplicationSection(arg0, CHAT, applicationId) {
  const userState = authStore.getUserState();
  const contextState = authStore.getContextState(arg0);
  const result = userState.result;
  let tmp4;
  const applicationState = authStore.getApplicationState(applicationId);
  if (null != result) {
    const sections = result.sections;
    if (null != sections) {
      tmp4 = sections[applicationId];
    }
  }
  if (null == tmp4) {
    const result2 = contextState.result;
    let tmp5;
    if (null != result2) {
      const sections2 = result2.sections;
      if (null != sections2) {
        tmp5 = sections2[applicationId];
      }
    }
    tmp4 = tmp5;
  }
  if (null == tmp4) {
    const result3 = applicationState.result;
    let tmp6;
    if (null != result3) {
      const sections3 = result3.sections;
      if (null != sections3) {
        tmp6 = sections3[applicationId];
      }
    }
    tmp4 = tmp6;
  }
  let descriptor;
  if (null != tmp4) {
    descriptor = tmp4.descriptor;
  }
  return descriptor;
};
export const getCachedResults = function getCachedResults(arg0, arg1, text) {
  let obj = { commandTypes: items, text };
  const items = [arg1];
  obj = { scoreMethod: arg1(dependencyMap[7]).ScoreMethod.COMMAND_OR_APPLICATION, allowFetch: false };
  const query = authStore.query(arg0, obj, obj);
  obj = { commands: query.commands, sections: query.descriptors };
  return obj;
};
export const getChangeKeys = function getChangeKeys(arg0) {
  const userState = authStore.getUserState();
  const contextState = authStore.getContextState(arg0);
  let result;
  if (null != userState) {
    result = userState.result;
  }
  const items = [result, ];
  let result1;
  if (null != contextState) {
    result1 = contextState.result;
  }
  items[1] = result1;
  return items;
};
export const useCachedResults = function useCachedResults(arg0, CHAT, text) {
  const items = [CHAT];
  let obj = {
    commandTypes: React.useMemo(() => {
      const items = [arg1];
      return items;
    }, items),
    text
  };
  const tmp = callback3(arg0, obj, { allowFetch: false });
  obj = { commands: tmp.commands, sections: tmp.descriptors };
  return obj;
};
export const useDiscovery = function useDiscovery(options) {
  let context;
  let filters;
  ({ context, filters } = options);
  const arg1 = filters;
  options = options.options;
  const importAll = options;
  let dependencyMap;
  let callback;
  let React;
  let closure_5;
  let loading;
  let first;
  let closure_8;
  let memo;
  let guild_id = null;
  if ("channel" === context.type) {
    guild_id = context.channel.guild_id;
  }
  dependencyMap = guild_id;
  let obj = arg1(dependencyMap[8]);
  const items = [closure_5];
  const items1 = [guild_id];
  const stateFromStores = obj.useStateFromStores(items, () => sectionedCommands.getGuild(guild_id), items1);
  obj = {};
  const merged = Object.assign(options);
  obj["allowFetch"] = options.allowFetch;
  const tmp4 = first(context, stateFromStores, filters, obj);
  const descriptors = tmp4.descriptors;
  callback = descriptors;
  const commands = tmp4.commands;
  React = commands;
  const sectionedCommands = tmp4.sectionedCommands;
  closure_5 = sectionedCommands;
  loading = tmp4.loading;
  const tmp5 = callback(React.useState(null), 2);
  first = tmp5[0];
  closure_8 = tmp5[1];
  const items2 = [filters.commandTypes, options.placeholderCount];
  memo = React.useMemo(() => {
    const placeholderCount = options.placeholderCount;
    let num = 0;
    if (null != placeholderCount) {
      num = placeholderCount;
    }
    return closure_19(num, filters.commandTypes[0]);
  }, items2);
  const items3 = [loading, commands, descriptors, sectionedCommands, first, memo];
  return React.useMemo(() => {
    let obj = {
      loading,
      commands,
      activeSections: descriptors,
      commandsByActiveSection: sectionedCommands,
      filteredSectionId: first,
      hasMoreAfter: false,
      placeholders: loading ? memo : [],
      sectionDescriptors: descriptors,
      filterSection(id) {
        callback(id);
      },
      scrollDown: closure_12
    };
    if (null == first) {
      if (!loading) {
        return obj;
      } else {
        let first = sectionedCommands[0];
        if (null != first) {
          obj = { section: first.section };
          const items = [];
          HermesBuiltin.arraySpread(memo, HermesBuiltin.arraySpread(first.data, 0));
          obj.data = items;
          const items1 = [obj];
          HermesBuiltin.arraySpread(sectionedCommands.slice(1), 1);
          obj.commandsByActiveSection = items1;
        } else {
          const tmp8 = filters(guild_id[9]).BUILT_IN_SECTIONS[closure_11.BUILT_IN];
          const items2 = [tmp8];
          obj.activeSections = items2;
          obj = { section: tmp8, data: memo };
          const items3 = [obj];
          obj.commandsByActiveSection = items3;
        }
        first = [];
        HermesBuiltin.arraySpread(memo, HermesBuiltin.arraySpread(commands, 0));
        obj.commands = first;
      }
    } else {
      const found = sectionedCommands.find((section) => section.section.id === closure_7);
      if (null != found) {
        const items4 = [found.section];
        let items5 = items4;
      } else {
        items5 = [];
      }
      obj.activeSections = items5;
      if (null != found) {
        const items6 = [found];
        let items7 = items6;
      } else {
        items7 = [];
      }
      obj.commandsByActiveSection = items7;
    }
  }, items3);
};
export const executeQuery = function executeQuery(arg0, arg1, placeholderCount) {
  let commands;
  let descriptors;
  let loading;
  const query = authStore.query(arg0, arg1, placeholderCount);
  ({ descriptors, commands, loading } = query);
  let num = 0;
  if (loading) {
    placeholderCount = placeholderCount.placeholderCount;
    num = 0;
    if (null != placeholderCount) {
      num = placeholderCount;
    }
  }
  const tmp2Result = createPlaceholderCommands(num, arg1.commandTypes[0]);
  const obj = {};
  let tmp5 = commands;
  if (loading) {
    const items = [];
    HermesBuiltin.arraySpread(tmp2Result, HermesBuiltin.arraySpread(commands, 0));
    tmp5 = items;
  }
  obj.commands = tmp5;
  let tmp11 = descriptors;
  if (loading) {
    tmp11 = descriptors;
    if (0 === descriptors.length) {
      const items1 = [arg1(dependencyMap[9]).BUILT_IN_SECTIONS[closure_11.BUILT_IN]];
      tmp11 = items1;
    }
  }
  obj.sections = tmp11;
  return obj;
};
export const useQuery = function useQuery(arg0, commandTypes, placeholderCount) {
  const importAll = placeholderCount;
  const obj = {};
  const merged = Object.assign(placeholderCount);
  obj["allowFetch"] = true;
  const tmp2 = callback3(arg0, commandTypes, obj);
  const descriptors = tmp2.descriptors;
  const dependencyMap = descriptors;
  const commands = tmp2.commands;
  let closure_3 = commands;
  const loading = tmp2.loading;
  const React = loading;
  const items = [commandTypes.commandTypes, placeholderCount.placeholderCount];
  const memo = React.useMemo(() => {
    const placeholderCount = arg2.placeholderCount;
    let num = 0;
    if (null != placeholderCount) {
      num = placeholderCount;
    }
    return closure_19(num, arg1.commandTypes[0]);
  }, items);
  let closure_5 = memo;
  const items1 = [loading, commands, descriptors, memo];
  return React.useMemo(() => {
    const obj = {};
    if (loading) {
      const items = [];
      HermesBuiltin.arraySpread(memo, HermesBuiltin.arraySpread(tmp, 0));
      let tmp2 = items;
    } else {
      tmp2 = tmp;
    }
    obj.commands = tmp2;
    if (loading) {
      if (0 === descriptors.length) {
        const items1 = [arg1(descriptors[9]).BUILT_IN_SECTIONS[closure_11.BUILT_IN]];
        let tmp9 = items1;
      }
      obj.sections = tmp9;
      obj.scrollDown = closure_12;
      return obj;
    }
    tmp9 = descriptors;
  }, items1);
};
export const useCommand = function useCommand(arg0, commandId) {
  const tmp = callback4(true, true);
  const importAll = tmp;
  const tmp2 = callback2(arg0, true, true);
  const dependencyMap = tmp2;
  const items = [tmp2.result, tmp.result, commandId];
  return React.useMemo(() => {
    if (null != arg1) {
      const result2 = tmp.result;
      let sections;
      if (null != result2) {
        sections = result2.sections;
      }
      if (null == sections) {
        sections = {};
      }
      const values = Object.values(sections);
      const result = tmp2.result;
      let sections1;
      if (null != result) {
        sections1 = result.sections;
      }
      if (null == sections1) {
        sections1 = {};
      }
      const tmp5Result = closure_15(values.concat(Object.values(sections1)));
      const iter = tmp5Result();
      let iter2 = iter;
      if (!iter.done) {
        const value = iter2.value;
        while (null == value.commands[closure_0]) {
          let iter3 = tmp5Result();
          iter2 = iter3;
        }
        const obj = { command: value.commands[closure_0], application: value.descriptor.application };
        return obj;
      }
      const tmp5 = closure_15;
    }
    return { command: undefined, application: undefined };
  }, items);
};
export { useCommandsForApplication };
export const useAccessibleCommandsForApplication = function useAccessibleCommandsForApplication(channel, arg1, arg2) {
  arg1 = channel;
  const items = [channel];
  const tmp = useCommandsForApplication(React.useMemo(() => ({ channel: arg0, type: "channel" }), items), arg1, arg2);
  const commands = tmp.commands;
  const importAll = commands;
  const sectionDescriptor = tmp.sectionDescriptor;
  const dependencyMap = sectionDescriptor;
  const isGuildInstalled = tmp.isGuildInstalled;
  let closure_3 = isGuildInstalled;
  const isUserInstalled = tmp.isUserInstalled;
  const React = isUserInstalled;
  let obj = arg1(dependencyMap[12]);
  const permissionContext = obj.usePermissionContext(channel, items);
  let closure_5 = permissionContext;
  obj = {
    application: tmp.application,
    commands: React.useMemo(() => {
      if (null != commands) {
        let allowedForUser = null;
        if (null != arg0.guild_id) {
          let permissions;
          if (null != sectionDescriptor) {
            permissions = sectionDescriptor.permissions;
          }
          allowedForUser = null;
          if (null != permissions) {
            const obj = commands(sectionDescriptor[13]);
            allowedForUser = obj.computeAllowedForUser(sectionDescriptor.permissions, arg0.guild_id, permissionContext.userId, permissionContext.roleIds, permissionContext.isImpersonating);
          }
        }
        const arg0 = allowedForUser;
        let allowedForChannel = null;
        if (null != arg0.guild_id) {
          let permissions1;
          if (null != sectionDescriptor) {
            permissions1 = sectionDescriptor.permissions;
          }
          allowedForChannel = null;
          if (null != permissions1) {
            allowedForChannel = commands(sectionDescriptor[13]).computeAllowedForChannel(sectionDescriptor.permissions, arg0, arg0.guild_id);
            const obj2 = commands(sectionDescriptor[13]);
          }
        }
        const commands = allowedForChannel;
        return commands.filter((arg0) => {
          let obj = allowedForChannel(botId[13]);
          obj = { applicationAllowedForUser: allowedForUser, applicationAllowedForChannel: allowedForChannel, isGuildInstalled: closure_3, isUserInstalled: closure_4 };
          let botId;
          if (null != botId) {
            botId = botId.botId;
          }
          obj.commandBotId = botId;
          return obj.hasAccess(arg0, closure_5, obj) === allowedForUser(botId[13]).HasAccessResult.ALLOWED;
        });
      }
    }, items1)
  };
  const items1 = [commands, permissionContext, sectionDescriptor, isGuildInstalled, isUserInstalled, channel];
  return obj;
};
