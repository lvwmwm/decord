// Module ID: 7021
// Function ID: 56330
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 7022, 653, 477, 1881, 4324, 566, 686, 2]

// Module 7021 (_isNativeReflectConstruct)
import ME from "ME";
import closure_3 from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import set from "set";
import set from "_possibleConstructorReturn";

const require = arg1;
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
    map1 = new Map();
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
    tmp4 = null != commandId && commandId !== value.commandId;
  }
  return flag;
}
let map = new Map();
let map1 = new Map();
let map2 = new Map();
set = set.isDesktop();
let tmp5 = ((Store) => {
  class ApplicationCommandAutocompleteStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, ApplicationCommandAutocompleteStore);
      obj = outer1_5(ApplicationCommandAutocompleteStore);
      tmp2 = outer1_4;
      if (outer1_13()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ApplicationCommandAutocompleteStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_7);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getLastErrored",
    value(arg0) {
      return outer1_14(arg0).lastErrored;
    }
  };
  items[1] = obj;
  obj = {
    key: "getAutocompleteChoices",
    value(arg0, arg1, arg2) {
      let value;
      const optionNameToAutocompleteQueries = outer1_14(arg0).optionNameToAutocompleteQueries;
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
      return outer1_14(arg0).optionNameToLastResults.get(arg1);
    }
  };
  items[4] = {
    key: "getLastResponseNonce",
    value(arg0) {
      return outer1_14(arg0).lastResponseNonce;
    }
  };
  return callback(ApplicationCommandAutocompleteStore, items);
})(require("initialize").Store);
tmp5.displayName = "ApplicationCommandAutocompleteStore";
set = {
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
    let _require;
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
        map = new Map();
        const result = optionNameToAutocompleteQueries.set(value.name, map);
      }
      let tmp8 = set;
      if (set) {
        const activeOption = store.getActiveOption(value.channelId);
        let type;
        if (null != activeOption) {
          type = activeOption.type;
        }
        tmp8 = type === _require(1881).ApplicationCommandOptionType.INTEGER;
      }
      _require = tmp8;
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
          if (c0) {
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
      let obj = { duration_ms: num2, error: false, num_options: mapped.length };
      _require(4324).trackWithMetadata(AnalyticEvents.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, obj);
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
        require(4324) /* _createForOfIteratorHelperLoose */.trackWithMetadata(AnalyticEvents.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, obj);
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
tmp5 = new tmp5(require("dispatcher"), set);
let result = set.fileFinishedImporting("modules/application_commands/ApplicationCommandAutocompleteStore.tsx");

export default tmp5;
