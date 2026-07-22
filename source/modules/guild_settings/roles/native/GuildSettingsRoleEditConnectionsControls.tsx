// Module ID: 16214
// Function ID: 125267
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 16214 (_createForOfIteratorHelperLoose)
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
function convertConfigArrayWithOperator(roleConnectionConfigurations, OR) {
  if (OR === OR(dependencyMap[9]).ConnectionConfigurationRuleOperator.AND) {
    if (0 === roleConnectionConfigurations.length) {
      let items = [];
    } else {
      const items1 = [];
      HermesBuiltin.arraySpread(roleConnectionConfigurations, 0);
      items = [items1];
    }
  } else {
    const _Object = Object;
    return Object.values(importDefault(dependencyMap[10]).groupBy(roleConnectionConfigurations, (connectionType) => "" + connectionType.connectionType + ":" + connectionType.applicationId));
  }
}
function HeaderSection(arg0) {
  let clearConnections;
  let hasConnections;
  let hasMembers;
  let locked;
  ({ clearConnections, locked, hasConnections, hasMembers } = arg0);
  const tmp = callback3();
  let obj = {};
  let tmp4 = null;
  if (hasMembers) {
    obj = { style: tmp.warningContainer };
    obj = { color: importDefault(dependencyMap[8]).colors.STATUS_WARNING, size: "sm" };
    const items = [callback(arg1(dependencyMap[11]).CircleErrorIcon, obj), ];
    const obj1 = { variant: "text-xs/medium", style: tmp.warningText };
    const intl = arg1(dependencyMap[13]).intl;
    obj1.children = intl.string(arg1(dependencyMap[13]).t.2aFeef);
    items[1] = callback(arg1(dependencyMap[12]).Text, obj1);
    obj.children = items;
    tmp4 = callback2(View, obj);
  }
  const items1 = [tmp4, ];
  const obj2 = {};
  const obj3 = { style: tmp.headerTitleContainer };
  const obj4 = { variant: "text-md/semibold" };
  const intl2 = arg1(dependencyMap[13]).intl;
  obj4.children = intl2.string(arg1(dependencyMap[13]).t.nMir27);
  const items2 = [callback(arg1(dependencyMap[12]).Text, obj4), ];
  let tmp15;
  if (hasConnections) {
    const obj5 = { hitSlop: 8, onPress: clearConnections, disabled: locked };
    const obj6 = { cachedAt: 1, edpbxy: "center" };
    const intl3 = arg1(dependencyMap[13]).intl;
    obj6.children = intl3.string(arg1(dependencyMap[13]).t.ntW1cc);
    obj5.children = callback(arg1(dependencyMap[12]).Text, obj6);
    tmp15 = callback(arg1(dependencyMap[15]).PressableOpacity, obj5);
  }
  items2[1] = tmp15;
  obj3.children = items2;
  const items3 = [callback2(View, obj3), ];
  const obj7 = { variant: "text-sm/medium" };
  const intl4 = arg1(dependencyMap[13]).intl;
  const obj8 = { helpdeskArticleUrl: importDefault(dependencyMap[17]).getArticleURL(HelpdeskArticles.CONNECTION_DETAILS_ADMIN) };
  obj7.children = intl4.format(arg1(dependencyMap[13]).t.q5f7tK, obj8);
  items3[1] = callback(arg1(dependencyMap[16]).TextWithIOSLinkWorkaround, obj7);
  obj2.children = items3;
  items1[1] = callback2(arg1(dependencyMap[14]).Stack, obj2);
  obj.children = items1;
  return callback2(closure_12, obj);
}
function AndOrRadios(setPendingRoleConfigurations) {
  let locked;
  let roleConnectionConfigurations;
  ({ locked, roleConnectionConfigurations } = setPendingRoleConfigurations);
  const arg1 = roleConnectionConfigurations;
  let closure_1 = setPendingRoleConfigurations.setPendingRoleConfigurations;
  let obj = {};
  const intl = arg1(dependencyMap[13]).intl;
  obj.title = intl.string(arg1(dependencyMap[13]).t.Xs7PHX);
  obj.value = setPendingRoleConfigurations.currentOperator;
  obj.onChange = function onChange(arg0) {
    callback(roleConnectionConfigurations, arg0);
  };
  obj.hasIcons = false;
  obj = { value: arg1(dependencyMap[9]).ConnectionConfigurationRuleOperator.OR };
  const intl2 = arg1(dependencyMap[13]).intl;
  obj.label = intl2.string(arg1(dependencyMap[13]).t.W3iY58);
  let tmp3 = locked;
  if (!locked) {
    tmp3 = arr.length < 2;
  }
  obj.disabled = tmp3;
  const items = [callback(arg1(dependencyMap[19]).TableRadioRow, obj), ];
  obj = { value: arg1(dependencyMap[9]).ConnectionConfigurationRuleOperator.AND };
  const intl3 = arg1(dependencyMap[13]).intl;
  obj.label = intl3.string(arg1(dependencyMap[13]).t.gHXS9A);
  obj.disabled = locked;
  items[1] = callback(arg1(dependencyMap[19]).TableRadioRow, obj);
  obj.children = items;
  return closure_11(arg1(dependencyMap[18]).TableRadioGroup, obj);
}
function renderRoleConnectionConfigurations(memo, arg1, locked, arg3, integrations) {
  let iter2;
  arg1 = memo;
  const importDefault = arg1;
  const dependencyMap = locked;
  let closure_3 = integrations;
  function handleConfigurationChange(arg0, arg1) {
    let done;
    const items = [];
    const tmp = callback2(arg0);
    let iter = tmp();
    if (!iter.done) {
      do {
        let obj = {};
        let tmp2 = obj;
        let merged = Object.assign(iter.value);
        let arr = items.push(obj);
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    if (null == arg0) {
      arg0 = iter3;
      if (null !== arg0[arg1]) {
        if (null == iter3.connectionMetadataField) {
          if (null == iter3.operator) {
            if (null == iter3.value) {
              let found = items.filter((connectionType) => {
                if (null == iter3.applicationId) {
                  let tmp2 = connectionType.connectionType !== iter3.connectionType;
                } else {
                  tmp2 = connectionType.connectionType !== iter3.connectionType;
                  if (!tmp2) {
                    tmp2 = connectionType.applicationId !== iter3.applicationId;
                  }
                }
                return tmp2;
              });
            }
          }
        }
      }
      items.splice(arg1, 1);
      found = items;
    } else if (-1 === arg1) {
      items.push(arg0);
      found = items;
    } else {
      found = items;
      if (arg1 >= 0) {
        items[arg1] = arg0;
        found = items;
      }
    }
    arg1(found);
  }
  const map = new Map();
  const View = map;
  const item = memo.forEach((connectionType, index) => {
    const combined = "" + connectionType.connectionType + ":" + connectionType.applicationId;
    let obj = map;
    if (map.has(combined)) {
      const value = obj.get(combined);
      if (null != value) {
        obj = { index, configuration: connectionType };
        value.push(obj);
      }
    } else {
      obj = { index, configuration: connectionType };
      const items = [obj];
      const result = obj.set(combined, items);
    }
  });
  const tmp2 = _createForOfIteratorHelperLoose(map.values());
  let iter = tmp2();
  if (!iter.done) {
    do {
      let value = iter.value;
      if (!value.some((configuration) => null == configuration.configuration.connectionMetadataField && null == configuration.configuration.operator && null == configuration.configuration.value)) {
        let obj = {};
        let tmp3 = obj;
        let merged = Object.assign(value[0].configuration);
        obj["connectionMetadataField"] = undefined;
        obj["operator"] = undefined;
        obj["value"] = undefined;
        obj = {};
        obj.index = memo.push(obj) - 1;
        obj.configuration = obj;
        let arr = value.push(obj);
      }
      iter2 = tmp2();
      iter = iter2;
    } while (!iter2.done);
  }
  const obj1 = { spacing: importDefault(dependencyMap[8]).space.PX_24 };
  arr = Array.from(map.values());
  obj1.children = arr.map((configurationItems) => callback(arg1(arg2[20]), { configurationItems, onConfigurationChange: handleConfigurationChange, locked: arg2, integrations: arg4 }, configurationItems[0].configuration.connectionType + ":" + configurationItems[0].index));
  return callback(arg1(dependencyMap[14]).Stack, obj1);
}
function AddConnectionButton(locked) {
  ({ handleConnectionTapped: closure_0, excludedConnections: closure_1, excludedApplications: closure_2, roleId: closure_3, integrations: closure_4, gameApplicationIds: closure_5 } = locked);
  const obj = {};
  const intl = arg1(dependencyMap[13]).intl;
  obj.text = intl.string(arg1(dependencyMap[13]).t.OSvW5+);
  obj.variant = "secondary";
  obj.icon = callback(arg1(dependencyMap[22]).CirclePlusIcon, { size: "sm" });
  obj.disabled = locked.locked;
  obj.onPress = function onPress() {
    let obj = callback2(paths[23]);
    obj = {
      addConnection(arg0) {
        return callback(arg0, undefined);
      },
      excludedConnections: callback2,
      excludedApplications: paths,
      integrations: closure_4,
      onCompleteApplication(arg0) {
        return callback(closure_8, arg0);
      }
    };
    let tmp3 = null;
    const combined = "SelectConnectionActionSheet-" + closure_3;
    if (null != closure_5) {
      tmp3 = closure_5;
    }
    obj.gameApplicationIds = tmp3;
    obj.onCompleteIdentityApplication = function onCompleteIdentityApplication(arg0) {
      return callback(closure_9, arg0);
    };
    obj.openLazy(callback(paths[25])(paths[24], paths.paths), combined, obj);
  };
  return callback(arg1(dependencyMap[21]).Button, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const HelpdeskArticles = arg1(dependencyMap[4]).HelpdeskArticles;
({ GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE: closure_8, GUILD_ROLE_CONNECTION_APPLICATION_IDENTITY_CONNECTION_TYPE: closure_9 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = { formContent: { 335090477: "<string:855900161>", -1945376054: "<string:1902706689>" } };
obj = { 1640819852: 8, -1577954757: null, 861078261: "\u270A\u{1F3FF}", 1538193864: true, -73374974: null, 1314541922: 8, -1457879470: null, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_FEEDBACK_WARNING, borderColor: importDefault(dependencyMap[8]).colors.STATUS_WARNING, borderRadius: importDefault(dependencyMap[8]).radii.xs };
obj.warningContainer = obj;
obj.warningText = { flexGrow: true, zIndex: true };
obj.headerTitleContainer = {};
let closure_13 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleEditConnectionsControls.tsx");

export default function GuildSettingsRolesEditConnectionsControls(guild) {
  let integrations;
  let locked;
  guild = guild.guild;
  const arg1 = guild;
  const role = guild.role;
  const importDefault = role;
  ({ locked, integrations } = guild);
  let React;
  let View;
  let obj = arg1(dependencyMap[26]);
  const applicationIdentityLinkedRolesEnabled = obj.useApplicationIdentityLinkedRolesEnabled(guild.id);
  let obj1 = arg1(dependencyMap[27]);
  const applicationIdentityLinkedRolesEnabled1 = obj1.useApplicationIdentityLinkedRolesEnabled(guild.id, "guild_settings_roles_edit_connections");
  let obj2 = arg1(dependencyMap[28]);
  const items = [closure_5];
  const items1 = [role.id, guild.id];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const roleMemberCount = roleMemberCount.getRoleMemberCount(guild.id);
    let tmp2;
    if (null != roleMemberCount) {
      tmp2 = roleMemberCount[closure_1.id];
    }
    return tmp2;
  }, items1);
  let obj3 = arg1(dependencyMap[28]);
  const items2 = [closure_6];
  const stateFromStoresArray = obj3.useStateFromStoresArray(items2, () => {
    const editedRoleConnectionConfigurationsMap = editedRoleConnectionConfigurationsMap.getEditedRoleConnectionConfigurationsMap();
    let items = editedRoleConnectionConfigurationsMap.get(role.id);
    if (null == items) {
      items = [];
    }
    return items;
  });
  const dependencyMap = stateFromStoresArray;
  if (stateFromStoresArray.length > 1) {
    let AND = arg1(dependencyMap[9]).ConnectionConfigurationRuleOperator.OR;
  } else {
    AND = arg1(dependencyMap[9]).ConnectionConfigurationRuleOperator.AND;
  }
  React = AND;
  const items3 = [AND, stateFromStoresArray];
  const memo = React.useMemo(() => {
    if (AND === guild(stateFromStoresArray[9]).ConnectionConfigurationRuleOperator.OR) {
      let flatResult = stateFromStoresArray.flat();
    } else {
      if (null != stateFromStoresArray) {
        if (stateFromStoresArray.length > 0) {
          flatResult = stateFromStoresArray[0];
        }
      }
      flatResult = [];
    }
    return flatResult;
  }, items3);
  View = memo;
  const items4 = [memo];
  const memo1 = React.useMemo(() => new Set(memo.map((connectionType) => connectionType.connectionType)), items4);
  const items5 = [memo];
  let num3 = 0;
  const memo2 = React.useMemo(() => {
    const mapped = memo.map((applicationId) => {
      applicationId = applicationId.applicationId;
      let str = "";
      if (null != applicationId) {
        str = applicationId;
      }
      return str;
    });
    return new Set(mapped.filter((arg0) => "" !== arg0));
  }, items5);
  if (null != stateFromStores) {
    num3 = stateFromStores;
  }
  obj = { contentContainerStyle: callback3().formContent, keyboardShouldPersistTaps: "handled" };
  obj = { spacing: importDefault(dependencyMap[8]).space.PX_24 };
  obj1 = {
    clearConnections() {
      const result = guild(stateFromStoresArray[30]).updateRoleConnectionConfigurations(role.id, []);
    },
    locked,
    hasConnections: tmp12,
    hasMembers: num3 > 0
  };
  const items6 = [callback(HeaderSection, obj1), , , ];
  let tmp16 = null;
  if (memo1.size > 0) {
    obj2 = {
      locked,
      currentOperator: AND,
      roleConnectionConfigurations: memo,
      setPendingRoleConfigurations(arg0, arg1) {
          const result = guild(stateFromStoresArray[30]).updateRoleConnectionConfigurations(role.id, callback(arg0, arg1));
        }
    };
    tmp16 = callback(AndOrRadios, obj2);
  }
  items6[1] = tmp16;
  let tmp19 = null;
  if (memo1.size > 0) {
    const id = role.id;
    tmp19 = renderRoleConnectionConfigurations(memo, (arg0) => {
      const result = guild(stateFromStoresArray[30]).updateRoleConnectionConfigurations(role.id, callback(arg0, AND));
    }, locked, undefined, integrations);
  }
  items6[2] = tmp19;
  obj3 = {
    handleConnectionTapped(connectionType) {
      const items = [...closure_4];
      const obj = { connectionType, connectionMetadataField: undefined, applicationId: arg1, operator: undefined, value: undefined };
      items.push(obj);
      const result = guild(stateFromStoresArray[30]).updateRoleConnectionConfigurations(role.id, callback(items, AND));
    },
    excludedConnections: memo1,
    excludedApplications: memo2,
    roleId: role.id,
    integrations
  };
  if (applicationIdentityLinkedRolesEnabled) {
    let gameApplicationIds = guild.gameApplicationIds;
  } else {
    gameApplicationIds = null;
  }
  obj3.gameApplicationIds = gameApplicationIds;
  obj3.locked = locked;
  items6[3] = callback(AddConnectionButton, obj3);
  obj.children = items6;
  obj.children = closure_11(arg1(dependencyMap[14]).Stack, obj);
  return callback(arg1(dependencyMap[29]).Form, obj);
};
