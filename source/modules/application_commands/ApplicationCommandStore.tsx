// Module ID: 7012
// Function ID: 56282
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7012 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleInit() {
  let closure_10 = {};
  return true;
}
function getOrCreateChannelState(arg0) {
  if (!(arg0 in closure_10)) {
    const obj = { optionStates: {}, initialValues: {} };
    closure_10[arg0] = obj;
  }
  return closure_10[arg0];
}
function handleSetActiveCommand(channelId) {
  let _location;
  let command;
  let commandOrigin;
  let initialValues;
  let query;
  let queryLength;
  let searchResultsPosition;
  let section;
  let sectionName;
  let source;
  let triggerSection;
  ({ command, initialValues, source, commandOrigin } = channelId);
  let arg1;
  ({ section, location: _location, triggerSection, queryLength, sectionName, query, searchResultsPosition } = channelId);
  const tmp = getOrCreateChannelState(channelId.channelId);
  let id;
  if (null != command) {
    id = command.id;
  }
  const activeCommand = tmp.activeCommand;
  let id1;
  if (null != activeCommand) {
    id1 = activeCommand.id;
  }
  if (id === id1) {
    return false;
  } else {
    tmp.activeCommand = command;
    tmp.activeCommandSection = section;
    tmp.activeOptionName = null;
    tmp.preferredCommandId = null;
    if (null == initialValues) {
      initialValues = {};
    }
    tmp.initialValues = initialValues;
    let tmp4 = null;
    if (null != commandOrigin) {
      tmp4 = commandOrigin;
    }
    tmp.commandOrigin = tmp4;
    tmp.source = source;
    let obj = {};
    arg1 = obj;
    let options;
    if (null != command) {
      options = command.options;
    }
    if (null != options) {
      const options1 = command.options;
      const item = options1.forEach((name) => {
        obj[name.name] = { <string:1381477602>: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008276827310122181, <string:3886209422>: 3483072710087838000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, <string:478337893>: 1729581514092334600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, <string:2120507470>: 5839206235459723000000000 };
      });
    }
    tmp.optionStates = obj;
    if (null != command) {
      obj = { command, location: _location, triggerSection, queryLength, sectionName, query, searchResultsPosition, source };
      arg1(dependencyMap[8]).trackCommandSelected(obj);
      const obj2 = arg1(dependencyMap[8]);
    }
    return true;
  }
}
function handleSetPreferredCommand(commandId) {
  commandId = commandId.commandId;
  const tmp = getOrCreateChannelState(commandId.channelId);
  let flag = commandId !== tmp.preferredCommandId;
  if (flag) {
    let tmp3 = null !== tmp.preferredCommandId;
    if (!tmp3) {
      const activeCommand = tmp.activeCommand;
      let id;
      if (null != activeCommand) {
        id = activeCommand.id;
      }
      let tmp5 = null;
      if (null != id) {
        tmp5 = id;
      }
      tmp3 = commandId !== tmp5;
    }
    flag = tmp3;
  }
  if (flag) {
    tmp.activeCommand = null;
    tmp.activeOptionName = null;
    tmp.preferredCommandId = commandId;
    tmp.optionStates = {};
    flag = true;
  }
  return flag;
}
function handleUpdateOptionStates(channelId) {
  let arr2;
  let tmp9;
  const tmp = getOrCreateChannelState(channelId.channelId);
  let obj = {};
  const merged = Object.assign(tmp.optionStates);
  const entries = Object.entries(channelId.changedOptionStates);
  let num = 0;
  if (0 < entries.length) {
    do {
      let tmp7 = closure_7;
      let tmp8 = closure_7(entries[num], 2);
      [tmp9, arr2] = tmp8;
      let tmp10 = tmp3;
      let tmp11 = tmp4;
      let tmp12 = tmp5;
      let tmp13 = tmp6;
      if (tmp9 in tmp.optionStates) {
        if (undefined !== arr2.hasValue) {
          let hasValue = arr2.hasValue;
        } else {
          hasValue = obj[tmp9].hasValue;
        }
        if (hasValue) {
          let arr3 = obj[tmp9];
          obj = { hasValue: true, isActive: undefined !== arr2.isActive ? arr2.isActive : arr3.isActive, lastValidationResult: undefined !== arr2.lastValidationResult ? arr2.lastValidationResult : arr3.lastValidationResult };
          let optionValue = arr2.optionValue;
          let optionValue2 = optionValue;
          if (null == optionValue) {
            optionValue2 = arr3.optionValue;
          }
          obj.optionValue = optionValue2;
          let _location = arr2.location;
          let _location2 = _location;
          if (null == _location) {
            _location2 = arr3.location;
          }
          obj.location = _location2;
          let length = arr2.length;
          let length2 = length;
          if (null == length) {
            length2 = arr3.length;
          }
          obj.length = length2;
          obj[tmp9] = obj;
          tmp10 = optionValue;
          tmp11 = _location;
          tmp12 = length;
          tmp13 = arr3;
          if (undefined !== arr2.isActive) {
            let activeOptionName = tmp.activeOptionName;
            if (arr2.isActive) {
              let tmp14 = null != activeOptionName && tmp.activeOptionName !== tmp9;
              if (tmp14) {
                obj = {};
                let tmp15 = obj;
                let merged1 = Object.assign(obj[tmp.activeOptionName]);
                obj[tmp.activeOptionName] = obj;
                obj[tmp.activeOptionName].isActive = false;
              }
              tmp.activeOptionName = tmp9;
              tmp10 = optionValue;
              tmp11 = _location;
              tmp12 = length;
              tmp13 = arr3;
            } else {
              tmp10 = optionValue;
              tmp11 = _location;
              tmp12 = length;
              tmp13 = arr3;
              if (tmp9 === activeOptionName) {
                tmp.activeOptionName = null;
                tmp10 = optionValue;
                tmp11 = _location;
                tmp12 = length;
                tmp13 = arr3;
              }
            }
          }
        } else {
          let obj1 = { shapes: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008276827310122181, ip: 3483072710087838000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, op: 1729581514092334600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, st: 5839206235459723000000000, location: undefined, length: undefined };
          obj[tmp9] = obj1;
          tmp10 = tmp3;
          tmp11 = tmp4;
          tmp12 = tmp5;
          tmp13 = tmp6;
          if (tmp.activeOptionName === tmp9) {
            tmp.activeOptionName = null;
            tmp10 = tmp3;
            tmp11 = tmp4;
            tmp12 = tmp5;
            tmp13 = tmp6;
          }
        }
      }
      num = num + 1;
      let tmp3 = tmp10;
      let tmp4 = tmp11;
      let tmp5 = tmp12;
      let tmp6 = tmp13;
    } while (num < entries.length);
  }
  tmp.optionStates = obj;
  return true;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = {};
let tmp2 = (Store) => {
  class ApplicationCommandStore {
    constructor() {
      self = this;
      tmp = closure_2(this, ApplicationCommandStore);
      obj = closure_5(ApplicationCommandStore);
      tmp2 = closure_4;
      if (closure_11()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = ApplicationCommandStore;
  callback2(ApplicationCommandStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_8, closure_9);
      closure_8.addChangeListener(() => {
        const channelId = channelId.getChannelId();
        if (null == channelId) {
          let obj = {};
          return true;
        } else {
          const currentSidebarChannelId = currentSidebarChannelId.getCurrentSidebarChannelId(channelId);
          if (null != currentSidebarChannelId) {
            if (currentSidebarChannelId in obj) {
              return false;
            }
          }
          if (channelId in obj) {
            obj = {};
            obj[channelId] = obj[channelId];
          } else {
            obj = {};
          }
        }
      });
    }
  };
  const items = [obj, , , , , , , , , , , ];
  obj = {
    key: "getActiveCommand",
    value(arg0) {
      return callback4(arg0).activeCommand;
    }
  };
  items[1] = obj;
  obj = {
    key: "getActiveCommandSection",
    value(arg0) {
      return callback4(arg0).activeCommandSection;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getActiveOptionName",
    value(arg0) {
      return callback4(arg0).activeOptionName;
    }
  };
  items[4] = {
    key: "getActiveOption",
    value(arg0) {
      const tmp = callback4(arg0);
      const ApplicationCommandStore = tmp;
      const activeCommand = tmp.activeCommand;
      let found;
      if (null != activeCommand) {
        const options = activeCommand.options;
        if (null != options) {
          found = options.find((name) => name.name === tmp.activeOptionName);
        }
      }
      let tmp3 = null;
      if (null != found) {
        tmp3 = found;
      }
      return tmp3;
    }
  };
  items[5] = {
    key: "getPreferredCommandId",
    value(arg0) {
      return callback4(arg0).preferredCommandId;
    }
  };
  items[6] = {
    key: "getOptionStates",
    value(arg0) {
      return callback4(arg0).optionStates;
    }
  };
  items[7] = {
    key: "getOptionState",
    value(arg0, arg1) {
      return callback4(arg0).optionStates[arg1];
    }
  };
  items[8] = {
    key: "getCommandOrigin",
    value(arg0) {
      return callback4(arg0).commandOrigin;
    }
  };
  items[9] = {
    key: "getSource",
    value(arg0) {
      return callback4(arg0).source;
    }
  };
  items[10] = {
    key: "getOption",
    value(arg0, arg1) {
      const ApplicationCommandStore = arg1;
      const activeCommand = callback4(arg0).activeCommand;
      let found;
      if (null != activeCommand) {
        const options = activeCommand.options;
        if (null != options) {
          found = options.find((name) => name.name === arg1);
        }
      }
      return found;
    }
  };
  items[11] = {
    key: "getState",
    value(arg0) {
      const merged = Object.assign(callback4(arg0));
      return {};
    }
  };
  return callback(ApplicationCommandStore, items);
}(importDefault(dependencyMap[9]).Store);
tmp2.displayName = "ApplicationCommandStore";
tmp2 = new tmp2(importDefault(dependencyMap[10]), {
  CONNECTION_OPEN: handleInit,
  CHANNEL_SELECT: handleInit,
  LOGOUT: handleInit,
  APPLICATION_COMMAND_SET_ACTIVE_COMMAND: handleSetActiveCommand,
  APPLICATION_COMMAND_SET_PREFERRED_COMMAND: handleSetPreferredCommand,
  APPLICATION_COMMAND_UPDATE_OPTIONS: handleUpdateOptionStates,
  APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function handleUpdateChannelState(channelId) {
    let changedOptionStates;
    let preferredCommandId;
    channelId = channelId.channelId;
    ({ preferredCommandId, changedOptionStates } = channelId);
    let flag = handleSetActiveCommand({ type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND", channelId, command: channelId.command, section: channelId.section, location: channelId.location });
    handleUpdateOptionStates({ type: "APPLICATION_COMMAND_UPDATE_OPTIONS", channelId, changedOptionStates });
    if (!flag) {
      flag = tmp;
    }
    if (!flag) {
      flag = true;
    }
    return flag;
  }
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/application_commands/ApplicationCommandStore.tsx");

export default tmp2;
