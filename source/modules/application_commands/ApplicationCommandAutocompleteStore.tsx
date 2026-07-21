// Module ID: 7015
// Function ID: 56273
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7015 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getOrCreateChannelState(arg0) {
  if (!map1.has(arg0)) {
    const obj = {};
    const activeCommand = store.getActiveCommand(arg0);
    let id;
    if (null != activeCommand) {
      id = activeCommand.id;
    }
    obj.commandId = id;
    obj.optionName = store.getActiveOptionName(arg0);
    const _Map = Map;
    const map = new Map();
    obj.optionNameToAutocompleteQueries = map;
    const _Map2 = Map;
    const map1 = new Map();
    obj.optionNameToLastResults = map1;
    const _Map3 = Map;
    const map2 = new Map();
    obj.optionNameToNonce = map2;
    const _Map4 = Map;
    const map3 = new Map();
    obj.optionNameToLastQuery = map3;
    obj.lastErrored = false;
    obj.lastResponseNonce = undefined;
    const result = map1.set(arg0, obj);
  }
  return map1.get(arg0);
}
function handleInit() {
  map.clear();
  map1.clear();
  return true;
}
function handleSetActiveCommand(command) {
  command = command.command;
  let id;
  if (null != command) {
    id = command.id;
  }
  handleCommandChange(command.channelId, id);
}
function handleCommandChange(arg0, commandId) {
  const activeOptionName = store.getActiveOptionName(arg0);
  const value = map1.get(arg0);
  let flag = null != value;
  if (flag) {
    flag = commandId !== value.commandId || activeOptionName !== value.optionName;
    const tmp3 = commandId !== value.commandId || activeOptionName !== value.optionName;
  }
  if (flag) {
    if (tmp4) {
      value.optionNameToLastResults.clear();
      const optionNameToNonce = value.optionNameToNonce;
      optionNameToNonce.clear();
      const optionNameToLastQuery = value.optionNameToLastQuery;
      optionNameToLastQuery.clear();
      const optionNameToAutocompleteQueries = value.optionNameToAutocompleteQueries;
      optionNameToAutocompleteQueries.clear();
      const optionNameToLastResults = value.optionNameToLastResults;
    }
    value.lastErrored = false;
    value.commandId = commandId;
    value.optionName = activeOptionName;
    flag = true;
    const tmp4 = null != commandId && commandId !== value.commandId;
  }
  return flag;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
const AnalyticEvents = arg1(dependencyMap[6]).AnalyticEvents;
const map = new Map();
const map1 = new Map();
const map2 = new Map();
let obj = arg1(dependencyMap[7]);
let closure_12 = obj.isDesktop();
let tmp5 = (Store) => {
  class ApplicationCommandAutocompleteStore {
    constructor() {
      self = this;
      tmp = closure_2(this, ApplicationCommandAutocompleteStore);
      obj = closure_5(ApplicationCommandAutocompleteStore);
      tmp2 = closure_4;
      if (closure_13()) {
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
  const arg1 = ApplicationCommandAutocompleteStore;
  callback2(ApplicationCommandAutocompleteStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_7);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getLastErrored",
    value(arg0) {
      return callback4(arg0).lastErrored;
    }
  };
  items[1] = obj;
  obj = {
    key: "getAutocompleteChoices",
    value(arg0, arg1, arg2) {
      let value;
      const optionNameToAutocompleteQueries = callback4(arg0).optionNameToAutocompleteQueries;
      value = optionNameToAutocompleteQueries.get(arg1);
      if (null != value) {
        value = value.get(arg2);
      }
      return value;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getAutocompleteLastChoices",
    value(arg0, arg1) {
      return callback4(arg0).optionNameToLastResults.get(arg1);
    }
  };
  items[4] = {
    key: "getLastResponseNonce",
    value(arg0) {
      return callback4(arg0).lastResponseNonce;
    }
  };
  return callback(ApplicationCommandAutocompleteStore, items);
}(importDefault(dependencyMap[10]).Store);
tmp5.displayName = "ApplicationCommandAutocompleteStore";
obj = {
  CONNECTION_OPEN: handleInit,
  LOGOUT: handleInit,
  CHANNEL_SELECT: handleInit,
  APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST: function handleApplicationCommandAutocompleteRequest(arg0) {
    let channelId;
    let name;
    let nonce;
    let query;
    ({ nonce, channelId, query, name } = arg0);
    const tmp = getOrCreateChannelState(channelId);
    const optionNameToLastQuery = tmp.optionNameToLastQuery;
    if (optionNameToLastQuery.get(name) === query) {
      return false;
    } else {
      const optionNameToLastQuery2 = tmp.optionNameToLastQuery;
      const result = optionNameToLastQuery2.set(name, query);
      const optionNameToAutocompleteQueries = tmp.optionNameToAutocompleteQueries;
      let value = optionNameToAutocompleteQueries.get(name);
      value = undefined;
      if (null != value) {
        value = value.get(query);
      }
      if (null != value) {
        tmp.lastErrored = false;
        const result1 = tmp.optionNameToLastResults.set(name, value);
        return true;
      } else {
        const optionNameToNonce2 = tmp.optionNameToNonce;
        const value1 = optionNameToNonce2.get(name);
        if (null != value1) {
          map.delete(value1);
        }
        const obj = { channelId, query, name };
        const result2 = map.set(nonce, obj);
        const _Date = Date;
        const date = new Date();
        const result3 = map2.set(nonce, date);
        const optionNameToNonce = tmp.optionNameToNonce;
        const result4 = optionNameToNonce.set(name, nonce);
        let flag;
        if (tmp.lastErrored) {
          tmp.lastErrored = false;
          flag = true;
        }
        return flag;
      }
    }
  },
  APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE: function handleApplicationCommandAutocompleteResponse(arg0) {
    let choices;
    let nonce;
    ({ choices, nonce } = arg0);
    let arg1;
    let value = map.get(nonce);
    if (null == value) {
      return false;
    } else {
      map.delete(nonce);
      const tmp31 = getOrCreateChannelState(value.channelId);
      const optionNameToAutocompleteQueries3 = tmp31.optionNameToAutocompleteQueries;
      if (null == optionNameToAutocompleteQueries3.get(value.name)) {
        const optionNameToAutocompleteQueries = tmp31.optionNameToAutocompleteQueries;
        const _Map = Map;
        const map = new Map();
        const result = optionNameToAutocompleteQueries.set(value.name, map);
      }
      let tmp8 = closure_12;
      if (closure_12) {
        const activeOption = store.getActiveOption(value.channelId);
        let type;
        if (null != activeOption) {
          type = activeOption.type;
        }
        tmp8 = type === arg1(dependencyMap[8]).ApplicationCommandOptionType.INTEGER;
      }
      arg1 = tmp8;
      let mapped;
      if (null != choices) {
        mapped = choices.map((arg0) => {
          let name;
          let name_localized;
          let value;
          ({ value, name_localized, name } = arg0);
          const obj = {};
          let tmp = name;
          if (null != name_localized) {
            tmp = name_localized;
          }
          obj.displayName = tmp;
          obj.name = name;
          let NumberResult = value;
          if (tmp8) {
            const _Number = Number;
            NumberResult = Number(value);
          }
          obj.value = NumberResult;
          return obj;
        });
      }
      if (null == mapped) {
        mapped = [];
      }
      value = map2.get(nonce);
      let num2 = 0;
      if (null != value) {
        const _Date = Date;
        const date = new Date();
        const time = date.getTime();
        num2 = time - value.getTime();
      }
      const obj = { duration_ms: num2, error: false, num_options: mapped.length };
      arg1(dependencyMap[9]).trackWithMetadata(AnalyticEvents.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, obj);
      map2.delete(nonce);
      const optionNameToAutocompleteQueries2 = tmp31.optionNameToAutocompleteQueries;
      const value1 = optionNameToAutocompleteQueries2.get(value.name);
      if (null != value1) {
        const result1 = value1.set(value.query, mapped);
      }
      const optionNameToLastQuery = tmp31.optionNameToLastQuery;
      if (optionNameToLastQuery.get(value.name) === value.query) {
        tmp31.lastErrored = false;
        const result2 = tmp31.optionNameToLastResults.set(value.name, mapped);
        const optionNameToLastResults = tmp31.optionNameToLastResults;
      }
      tmp31.lastResponseNonce = nonce;
      return true;
    }
  },
  INTERACTION_FAILURE: function handleInteractionFailure(nonce) {
    nonce = nonce.nonce;
    if (null == nonce) {
      return false;
    } else {
      let value = map.get(nonce);
      if (null == value) {
        return false;
      } else {
        map.delete(nonce);
        value = map2.get(nonce);
        let num = 0;
        if (null != value) {
          const _Date = Date;
          const date = new Date();
          const time = date.getTime();
          num = time - value.getTime();
        }
        const obj = { duration_ms: num, error: true };
        arg1(dependencyMap[9]).trackWithMetadata(AnalyticEvents.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, obj);
        map2.delete(nonce);
        getOrCreateChannelState(value.channelId).lastErrored = true;
        return true;
      }
    }
  },
  APPLICATION_COMMAND_SET_ACTIVE_COMMAND: handleSetActiveCommand,
  APP_LAUNCHER_SET_ACTIVE_COMMAND: handleSetActiveCommand,
  APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function handleUpdateChannelState(command) {
    command = command.command;
    let id;
    if (null != command) {
      id = command.id;
    }
    handleCommandChange(command.channelId, id);
  }
};
tmp5 = new tmp5(importDefault(dependencyMap[11]), obj);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/application_commands/ApplicationCommandAutocompleteStore.tsx");

export default tmp5;
