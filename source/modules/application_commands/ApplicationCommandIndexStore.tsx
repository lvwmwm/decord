// Module ID: 7920
// Function ID: 63018
// Name: _isNativeReflectConstruct
// Dependencies: [57, 6, 7, 15, 17, 18, 5, 31, 7921, 1921, 1194, 1348, 1917, 1838, 1849, 7922, 4566, 653, 3, 7923, 7924, 6753, 6754, 5048, 44, 7925, 675, 1881, 7928, 566, 686, 7929, 7930, 1331, 8176, 6755, 2]
// Exports: appLauncherOnlyCompareNames, getOrFetchApplicationCommandIndexForTarget, getSection, useDiscoveryState, useGuildIndexState

// Module 7920 (_isNativeReflectConstruct)
import _slicedToArray from "_slicedToArray";
import asyncGeneratorStep from "asyncGeneratorStep";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "ME";
import timestamp from "timestamp";
import _inherits from "_inherits";
import useTopCommands from "useTopCommands";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_18 from "_isNativeReflectConstruct";
import closure_19 from "_isNativeReflectConstruct";
import TRUE_OPTION_NAME from "TRUE_OPTION_NAME";
import ME from "ME";
import importDefaultResult from "_possibleConstructorReturn";

let closure_20;
let closure_21;
let closure_22;
let closure_23;
let require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
function getIndexKey(target) {
  const type = target.type;
  if ("guild" === type) {
    return target.guildId;
  } else if ("channel" === type) {
    return target.channelId;
  } else if ("user" === type) {
    return closure_25;
  } else {
    return "application" === type ? target.applicationId : undefined;
  }
}
function updateIndex(type) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const tmp = getIndexKey(type);
  if (null != tmp8.indices[tmp]) {
    if ("fetchState" in arg1 && tmp2.fetchState.fetching) {
      const abort = tmp2.fetchState.abort;
      abort.abort();
    }
    let obj = {};
    const merged = Object.assign(tmp2);
    const merged1 = Object.assign(arg1);
    let tmp3 = obj;
  } else if (flag) {
    obj = { serverVersion: closure_26 };
    obj = { fetching: false };
    obj.fetchState = obj;
    const merged2 = Object.assign(arg1);
    tmp3 = obj;
  }
  if (undefined !== tmp3) {
    tmp8.indices[tmp] = tmp3;
    if ("application" === type.type) {
      const applicationIndices = tmp8.applicationIndices;
      const result = applicationIndices.set(tmp, tmp3);
      tmp8.applicationIndicesVersion = tmp8.applicationIndicesVersion + 1;
    }
  }
  return tmp8.indices[tmp];
}
function deleteIndex(target) {
  const tmp3 = tmp8.indices[getIndexKey(undefined, target)];
  if (tmp4) {
    const abort = tmp3.fetchState.abort;
    abort.abort();
  }
  delete tmp[tmp2];
}
function handleReset() {
  const values = Object.values(tmp8.indices);
  for (let num = 0; num < values.length; num = num + 1) {
    let tmp = values[num];
    if (tmp.fetchState.fetching) {
      let abort = tmp.fetchState.abort;
      let abortResult = abort.abort();
    }
  }
  tmp8.indices = {};
}
async function _getOrFetchApplicationCommandIndexForTarget(arg0, arg1) {
  const tmp = outer2_40(arg0);
  let tmp2 = outer2_34.indices[tmp];
  if (null == tmp2) {
    tmp2 = outer2_30;
  }
  if (outer2_55(tmp2)) {
    yield outer2_45(arg0);
    let tmp9 = outer2_34.indices[tmp];
    if (null == tmp9) {
      tmp9 = outer2_30;
    }
    return tmp9;
  } else if (tmp2.fetchState.fetching) {
    yield tmp2.fetchState.promise;
    let tmp5 = outer2_34.indices[tmp];
    if (null == tmp5) {
      tmp5 = outer2_30;
    }
    return tmp5;
  } else {
    return tmp2;
  }
}
function updateIndexAndFetchApplicationCommandIndex(target) {
  return _updateIndexAndFetchApplicationCommandIndex(...arguments);
}
async function _updateIndexAndFetchApplicationCommandIndex(arg0, arg1) {
  const abortController = new AbortController();
  const future = new outer2_0(outer2_3[19]).Future();
  outer2_41(arg0, { fetchState: { fetching: true, abort: abortController, promise: future.promise } }, true);
  const applicationCommandIndex = outer2_0(outer2_3[20]).fetchApplicationCommandIndex(arg0, abortController);
  const obj = { fetching: true, abort: abortController, promise: future.promise };
  const obj2 = outer2_0(outer2_3[20]);
  yield applicationCommandIndex.then(future.resolve).catch(future.reject);
}
function handleFetchSuccess(arg0) {
  let index;
  let iter4;
  let target;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let id;
  ({ target, index } = arg0);
  const currentUser = authStore.getCurrentUser();
  id = undefined;
  if (null != currentUser) {
    id = currentUser.id;
  }
  if (null == id) {
    if (!c32) {
      arr = arr.push(arg0);
    }
    return false;
  } else {
    let obj = {};
    obj = {};
    const _Set = Set;
    const set = new Set();
    const tmp41 = _createForOfIteratorHelperLoose(index.applications);
    const iter5 = tmp41();
    let iter2 = iter5;
    if (!iter5.done) {
      while (true) {
        let value = iter2.value;
        if (null == value.bot) {
          if (null != value.bot_id) {
            obj[value.bot_id] = value.id;
            let tmp4 = authStore;
            let user = authStore.getUser(value.bot_id);
            if (null != user) {
              value.bot = user;
              let tmp3 = user;
            } else {
              let addResult = set.add(value.bot_id);
              tmp3 = user;
            }
            obj = {};
            let obj1 = {};
            let tmp7 = id;
            let tmp8 = dependencyMap;
            let obj2 = id(6753);
            let tmp9 = toApplication;
            let tmp10 = obj1;
            let merged = Object.assign(obj2.getApplicationCommandSection(toApplication(value), false));
            let keyPermissionsResult;
            if (null != value.permissions) {
              let tmp13 = id;
              let tmp14 = dependencyMap;
              let obj3 = id(6754);
              let tmp15 = toServerPermissions;
              keyPermissionsResult = obj3.keyPermissions(toServerPermissions(value.permissions, id));
            }
            obj1["permissions"] = keyPermissionsResult;
            obj1["botId"] = value.bot_id;
            obj.descriptor = obj1;
            obj.commands = {};
            obj[value.id] = obj;
            let iter = tmp41();
            iter2 = iter;
            let tmp16 = tmp3;
            if (iter.done) {
              break;
            }
          }
        }
        tmp3 = tmp16;
        if (null != value.bot) {
          obj[value.bot.id] = value.id;
          tmp3 = tmp16;
        }
      }
    }
    let tmp17 = "guild" === target.type;
    if (tmp17) {
      tmp17 = set.size > 0;
    }
    if (tmp17) {
      let obj4 = importDefault(5048);
      const items = [];
      HermesBuiltin.arraySpread(set, 0);
      const membersById = obj4.requestMembersById(target.guildId, items);
    }
    const application_commands = index.application_commands;
    const tmp27 = _createForOfIteratorHelperLoose(id(6753).buildApplicationCommands(application_commands.map((description_default) => {
      let name_default;
      const obj = {};
      const merged = Object.assign(description_default);
      let description = description_default.description_default;
      if (null == description) {
        description = description_default.description;
      }
      let str = "";
      if (null != description) {
        str = description;
      }
      obj["description"] = str;
      ({ dm_permission: obj["dm_permission"], name_default } = description_default);
      if (null == name_default) {
        name_default = description_default.name;
      }
      obj["name"] = name_default;
      const options = description_default.options;
      let mapped;
      if (null != options) {
        mapped = options.map(outer1_58);
      }
      if (null == mapped) {
        mapped = [];
      }
      obj["options"] = mapped;
      let tmp4;
      if (null != description_default.permissions) {
        tmp4 = outer1_60(description_default.permissions, id);
      }
      obj["permissions"] = tmp4;
      if (description_default.description !== description_default.description_default) {
        obj.description_localized = description_default.description;
      }
      if (description_default.name !== description_default.name_default) {
        obj.name_localized = description_default.name;
      }
      return obj;
    }), true));
    let iter3 = tmp27();
    if (!iter3.done) {
      do {
        value = iter3.value;
        let tmp28 = obj[value.applicationId];
        if (null != tmp28) {
          tmp28.commands[value.id] = value;
        } else {
          let tmp29 = importDefaultResult;
          let errorResult = importDefaultResult.error("Command has no matching application");
        }
        iter4 = tmp27();
        iter3 = iter4;
      } while (!iter4.done);
    }
    let version = index.version;
    if (null == version) {
      version = SymbolResult1;
    }
    obj2 = { serverVersion: version };
    obj3 = { sections: obj, sectionIdsByBotId: obj, version };
    obj2.result = obj3;
    obj4 = { fetching: false };
    obj2.fetchState = obj4;
    updateIndex(target, obj2, flag);
  }
}
function updateGuildBotMembers(guildId, members) {
  let result;
  const tmp2 = tmp8.indices[getIndexKey(undefined, { type: "guild", guildId })];
  if (null != tmp2) {
    result = tmp2.result;
  }
  const require = result;
  if (null == result) {
    return false;
  } else {
    let c1 = false;
    const item = members.forEach((user) => {
      user = user.user;
      if (user.bot) {
        if (null != closure_0.sectionIdsByBotId[user.id]) {
          callback(outer1_3[24])(null != closure_0.sections[tmp3], "Bot has no matching index section");
          callback(outer1_3[24])(null != closure_0.sections[tmp3].descriptor.application, "Bot's index section has no application info");
          let obj = result(outer1_3[21]);
          obj = {};
          const merged = Object.assign(tmp6.descriptor.application);
          obj["bot"] = user;
          const applicationCommandSection = obj.getApplicationCommandSection(obj, false, tmp);
          obj = {};
          const merged1 = Object.assign(tmp6.descriptor);
          const merged2 = Object.assign(applicationCommandSection);
          closure_0.sections[tmp3].descriptor = obj;
          callback = true;
        }
      }
    });
    return c1;
  }
  let obj = { type: "guild", guildId };
}
function handleStaleUserIndex() {
  updateIndex({ type: "user" }, { serverVersion: closure_26 });
}
function useContextIndexState(type, arg1, allowFetch) {
  const _require = type;
  let closure_1 = arg1;
  let closure_2 = allowFetch;
  const tmp = callback(React.useState(true), 2);
  const first = tmp[0];
  callback = tmp[1];
  const items = [closure_34];
  const stateFromStoresObject = _require(first[29]).useStateFromStoresObject(items, () => {
    if ("channel" === type.type) {
      let contextState = outer1_34.getContextState(type);
    } else {
      contextState = outer1_34.getUserState();
    }
    return contextState;
  });
  const items1 = [stateFromStoresObject, allowFetch, type, arg1, first];
  const effect = React.useEffect(() => {
    if (first) {
      if ("contextless" !== type.type) {
        if (closure_2) {
          let tmp9 = callback;
          if (callback) {
            tmp9 = outer1_54(type.channel);
          }
          if (tmp9) {
            let tmp12;
            let obj2 = callback(first[26]);
            let obj = { miss: null == stateFromStoresObject.result };
            const _Object = Object;
            obj.size = Object.keys(outer1_34.indices).length;
            obj2.track(outer1_22.APPLICATION_COMMAND_CACHE_FETCH, obj);
            if (outer1_55(stateFromStoresObject)) {
              if (null == type.channel.guild_id) {
                obj = { type: "channel", channelId: type.channel.id };
                const applicationCommandIndex = type(first[20]).requestApplicationCommandIndex(obj);
                const obj5 = type(first[20]);
              }
            }
            tmp12 = type(first[20]);
            const obj1 = { type: "guild", guildId: type.channel.guild_id };
            const applicationCommandIndex1 = tmp12.requestApplicationCommandIndex(obj1);
          }
        }
        callback2(false);
      } else {
        let tmp2 = closure_2;
        if (closure_2) {
          tmp2 = outer1_55(stateFromStoresObject);
        }
        if (tmp2) {
          obj = type(first[20]);
          obj2 = { type: "user" };
          const applicationCommandIndex2 = obj.requestApplicationCommandIndex(obj2);
        }
      }
    }
  }, items1);
  return stateFromStoresObject;
}
function useUserIndexState(arg0, allowFetch) {
  const _require = arg0;
  let closure_1 = allowFetch;
  let tmp = stateFromStoresObject(React.useState(true), 2);
  const first = tmp[0];
  const dependencyMap = tmp[1];
  const items = [closure_34];
  stateFromStoresObject = _require(566).useStateFromStoresObject(items, () => outer1_34.getUserState());
  const items1 = [stateFromStoresObject, allowFetch, arg0, first];
  const effect = React.useEffect(() => {
    if (first) {
      let tmp = closure_1;
      if (closure_1) {
        tmp = outer1_55(stateFromStoresObject);
      }
      if (tmp) {
        tmp = callback;
      }
      if (tmp) {
        let obj = callback(7924);
        obj = { type: "user" };
        const applicationCommandIndex = obj.requestApplicationCommandIndex(obj);
      }
      dependencyMap(false);
    }
  }, items1);
  return stateFromStoresObject;
}
function useQueryState(type, commandTypes, allowFetch) {
  const _require = type;
  let closure_1 = commandTypes;
  let closure_2 = allowFetch;
  let channel;
  if ("channel" === type.type) {
    channel = type.channel;
  }
  permissionContext = _require(permissionContext[25]).usePermissionContext(channel, commandTypes.commandTypes);
  let _slicedToArray = tmp3;
  const tmp4 = useContextIndexState(type, false !== commandTypes.applicationCommands, allowFetch.allowFetch);
  let asyncGeneratorStep = tmp4;
  const tmp5 = useUserIndexState(false !== commandTypes.applicationCommands, allowFetch.allowFetch);
  let result = tmp5;
  const tmp6 = (function useApplicationIndexStates() {
    const items = [outer1_34];
    return type(permissionContext[29]).useStateFromStores(items, () => outer2_34.getApplicationStates());
  })();
  let _isNativeReflectConstruct = tmp6;
  let obj = _require(permissionContext[25]);
  (function useMaybeFetchApplicationIndex(applicationId, allowFetch) {
    const type = applicationId;
    let closure_1 = allowFetch;
    let tmp = tmp3(outer1_11.useState(true), 2);
    const first = tmp[0];
    let closure_3 = tmp[1];
    const items = [outer1_34];
    const stateFromStores = type(permissionContext[29]).useStateFromStores(items, () => outer2_34.getApplicationState(closure_0));
    const items1 = [allowFetch, applicationId, stateFromStores, first];
    const effect = outer1_11.useEffect(() => {
      if (first) {
        let tmp = closure_1;
        if (closure_1) {
          tmp = outer2_55(stateFromStores);
        }
        if (tmp) {
          tmp = null != applicationId;
        }
        if (tmp) {
          let obj = applicationId(permissionContext[20]);
          obj = { type: "application", applicationId };
          const applicationCommandIndex = obj.requestApplicationCommandIndex(obj);
        }
        callback(false);
      }
    }, items1);
  })(allowFetch.applicationId, allowFetch.allowFetch);
  let items = [permissionContext, , , , , , , , , , , , , , ];
  ({ text: arr[1], builtIns: arr[2] } = commandTypes);
  items[3] = false !== commandTypes.applicationCommands;
  ({ scoreMethod: arr[4], allowEmptySections: arr[5], sortOptions: arr[6], allowApplicationState: arr[7], applicationId: arr[8], installOnDemand: arr[9] } = allowFetch);
  items[10] = tmp4;
  items[11] = tmp5;
  items[12] = type;
  items[13] = tmp6;
  items[14] = (function useApplicationIndexStatesVersion() {
    const items = [outer1_34];
    return type(permissionContext[29]).useStateFromStores(items, () => outer2_34.applicationIndicesVersion);
  })();
  return React.useMemo(() => {
    const obj = { permissionContext, text: commandTypes.text, allowApplicationCommands: _slicedToArray, builtIns: commandTypes.builtIns, scoreMethod: allowFetch.scoreMethod, allowEmptySections: allowFetch.allowEmptySections, contextState: asyncGeneratorStep, userState: result, launcherContext: closure_0 };
    if (allowFetch.allowApplicationState) {
      let map = _isNativeReflectConstruct;
    } else {
      const _Map = Map;
      map = new Map();
    }
    obj.applicationStates = map;
    ({ sortOptions: obj.sortOptions, applicationId: obj.singleApplicationId, installOnDemand: obj.installOnDemand } = allowFetch);
    return outer1_52(obj);
  }, items);
}
function queryIndex(allowApplicationCommands) {
  let allowEmptySections;
  let applicationStates;
  let builtIns;
  let contextState;
  let iter3;
  let permissionContext;
  let singleApplicationId;
  let text;
  let userState;
  ({ permissionContext, contextState, userState, applicationStates, text, builtIns } = allowApplicationCommands);
  if (builtIns === undefined) {
    builtIns = NONE(7928).BuiltInCommandFilter.ALLOW;
  }
  let flag = allowApplicationCommands.allowApplicationCommands;
  if (flag === undefined) {
    flag = true;
  }
  ({ singleApplicationId, allowEmptySections } = allowApplicationCommands);
  if (allowEmptySections === undefined) {
    allowEmptySections = false;
  }
  NONE = allowApplicationCommands.scoreMethod;
  if (NONE === undefined) {
    NONE = NONE(7928).ScoreMethod.NONE;
  }
  let sortOptions = allowApplicationCommands.sortOptions;
  if (sortOptions === undefined) {
    sortOptions = closure_35;
  }
  let flag2 = allowApplicationCommands.installOnDemand;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let c2;
  let formatted;
  if (null != text) {
    formatted = text.toLowerCase();
  }
  let parts;
  if (null != formatted) {
    parts = formatted.split(" ");
  }
  if (builtIns !== NONE(7928).BuiltInCommandFilter.DENY) {
    let obj = NONE(7930);
    let builtInCommands = obj.getBuiltInCommands(permissionContext.commandTypes, true, builtIns === NONE(7928).BuiltInCommandFilter.ONLY_TEXT);
  } else {
    builtInCommands = [];
  }
  const items = [];
  obj = { permissionContext, query: formatted, splitQuery: parts, allowEmptySections, scoreMethod: NONE, installOnDemand: flag2 };
  let result = contextState.result;
  let sections;
  if (null != result) {
    sections = result.sections;
  }
  if (null == sections) {
    sections = {};
  }
  const result2 = userState.result;
  let sections1;
  if (null != result2) {
    sections1 = result2.sections;
  }
  if (null == sections1) {
    sections1 = {};
  }
  const set = new Set();
  if (flag) {
    if (permissionContext.hasBaseAccessPermissions) {
      for (const key10073 in sections) {
        let tmp84 = key10073;
        let tmp10 = null != singleApplicationId;
        if (tmp10) {
          tmp10 = sections[key10073].descriptor.id !== singleApplicationId;
        }
        if (tmp10) {
          continue;
        } else {
          let addResult = set.add(key10073);
          continue;
        }
        continue;
      }
    }
    for (const key10081 in sections1) {
      let tmp85 = key10081;
      let tmp13 = null != singleApplicationId;
      if (tmp13) {
        tmp13 = sections1[key10081].descriptor.id !== singleApplicationId;
      }
      if (tmp13) {
        continue;
      } else {
        let addResult1 = set.add(key10081);
        continue;
      }
      continue;
    }
  }
  const map = new Map();
  const tmp15 = _createForOfIteratorHelperLoose(applicationStates);
  const iter = tmp15();
  let iter2 = iter;
  if (!iter.done) {
    do {
      let tmp18 = callback;
      let tmp19 = callback(iter2.value, 2);
      if (null == singleApplicationId) {
        let result3 = tmp19[1].result;
        let sections2;
        if (null != result3) {
          sections2 = result3.sections;
        }
        let tmp23 = result3;
        let tmp24 = sections2;
        let num4 = tmp16;
        let tmp21 = tmp17;
        if (null != sections2) {
          let _Object = Object;
          let keys = Object.keys(sections2);
          let num5 = 0;
          let tmp25 = result3;
          let tmp26 = sections2;
          num4 = 0;
          tmp21 = keys;
          if (0 < keys.length) {
            do {
              let tmp27 = keys[num5];
              let addResult2 = set.add(tmp27);
              result = map.set(tmp27, sections2[tmp27]);
              num5 = num5 + 1;
              let tmp30 = result3;
              let tmp31 = sections2;
              tmp21 = keys;
              num4 = num5;
              length = keys.length;
            } while (num5 < length);
          }
        }
      } else {
        num4 = tmp16;
        tmp21 = tmp17;
      }
      iter3 = tmp15();
      tmp16 = num4;
      tmp17 = tmp21;
      iter2 = iter3;
    } while (!iter3.done);
  }
  let arr = Array.from(set);
  let num6 = 0;
  if (0 < arr.length) {
    while (true) {
      let tmp33 = arr[num6];
      let tmp34 = sections[tmp33];
      let tmp35 = sections1[tmp33];
      let value = map.get(tmp33);
      let tmp37 = null != tmp34;
      let tmp38 = null != tmp35;
      if (null != tmp34) {
        if (null != tmp35) {
          let descriptor2 = tmp35.descriptor;
          let items1 = [];
          let commands = tmp35.commands;
          for (const key10170 in commands) {
            let tmp86 = key10170;
            arr = items1.push(tmp35.commands[key10170]);
            continue;
          }
          let tmp41 = tmp32;
          let descriptor = descriptor2;
          let values = items1;
          let tmp40 = tmp32;
          let keys1 = Object.keys();
          if (keys1 !== undefined) {
            tmp40 = tmp41;
            descriptor = descriptor2;
            values = items1;
            let tmp43 = keys1[commands];
            while (tmp43 !== undefined) {
              let tmp88 = tmp43;
              tmp41 = tmp43;
              if (tmp43 in tmp35.commands) {
                continue;
              } else {
                let arr1 = items1.push(tmp34.commands[tmp43]);
                tmp41 = tmp43;
                continue;
              }
              continue;
            }
          }
          let tmp45 = sortOptions;
          let tmp46 = dependencyMap;
          keys = sortOptions(44)(null != descriptor, "Failed to select application descriptor");
          let tmp47 = sortOptions(44)(null != values, "Failed to select list of application commands");
          let tmp48 = queryIndexSection;
          let tmp49 = descriptor;
          let tmp50 = values;
          let tmp51 = tmp37;
          let tmp52 = tmp38;
          let tmp53 = obj;
          let tmp54 = queryIndexSection(descriptor, values, tmp37, tmp38, obj);
          if (null != tmp54) {
            let arr2 = items.push(tmp54);
          }
          num6 = num6 + 1;
          tmp32 = tmp40;
          if (num6 >= arr.length) {
            break;
          }
        }
      }
      if (null != tmp34) {
        descriptor = tmp34.descriptor;
        let _Object4 = Object;
        values = Object.values(tmp34.commands);
        tmp40 = tmp32;
      } else if (null != tmp35) {
        descriptor = tmp35.descriptor;
        let _Object3 = Object;
        values = Object.values(tmp35.commands);
        tmp40 = tmp32;
      } else {
        tmp40 = tmp32;
        if (null != value) {
          descriptor = value.descriptor;
          let _Object2 = Object;
          values = Object.values(value.commands);
          tmp40 = tmp32;
        }
      }
    }
  }
  if (sortOptions.applications.useFrecency) {
    const FrecencyUserSettingsActionCreators = NONE(1331).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }
  const sorted = items.sort((section, section2) => {
    if (sortOptions.applications.useScore) {
      if (NONE === NONE(outer1_3[28]).ScoreMethod.APPLICATION_ONLY) {
        const first = section.data[0];
        let score;
        if (null != first) {
          score = first.score;
        }
        if (null == score) {
          const _Number = Number;
          score = Number.MAX_VALUE;
        }
        const first1 = section2.data[0];
        let score1;
        if (null != first1) {
          score1 = first1.score;
        }
        if (null == score1) {
          const _Number2 = Number;
          score1 = Number.MAX_VALUE;
        }
        if (score !== score1) {
          return score - score1;
        }
      }
    }
    if (sortOptions.applications.useFrecency) {
      const scoreWithoutLoadingLatest = outer1_12.getScoreWithoutLoadingLatest(section.section.id);
      const scoreWithoutLoadingLatest1 = outer1_12.getScoreWithoutLoadingLatest(section2.section.id);
      if (scoreWithoutLoadingLatest !== scoreWithoutLoadingLatest1) {
        return scoreWithoutLoadingLatest1 - scoreWithoutLoadingLatest;
      }
    }
    return outer1_62(section.section.name, section2.section.name);
  });
  if (builtInCommands.length > 0) {
    const tmp66 = queryIndexSection(NONE(7930).BUILT_IN_SECTIONS[constants.BUILT_IN], builtInCommands, true, true, obj);
    if (null != tmp66) {
      items.push(tmp66);
    }
  }
  const flatMapResult = items.flatMap((data) => {
    let closure_0 = data;
    data = data.data;
    return data.map((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["section"] = data.section;
      return obj;
    });
  });
  if (NONE === NONE(7928).ScoreMethod.COMMAND_ONLY) {
    const context = permissionContext.context;
    let guild_id;
    if (null != permissionContext) {
      const context2 = permissionContext.context;
      if (null != context2) {
        guild_id = context2.guild_id;
      }
    }
    guild = guild.getGuild(guild_id);
    if (sortOptions.commands.useFrecency) {
      const FrecencyUserSettingsActionCreators2 = NONE(1331).FrecencyUserSettingsActionCreators;
      const ifNecessary1 = FrecencyUserSettingsActionCreators2.loadIfNecessary();
    }
    let tmp76;
    if (null != context) {
      obj = { channel: context, guild };
      tmp76 = obj;
    }
    c2 = tmp76;
    const sorted1 = flatMapResult.sort((score, score2) => {
      if (sortOptions.commands.useScore) {
        score = score.score;
        let num = 0;
        if (null != score) {
          num = score;
        }
        score2 = score2.score;
        let num2 = 0;
        if (null != score2) {
          num2 = score2;
        }
        if (num !== num2) {
          return num - num2;
        }
      }
      if (sortOptions.commands.useFrecency) {
        const scoreWithoutLoadingLatest = outer1_19.getScoreWithoutLoadingLatest(c2, score);
        const scoreWithoutLoadingLatest1 = outer1_19.getScoreWithoutLoadingLatest(c2, score2);
        if (scoreWithoutLoadingLatest !== scoreWithoutLoadingLatest1) {
          return scoreWithoutLoadingLatest1 - scoreWithoutLoadingLatest;
        }
      }
      return outer1_62(score.displayName, score2.displayName);
    });
  }
  const obj1 = { commands: flatMapResult, descriptors: items.map((section) => section.section), sectionedCommands: items };
  let fetching;
  if (null != contextState) {
    fetching = contextState.fetchState.fetching;
  }
  let tmp79 = true === fetching;
  if (!tmp79) {
    let fetching1;
    if (null != userState) {
      fetching1 = userState.fetchState.fetching;
    }
    tmp79 = true === fetching1;
  }
  if (!tmp79) {
    let tmp81 = null != singleApplicationId;
    if (tmp81) {
      value = applicationStates.get(singleApplicationId);
      let fetching2;
      if (null != value) {
        fetching2 = value.fetchState.fetching;
      }
      tmp81 = true === fetching2;
    }
    tmp79 = tmp81;
  }
  obj1.loading = tmp79;
  return obj1;
}
function queryIndexSection(descriptor, builtInCommands, isGuildInstalled, arg3, arg4) {
  let allowEmptySections;
  let context;
  let installOnDemand;
  let isImpersonating;
  let iter2;
  let iter4;
  let permissionContext;
  let query;
  let roleIds;
  let scoreMethod;
  let splitQuery;
  let userId;
  ({ query, splitQuery, scoreMethod, permissionContext } = arg4);
  ({ context, userId, roleIds, isImpersonating } = permissionContext);
  let guild_id;
  ({ allowEmptySections, installOnDemand } = arg4);
  if (null != context) {
    guild_id = context.guild_id;
  }
  let allowedForUser = null;
  if (null != guild_id) {
    let obj = importAll(8176);
    allowedForUser = obj.computeAllowedForUser(descriptor.permissions, context.guild_id, userId, roleIds, isImpersonating);
  }
  let guild_id1;
  if (null != context) {
    guild_id1 = context.guild_id;
  }
  let allowedForChannel = null;
  if (null != guild_id1) {
    let obj1 = importAll(8176);
    allowedForChannel = obj1.computeAllowedForChannel(descriptor.permissions, context, context.guild_id);
  }
  const items = [];
  const tmp13 = _createForOfIteratorHelperLoose(builtInCommands);
  let iter = tmp13();
  if (!iter.done) {
    do {
      let value = iter.value;
      let tmp14 = importAll;
      let tmp15 = dependencyMap;
      let obj3 = importAll(8176);
      obj = { applicationAllowedForUser: allowedForUser, applicationAllowedForChannel: allowedForChannel, commandBotId: descriptor.botId, isGuildInstalled };
      let tmp16 = arg3;
      if (!arg3) {
        tmp16 = installOnDemand;
      }
      obj.isUserInstalled = tmp16;
      let tmp18 = require;
      let tmp19 = dependencyMap;
      let hasAccessResult = obj3.hasAccess(value, permissionContext, obj);
      if (hasAccessResult === require(8176) /* _createForOfIteratorHelperLoose */.HasAccessResult.ALLOWED) {
        let arr = items.push(value);
      }
      iter2 = tmp13();
      iter = iter2;
    } while (!iter2.done);
  }
  let arr2 = items;
  if (scoreMethod !== require(7928) /* ScoreMethod */.ScoreMethod.NONE) {
    arr2 = items;
    if (null != query) {
      arr2 = items;
      if (null != splitQuery) {
        const items1 = [];
        if (scoreMethod === require(7928) /* ScoreMethod */.ScoreMethod.APPLICATION_ONLY) {
          const name = descriptor.name;
          const toLocaleLowerCaseResult = name.toLocaleLowerCase();
          if (toLocaleLowerCaseResult.startsWith(query)) {
            let SECTION_DESCRIPTION_CONTAINS = constants3.SECTION_NAME_STARTS_WITH;
          } else if (toLocaleLowerCaseResult.includes(query)) {
            SECTION_DESCRIPTION_CONTAINS = constants3.SECTION_NAME_CONTAINS;
          } else {
            const application = descriptor.application;
            let toLocaleLowerCaseResult1;
            if (null != application) {
              const description = application.description;
              if (null != description) {
                toLocaleLowerCaseResult1 = description.toLocaleLowerCase();
              }
            }
            if (tmp24) {
              SECTION_DESCRIPTION_CONTAINS = constants3.SECTION_DESCRIPTION_CONTAINS;
            }
            tmp24 = null != toLocaleLowerCaseResult1 && toLocaleLowerCaseResult1.includes(query);
          }
        }
        const first = splitQuery[0];
        const substr = splitQuery.slice(1);
        const joined = substr.join(" ");
        const tmp31 = _createForOfIteratorHelperLoose(items);
        let iter3 = tmp31();
        arr2 = items1;
        if (!iter3.done) {
          do {
            value = iter3.value;
            let tmp33 = require;
            let tmp34 = dependencyMap;
            let tmp35 = scoreMethod !== require(7928) /* ScoreMethod */.ScoreMethod.COMMAND_ONLY;
            if (tmp35) {
              let tmp36 = require;
              let tmp37 = dependencyMap;
              tmp35 = scoreMethod !== require(7928) /* ScoreMethod */.ScoreMethod.COMMAND_OR_APPLICATION;
            }
            let tmp38;
            if (!tmp35) {
              let tmp39 = scoreCommand;
              let tmp40 = value;
              let tmp41 = query;
              let tmp42 = first;
              let tmp43 = joined;
              tmp38 = scoreCommand(value, query, first, joined);
            }
            let tmp44 = undefined === tmp38;
            if (!tmp44) {
              let tmp45 = tmp32;
              if (tmp32) {
                tmp45 = SECTION_DESCRIPTION_CONTAINS < tmp38;
              }
              tmp44 = tmp45;
            }
            if (tmp44) {
              tmp38 = SECTION_DESCRIPTION_CONTAINS;
            }
            if (undefined !== tmp38) {
              obj = {};
              let tmp46 = obj;
              let tmp47 = value;
              let merged = Object.assign(value);
              obj["score"] = tmp38;
              arr = items1.push(obj);
            }
            iter4 = tmp31();
            iter3 = iter4;
            arr2 = items1;
          } while (!iter4.done);
        }
      }
    }
  }
  if (0 !== arr2.length) {
    let tmp53 = scoreMethod !== require(7928) /* ScoreMethod */.ScoreMethod.NONE;
    if (tmp53) {
      tmp53 = scoreMethod !== require(7928) /* ScoreMethod */.ScoreMethod.APPLICATION_ONLY;
    }
    if (!tmp53) {
      const sorted = arr2.sort((displayName, displayName2) => outer1_62(displayName.displayName, displayName2.displayName));
    }
    obj1 = { section: descriptor, data: arr2 };
    let tmp50 = obj1;
  } else {
    tmp50 = null;
  }
  return tmp50;
}
function channelSupportsContextCommands(guild_id) {
  guild_id = undefined;
  if (null != guild_id) {
    guild_id = guild_id.guild_id;
  }
  let tmp2 = null != guild_id;
  if (!tmp2) {
    let type;
    if (null != guild_id) {
      type = guild_id.type;
    }
    let tmp5 = type === constants2.DM;
    if (tmp5) {
      const user = authStore.getUser(guild_id.getRecipientId());
      let bot;
      if (null != user) {
        bot = user.bot;
      }
      tmp5 = true === bot;
    }
    tmp2 = tmp5;
  }
  return tmp2;
}
function shouldFetch(fetchState, query) {
  const tmp = isStale(fetchState);
  let fetching = !tmp;
  if (tmp) {
    fetching = fetchState.fetchState.fetching;
  }
  let tmp2 = !fetching;
  if (tmp2) {
    let tmp4 = null == fetchState.fetchState.retryAfter;
    if (!tmp4) {
      const _Date = Date;
      tmp4 = Date.now() >= fetchState.fetchState.retryAfter;
    }
    tmp2 = tmp4;
  }
  return tmp2;
}
function isStale(result) {
  result = result.result;
  let version;
  if (null != result) {
    version = result.version;
  }
  return version !== result.serverVersion;
}
function toApplication(value) {
  return { description: value.description, icon: value.icon, id: value.id, name: value.name, bot: value.bot, flags: value.flags };
}
function toServerOption(choices) {
  const obj = {};
  const merged = Object.assign(choices);
  choices = choices.choices;
  let mapped;
  if (null != choices) {
    mapped = choices.map(toServerChoice);
  }
  obj["choices"] = mapped;
  let description = choices.description_default;
  if (null == description) {
    description = choices.description;
  }
  obj["description"] = description;
  let name = choices.name_default;
  if (null == name) {
    name = choices.name;
  }
  obj["name"] = name;
  const options = choices.options;
  let mapped1;
  if (null != options) {
    mapped1 = options.map(toServerOption);
  }
  obj["options"] = mapped1;
  if (choices.description !== choices.description_default) {
    obj.description_localized = choices.description;
  }
  if (choices.name !== choices.name_default) {
    obj.name_localized = choices.name;
  }
  return obj;
}
function toServerChoice(name_default) {
  const obj = {};
  const merged = Object.assign(name_default);
  let name = name_default.name_default;
  if (null == name) {
    name = name_default.name;
  }
  obj["name"] = name;
  if (name_default.name !== name_default.name_default) {
    obj.name_localized = name_default.name;
  }
  return obj;
}
function toServerPermissions(permissions, id) {
  let length;
  let length2;
  const items = [];
  if (null != permissions.user) {
    let obj = { type: require(6755) /* ApplicationCommandSectionType */.ApplicationCommandPermissionType.USER, id, permission: permissions.user };
    items.push(obj);
  }
  if (null != permissions.channels) {
    const _Object = Object;
    const entries = Object.entries(permissions.channels);
    let num2 = 0;
    if (0 < entries.length) {
      do {
        let tmp5 = callback;
        let tmp6 = callback(entries[num2], 2);
        obj = {};
        let tmp7 = require;
        let tmp8 = dependencyMap;
        obj.type = require(6755) /* ApplicationCommandSectionType */.ApplicationCommandPermissionType.CHANNEL;
        obj.id = tmp6[0];
        obj.permission = tmp6[1];
        let arr = items.push(obj);
        num2 = num2 + 1;
        length = entries.length;
      } while (num2 < length);
    }
  }
  if (null != permissions.roles) {
    const _Object2 = Object;
    const entries1 = Object.entries(permissions.roles);
    let num3 = 0;
    if (0 < entries1.length) {
      do {
        let tmp10 = callback;
        let tmp11 = callback(entries1[num3], 2);
        obj = {};
        let tmp12 = require;
        let tmp13 = dependencyMap;
        obj.type = require(6755) /* ApplicationCommandSectionType */.ApplicationCommandPermissionType.ROLE;
        obj.id = tmp11[0];
        obj.permission = tmp11[1];
        let arr1 = items.push(obj);
        num3 = num3 + 1;
        length2 = entries1.length;
      } while (num3 < length2);
    }
  }
  return items;
}
function scoreCommand(value, query, first, joined) {
  let name;
  let serverLocalizedName;
  const untranslatedName = value.untranslatedName;
  const str = untranslatedName.toLocaleLowerCase();
  const displayName = value.displayName;
  const str2 = displayName.toLocaleLowerCase();
  if (!str.startsWith(query)) {
    if (!str2.startsWith(query)) {
      if (str.startsWith(first)) {
        const parts = str.split(" ");
        const substr = parts.slice(1);
        joined = substr.join(" ");
        if (joined.startsWith(joined)) {
          return constants3.STARTS_WITH_COMMAND_NAME;
        }
      }
      if (str2.startsWith(first)) {
        const parts1 = str2.split(" ");
        const substr1 = parts1.slice(1);
        const joined1 = substr1.join(" ");
        if (joined1.startsWith(joined)) {
          return constants3.STARTS_WITH_COMMAND_NAME;
        }
      }
      if (!str.includes(query)) {
        let options = value.options;
        if (null == options) {
          options = [];
        }
        const tmp2Result = _createForOfIteratorHelperLoose(options);
        const iter = tmp2Result();
        let iter2 = iter;
        let flag = false;
        let flag2 = false;
        if (!iter.done) {
          ({ name, serverLocalizedName } = iter2.value);
          while (!name.startsWith(query)) {
            let _HermesInternal = HermesInternal;
            let combined = "" + str + " " + name;
            if (combined.startsWith(query)) {
              break;
            } else {
              if (null == str2) {
                if (null != serverLocalizedName) {
                  if (!serverLocalizedName.startsWith(query)) {
                    let _HermesInternal3 = HermesInternal;
                    let combined1 = "" + str + " " + serverLocalizedName;
                    if (!combined1.startsWith(query)) {
                      if (null != str2) {
                        let _HermesInternal4 = HermesInternal;
                        let combined2 = "" + str2 + " " + serverLocalizedName;
                      }
                    }
                  }
                  let tmp7 = constants3;
                  return constants3.STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME;
                }
                let hasItem = name.includes(query);
                if (!hasItem) {
                  let tmp6 = null != serverLocalizedName && serverLocalizedName.includes(query);
                  hasItem = tmp6;
                }
                if (hasItem) {
                  flag = true;
                }
                let iter3 = tmp2Result();
                iter2 = iter3;
                flag2 = flag;
              } else {
                let _HermesInternal2 = HermesInternal;
                let combined3 = "" + str2 + " " + name;
                if (combined3.startsWith(query)) {
                  break;
                }
              }
              let tmp8 = constants3;
              return constants3.STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME;
            }
          }
        }
        if (flag2) {
          return constants3.OPTION_NAME_CONTAINS;
        } else {
          const untranslatedDescription = value.untranslatedDescription;
          const displayDescription = value.displayDescription;
          const toLocaleLowerCaseResult = untranslatedDescription.toLocaleLowerCase();
          if (toLocaleLowerCaseResult.includes(query)) {
            const COMMAND_DESCRIPTION_CONTAINS = constants3.COMMAND_DESCRIPTION_CONTAINS;
          }
          return COMMAND_DESCRIPTION_CONTAINS;
        }
        const tmp2 = _createForOfIteratorHelperLoose;
      }
      return constants3.COMMAND_NAME_CONTAINS;
    }
  }
  return constants3.COMMAND_NAME_STARTS_WITH;
}
function compareNames(arg0, arg1) {
  const collator = tmp8.collator;
  return collator.compare(arg0, arg1);
}
({ BuiltInSectionId: closure_20, DISCOVERY_COMMANDS_FRECENCY_LIMIT: closure_21 } = TRUE_OPTION_NAME);
({ AnalyticEvents: closure_22, ChannelTypes: closure_23 } = ME);
importDefaultResult = new importDefaultResult("ApplicationCommandIndexStore");
let closure_25 = Symbol("currentUser");
const SymbolResult = Symbol("stale");
const SymbolResult1 = Symbol("current");
let closure_28 = Object.freeze({ descriptors: [], commands: [], sectionedCommands: [], loading: true });
let closure_29 = Object.freeze({ serverVersion: SymbolResult1, fetchState: { fetching: false }, result: { sections: {}, sectionIdsByBotId: {}, version: SymbolResult1 } });
let closure_30 = Object.freeze({ serverVersion: SymbolResult, fetchState: { fetching: false } });
let closure_31 = { sensitivity: "accent", numeric: true };
let c32 = false;
let closure_33 = [];
let tmp8 = ((Store) => {
  class ApplicationCommandIndexStore {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_5(this, ApplicationCommandIndexStore);
      items1 = [...items];
      obj = outer1_8(ApplicationCommandIndexStore);
      tmp2 = outer1_7;
      if (outer1_37()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_8;
        constructResult = Reflect.construct(obj, items1, outer1_8(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.indices = {};
      map = new Map();
      tmp2Result.applicationIndices = map;
      tmp2Result.applicationIndicesVersion = 0;
      tmp2Result.oldLocale = outer1_13.locale;
      collator = new Intl.Collator(outer1_13.locale, outer1_31);
      tmp2Result.collator = collator;
      return tmp2Result;
    }
  }
  callback3(ApplicationCommandIndexStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_13);
      this.waitFor(outer1_19, outer1_12, outer1_14, outer1_15, outer1_16, outer1_17, outer1_18);
      const items = [outer1_13];
      this.syncWith(items, () => {
        const locale = outer2_13.locale;
        if (locale !== outer2_34.oldLocale) {
          outer2_43();
          const _Intl = Intl;
          const prototype = Collator.prototype;
          const collator = new Collator(locale, { sensitivity: "accent", numeric: true });
          outer2_34.collator = collator;
          outer2_34.oldLocale = locale;
        }
      });
    }
  };
  let items = [obj, , , , , , , , , , ];
  obj = {
    key: "getContextState",
    value(type) {
      if ("contextless" !== type.type) {
        if (outer1_54(type.channel)) {
          const self = this;
          let id = type.channel.guild_id;
          if (null == id) {
            id = type.channel.id;
          }
          let tmp4 = this.indices[id];
          if (null == tmp4) {
            tmp4 = outer1_30;
          }
          let tmp2 = tmp4;
        }
        return tmp2;
      }
      tmp2 = outer1_29;
    }
  };
  items[1] = obj;
  obj = {
    key: "hasContextStateApplication",
    value(arg0) {
      let channelId;
      let guildId;
      ({ channelId, guildId } = arg0);
      if (null != guildId) {
        channelId = guildId;
      }
      let sections;
      if (null != this.indices[channelId]) {
        const result = tmp.result;
        if (null != result) {
          sections = result.sections;
        }
      }
      if (null == sections) {
        sections = {};
      }
      return null != sections[arg0.applicationId];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getGuildState",
    value(arg0) {
      if (null == arg0) {
        let tmp = outer1_29;
      } else {
        const self = this;
        tmp = this.indices[arg0];
        if (null == tmp) {
          tmp = outer1_30;
        }
      }
      return tmp;
    }
  };
  items[4] = {
    key: "getUserState",
    value() {
      let tmp = this.indices[outer1_25];
      if (null == tmp) {
        tmp = outer1_30;
      }
      return tmp;
    }
  };
  items[5] = {
    key: "hasUserStateApplication",
    value(arg0) {
      let sections;
      if (null != this.indices[outer1_25]) {
        const result = tmp.result;
        if (null != result) {
          sections = result.sections;
        }
      }
      if (null == sections) {
        sections = {};
      }
      return null != sections[arg0];
    }
  };
  items[6] = {
    key: "getApplicationState",
    value(arg0) {
      if (null == arg0) {
        let tmp = outer1_29;
      } else {
        const self = this;
        tmp = this.indices[arg0];
        if (null == tmp) {
          tmp = outer1_30;
        }
      }
      return tmp;
    }
  };
  items[7] = {
    key: "getApplicationStates",
    value() {
      return this.applicationIndices;
    }
  };
  items[8] = {
    key: "hasApplicationState",
    value(arg0) {
      return arg0 in this.indices;
    }
  };
  items[9] = {
    key: "query",
    value(type, commandTypes, applicationId) {
      const self = this;
      if (null == outer1_18.getCurrentUser()) {
        return outer1_28;
      } else {
        let channel;
        if ("channel" === type.type) {
          channel = type.channel;
        }
        const contextState = self.getContextState(type);
        const userState = self.getUserState();
        const applicationState = self.getApplicationState(applicationId.applicationId);
        let applicationStates = self.getApplicationStates();
        let obj = ApplicationCommandIndexStore(outer1_3[25]);
        const permissionContext = obj.buildPermissionContext(channel, commandTypes.commandTypes);
        let tmp9 = null == channel;
        let guild_id = channel;
        if (!tmp9) {
          let prop;
          if (null != permissionContext) {
            prop = permissionContext.hasBaseAccessPermissions;
          }
          tmp9 = true === prop;
        }
        let flag3 = false;
        if (applicationId.allowFetch) {
          let tmp12 = tmp11;
          if (tmp11) {
            tmp12 = tmp9;
          }
          if (tmp12) {
            tmp12 = null != guild_id;
          }
          if (tmp12) {
            tmp12 = outer1_54(guild_id);
          }
          let flag4 = false;
          if (!tmp12) {
            if (outer1_55(userState)) {
              obj = { type: "user" };
              const applicationCommandIndex = ApplicationCommandIndexStore(outer1_3[20]).requestApplicationCommandIndex(obj);
              flag4 = true;
              const obj8 = ApplicationCommandIndexStore(outer1_3[20]);
            }
            if (tmp34) {
              obj = { type: "application", applicationId: applicationId.applicationId };
              const applicationCommandIndex1 = ApplicationCommandIndexStore(outer1_3[20]).requestApplicationCommandIndex(obj);
              flag4 = true;
              const obj10 = ApplicationCommandIndexStore(outer1_3[20]);
            }
            flag3 = flag4;
            tmp34 = outer1_55(applicationState) && null != applicationId.applicationId;
          } else {
            let obj1 = outer1_1(outer1_3[26]);
            obj1 = { miss: null == contextState.result };
            const _Object = Object;
            obj1.size = Object.keys(outer1_34.indices).length;
            obj1.track(outer1_22.APPLICATION_COMMAND_CACHE_FETCH, obj1);
            let flag5 = false;
            if (tmp21) {
              if (null == guild_id.guild_id) {
                let obj3 = ApplicationCommandIndexStore(outer1_3[20]);
                const obj2 = { type: "channel", channelId: guild_id.id };
                const applicationCommandIndex2 = obj3.requestApplicationCommandIndex(obj2);
                flag5 = true;
              }
            }
            tmp21 = outer1_55(contextState) && null != guild_id;
            obj3 = { type: "guild" };
            guild_id = guild_id.guild_id;
            obj3.guildId = guild_id;
            const applicationCommandIndex3 = ApplicationCommandIndexStore(outer1_3[20]).requestApplicationCommandIndex(obj3);
            flag5 = true;
            const obj6 = ApplicationCommandIndexStore(outer1_3[20]);
          }
        }
        const obj4 = { permissionContext, text: commandTypes.text, allowApplicationCommands: false !== commandTypes.applicationCommands, builtIns: commandTypes.builtIns };
        ({ scoreMethod: obj12.scoreMethod, allowEmptySections: obj12.allowEmptySections } = applicationId);
        obj4.contextState = contextState;
        obj4.userState = userState;
        if (!applicationId.allowApplicationState) {
          const _Map = Map;
          applicationStates = new Map();
        }
        obj4.applicationStates = applicationStates;
        ({ sortOptions: obj12.sortOptions, applicationId: obj12.singleApplicationId, installOnDemand: obj12.installOnDemand } = applicationId);
        const tmp38Result = outer1_52(obj4);
        tmp38Result.loading = tmp38Result.loading || flag3;
        return tmp38Result;
      }
    }
  };
  items[10] = {
    key: "queryInstallOnDemandApp",
    value(applicationId, channelId) {
      const self = this;
      let flag = outer1_15.getChannel(channelId);
      if (null != flag) {
        if (null != flag) {
          let obj = { channel: flag, type: "channel" };
        } else {
          obj = { type: "contextless" };
        }
        obj = {};
        const items = [ApplicationCommandIndexStore(outer1_3[27]).ApplicationCommandType.CHAT];
        obj.commandTypes = items;
        const obj1 = { placeholderCount: 5, scoreMethod: ApplicationCommandIndexStore(outer1_3[28]).ScoreMethod.COMMAND_ONLY, applicationId };
        flag = true;
        obj1.allowFetch = true;
        const query = self.query(obj, obj, obj1);
      }
    }
  };
  return callback2(ApplicationCommandIndexStore, items);
})(require("initialize").Store);
tmp8.displayName = "ApplicationCommandIndexStore";
tmp8 = new tmp8(require("dispatcher"), {
  LOGOUT: handleReset,
  CONNECTION_OPEN: function handleConnectionOpen() {
    let done;
    let length;
    const values = Object.values(tmp8.indices);
    let num = 0;
    if (0 < values.length) {
      do {
        let tmp = closure_26;
        values[num].serverVersion = closure_26;
        num = num + 1;
        length = values.length;
      } while (num < length);
    }
    const tmp2 = _createForOfIteratorHelperLoose(closure_33);
    let iter = tmp2();
    if (!iter.done) {
      do {
        let tmp3 = handleFetchSuccess;
        let tmp4 = handleFetchSuccess(iter.value);
        let iter2 = tmp2();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    closure_33 = [];
    let c32 = true;
  },
  APPLICATION_COMMAND_INDEX_FETCH_REQUEST: function handleFetchRequest(target) {
    target = target.target;
    let tmp2 = tmp8.indices[getIndexKey(undefined, target)];
    if (null == tmp2) {
      tmp2 = closure_30;
    }
    if (shouldFetch(tmp2)) {
      updateIndexAndFetchApplicationCommandIndex(target);
    }
  },
  APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: handleFetchSuccess,
  APPLICATION_COMMAND_INDEX_FETCH_FAILURE: function handleFetchFailure(target) {
    let obj = {};
    obj = { fetching: false, retryAfter: Date.now() + 5000 };
    obj.fetchState = obj;
    updateIndex(target.target, obj);
  },
  APPLICATION_COMMAND_EXECUTE_BAD_VERSION: function handleStaleCommand(arg0) {
    let applicationId;
    let channelId;
    let guildId;
    ({ applicationId, channelId, guildId } = arg0);
    let obj = { applicationId, channelId, guildId };
    if (!tmp8.hasContextStateApplication(obj)) {
      if (tmp8.hasUserStateApplication(applicationId)) {
        obj = { type: "user" };
        obj = { serverVersion: closure_26 };
        tmp8 = updateIndex(obj, obj);
      }
      if (tmp8.hasApplicationState(applicationId)) {
        const obj1 = { type: "application", applicationId };
        const obj2 = { serverVersion: closure_26 };
        updateIndex(obj1, obj2);
      }
    } else {
      if (null != guildId) {
        const obj3 = { type: "guild", guildId };
        let obj4 = obj3;
      } else {
        obj4 = { type: "channel", channelId };
      }
      guildId = { serverVersion: closure_26 };
      updateIndex(obj4, guildId);
      const tmp = updateIndex;
    }
  },
  CHANNEL_DELETE: function handleDeletedChannelIndex(channel) {
    deleteIndex({ type: "channel", channelId: channel.channel.id });
  },
  GUILD_DELETE: function handleDeletedGuildIndex(guild) {
    deleteIndex({ type: "guild", guildId: guild.guild.id });
  },
  USER_APPLICATION_UPDATE: handleStaleUserIndex,
  USER_APPLICATION_REMOVE: handleStaleUserIndex,
  GUILD_APPLICATION_COMMAND_INDEX_UPDATE: function handleGuildCommandIndexUpdate(guildId) {
    let version = guildId.version;
    let obj = { type: "guild", guildId: guildId.guildId };
    obj = {};
    if (null == version) {
      version = closure_26;
    }
    obj.serverVersion = version;
    const tmpResult = updateIndex(obj, obj);
    let sectionIdsByBotId;
    if (null != tmpResult) {
      const result = tmpResult.result;
      if (null != result) {
        sectionIdsByBotId = result.sectionIdsByBotId;
      }
    }
    if (null != sectionIdsByBotId) {
      for (const key10017 in sectionIdsByBotId) {
        let tmp8 = key10017;
        let tmp9 = dMFromUserId;
        let dMFromUserId = dMFromUserId.getDMFromUserId(key10017);
        if (null == dMFromUserId) {
          continue;
        } else {
          let tmp5 = updateIndex;
          obj = { type: "channel", channelId: dMFromUserId };
          let obj1 = {};
          let tmp6 = closure_26;
          obj1.serverVersion = closure_26;
          let tmp7 = updateIndex(obj, obj1);
          continue;
        }
        continue;
      }
    }
  },
  GUILD_MEMBERS_CHUNK_BATCH: function handleGuildMembersChunkBatch(chunks) {
    let iter3;
    const tmp = _createForOfIteratorHelperLoose(chunks.chunks);
    const iter = tmp();
    let iter2 = iter;
    let flag = false;
    let flag2 = false;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp2 = updateGuildBotMembers;
        let tmp3 = updateGuildBotMembers(value.guildId, value.members) || flag;
        iter3 = tmp();
        flag = tmp3;
        iter2 = iter3;
        flag2 = tmp3;
      } while (!iter3.done);
    }
    return flag2;
  }
});
let closure_34 = tmp8;
let closure_35 = Object.freeze({ applications: { useFrecency: false, useScore: false }, commands: { useFrecency: true, useScore: true } });
let closure_36 = { COMMAND_NAME_STARTS_WITH: 0, [0]: "COMMAND_NAME_STARTS_WITH", STARTS_WITH_COMMAND_NAME: 1, [1]: "STARTS_WITH_COMMAND_NAME", COMMAND_NAME_CONTAINS: 2, [2]: "COMMAND_NAME_CONTAINS", STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME: 3, [3]: "STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME", OPTION_NAME_CONTAINS: 4, [4]: "OPTION_NAME_CONTAINS", SECTION_NAME_STARTS_WITH: 5, [5]: "SECTION_NAME_STARTS_WITH", SECTION_NAME_CONTAINS: 6, [6]: "SECTION_NAME_CONTAINS", COMMAND_DESCRIPTION_CONTAINS: 7, [7]: "COMMAND_DESCRIPTION_CONTAINS", SECTION_DESCRIPTION_CONTAINS: 8, [8]: "SECTION_DESCRIPTION_CONTAINS" };
let result = require("_defineProperties").fileFinishedImporting("modules/application_commands/ApplicationCommandIndexStore.tsx");

export default tmp8;
export const getOrFetchApplicationCommandIndexForTarget = function getOrFetchApplicationCommandIndexForTarget() {
  return _getOrFetchApplicationCommandIndexForTarget(...arguments);
};
export { useContextIndexState };
export const useGuildIndexState = function useGuildIndexState(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  let tmp = stateFromStoresObject(React.useState(true), 2);
  const first = tmp[0];
  const dependencyMap = tmp[1];
  const items = [closure_34];
  stateFromStoresObject = _require(566).useStateFromStoresObject(items, () => {
    let tmp = outer1_34.indices[closure_0];
    if (null == tmp) {
      tmp = outer1_30;
    }
    return tmp;
  });
  const items1 = [stateFromStoresObject, arg1, arg0, first];
  const effect = React.useEffect(() => {
    let tmp = first;
    if (first) {
      tmp = null != callback;
    }
    if (tmp) {
      if (callback2) {
        let obj = callback2(675);
        obj = { miss: null == stateFromStoresObject.result };
        const _Object = Object;
        obj.size = Object.keys(outer1_34.indices).length;
        obj.track(outer1_22.APPLICATION_COMMAND_CACHE_FETCH, obj);
        if (outer1_55(stateFromStoresObject)) {
          obj = { type: "guild", guildId: callback };
          const applicationCommandIndex = callback(7924).requestApplicationCommandIndex(obj);
          const obj3 = callback(7924);
        }
      }
      dependencyMap(false);
    }
  }, items1);
  return stateFromStoresObject;
};
export { useUserIndexState };
export const useDiscoveryState = function useDiscoveryState(type, arg1, commandTypes, includeFrecency) {
  const _require = type;
  let closure_1 = arg1;
  let closure_2 = includeFrecency;
  let tmp = useQueryState(type, commandTypes, includeFrecency);
  const descriptors = tmp.descriptors;
  const commands = tmp.commands;
  const sectionedCommands = tmp.sectionedCommands;
  const loading = tmp.loading;
  let items = [type, arg1];
  const memo = React.useMemo(() => {
    let tmp;
    if ("channel" === type.type) {
      const obj = { channel: type.channel, guild: closure_1 };
      tmp = obj;
    }
    return tmp;
  }, items);
  const topCommands = _require(descriptors[31]).useTopCommands(memo);
  let items1 = [loading, includeFrecency.includeFrecency, topCommands, commands, descriptors, sectionedCommands, memo];
  return React.useMemo(() => {
    if (includeFrecency.includeFrecency) {
      if (0 !== topCommands.length) {
        const found = commands.filter((id) => outer1_8.includes(id.id));
        const sorted = found.sort((arg0, arg1) => {
          const scoreWithoutLoadingLatest = outer2_19.getScoreWithoutLoadingLatest(outer1_7, arg0);
          return outer2_19.getScoreWithoutLoadingLatest(outer1_7, arg1) - scoreWithoutLoadingLatest;
        });
        const spliceResult = sorted.splice(0, outer1_21);
        if (0 === spliceResult.length) {
          let obj = { descriptors, commands, sectionedCommands, loading };
        } else {
          obj = {};
          const items = [type(descriptors[32]).BUILT_IN_SECTIONS[outer1_20.FRECENCY]];
          HermesBuiltin.arraySpread(descriptors, 1);
          obj.descriptors = items;
          obj.commands = spliceResult.concat(commands);
          obj = { section: type(descriptors[32]).BUILT_IN_SECTIONS[outer1_20.FRECENCY], data: spliceResult };
          const items1 = [obj];
          HermesBuiltin.arraySpread(sectionedCommands, 1);
          obj.sectionedCommands = items1;
          obj.loading = loading;
        }
        return obj;
      }
    }
    return { descriptors, commands, sectionedCommands, loading };
  }, items1);
};
export { useQueryState };
export { isStale };
export const appLauncherOnlyCompareNames = function appLauncherOnlyCompareNames(arg0, arg1) {
  return compareNames(arg0, arg1);
};
export const getSection = function getSection(arg0, applicationId) {
  if (applicationId === constants.BUILT_IN) {
    let obj = { descriptor: require(7930) /* getOptionValue */.BUILT_IN_SECTIONS[constants.BUILT_IN] };
    const items = [require(1881) /* PermissionOverwriteType */.ApplicationCommandType.CHAT];
    obj.sectionCommands = require(7930) /* getOptionValue */.getBuiltInCommands(items, true, false);
    obj.isGuildInstalled = true;
    obj.isUserInstalled = true;
    return obj;
  } else {
    const contextState = tmp8.getContextState(arg0);
    const result3 = contextState.result;
    let sections;
    const userState = tmp8.getUserState();
    if (null != result3) {
      sections = result3.sections;
    }
    if (null == sections) {
      sections = {};
    }
    const result = userState.result;
    let sections1;
    if (null != result) {
      sections1 = result.sections;
    }
    if (null == sections1) {
      sections1 = {};
    }
    const result2 = tmp8.getApplicationState(applicationId).result;
    let tmp4 = null == result2;
    if (!tmp4) {
      sections = result2.sections;
      tmp4 = null == sections;
    }
    if (null != sections[applicationId]) {
      if (null != tmp2) {
        const descriptor2 = tmp2.descriptor;
        const items1 = [];
        for (const key10035 in tmp2.commands) {
          let tmp22 = key10035;
          let arr = items1.push(tmp2.commands[key10035]);
          continue;
        }
        let descriptor = descriptor2;
        let values = items1;
        const keys = Object.keys();
        if (keys !== undefined) {
          descriptor = descriptor2;
          values = items1;
          while (keys[tmp4] !== undefined) {
            let tmp24 = tmp11;
            if (tmp11 in tmp2.commands) {
              continue;
            } else {
              arr = items1.push(tmp.commands[tmp11]);
              continue;
            }
            continue;
          }
        }
      }
      obj = { descriptor, sectionCommands: values, isGuildInstalled: null != tmp, isUserInstalled: null != tmp2 };
      return obj;
    }
    if (null != sections[applicationId]) {
      descriptor = tmp.descriptor;
      const _Object3 = Object;
      values = Object.values(tmp.commands);
    } else if (null != tmp2) {
      descriptor = tmp2.descriptor;
      const _Object2 = Object;
      values = Object.values(tmp2.commands);
    } else if (null != tmp5) {
      descriptor = tmp5.descriptor;
      const _Object = Object;
      values = Object.values(tmp5.commands);
    }
  }
};
