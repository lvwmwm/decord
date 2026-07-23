// Module ID: 16331
// Function ID: 127440
// Name: _createForOfIteratorHelperLoose
// Dependencies: [31, 27, 5149, 16305, 653, 4940, 33, 4130, 689, 4939, 22, 7507, 4126, 1212, 4541, 4660, 5459, 1920, 7519, 7518, 16332, 4543, 11254, 4098, 16333, 1934, 16334, 16336, 566, 7495, 16319, 2]
// Exports: default

// Module 16331 (_createForOfIteratorHelperLoose)
import set from "set";
import { View } from "items";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { HelpdeskArticles } from "ME";
import OperatorTypes from "OperatorTypes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
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
function convertConfigArrayWithOperator(roleConnectionConfigurations, OR) {
  if (OR === require(4939) /* officialApplicationIds */.ConnectionConfigurationRuleOperator.AND) {
    if (0 === roleConnectionConfigurations.length) {
      let items = [];
    } else {
      const items1 = [];
      HermesBuiltin.arraySpread(roleConnectionConfigurations, 0);
      items = [items1];
    }
  } else {
    const _Object = Object;
    return Object.values(importDefault(22).groupBy(roleConnectionConfigurations, (connectionType) => "" + connectionType.connectionType + ":" + connectionType.applicationId));
  }
}
function HeaderSection(arg0) {
  let clearConnections;
  let hasConnections;
  let hasMembers;
  let locked;
  ({ clearConnections, locked, hasConnections, hasMembers } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = {};
  let tmp4 = null;
  if (hasMembers) {
    obj = { style: tmp.warningContainer };
    obj = { color: importDefault(689).colors.STATUS_WARNING, size: "sm" };
    const items = [callback(require(7507) /* CircleErrorIcon */.CircleErrorIcon, obj), ];
    const obj1 = { variant: "text-xs/medium", style: tmp.warningText };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj1.children = intl.string(require(1212) /* getSystemLocale */.t["2aFeef"]);
    items[1] = callback(require(4126) /* Text */.Text, obj1);
    obj.children = items;
    tmp4 = callback2(View, obj);
  }
  const items1 = [tmp4, ];
  const obj2 = {};
  const obj3 = { style: tmp.headerTitleContainer };
  const obj4 = { variant: "text-md/semibold" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj4.children = intl2.string(require(1212) /* getSystemLocale */.t.nMir27);
  const items2 = [callback(require(4126) /* Text */.Text, obj4), ];
  let tmp15;
  if (hasConnections) {
    const obj5 = { hitSlop: 8, onPress: clearConnections, disabled: locked };
    const obj6 = { variant: "text-sm/medium", color: "text-feedback-critical" };
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj6.children = intl3.string(require(1212) /* getSystemLocale */.t.ntW1cc);
    obj5.children = callback(require(4126) /* Text */.Text, obj6);
    tmp15 = callback(require(4660) /* PressableBase */.PressableOpacity, obj5);
  }
  items2[1] = tmp15;
  obj3.children = items2;
  const items3 = [callback2(View, obj3), ];
  const obj7 = { variant: "text-sm/medium" };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  const obj8 = { helpdeskArticleUrl: importDefault(1920).getArticleURL(HelpdeskArticles.CONNECTION_DETAILS_ADMIN) };
  obj7.children = intl4.format(require(1212) /* getSystemLocale */.t.q5f7tK, obj8);
  items3[1] = callback(require(5459) /* findLinks */.TextWithIOSLinkWorkaround, obj7);
  obj2.children = items3;
  items1[1] = callback2(require(4541) /* Stack */.Stack, obj2);
  obj.children = items1;
  return callback2(closure_12, obj);
}
function AndOrRadios(setPendingRoleConfigurations) {
  let locked;
  let roleConnectionConfigurations;
  ({ locked, roleConnectionConfigurations } = setPendingRoleConfigurations);
  let closure_1 = setPendingRoleConfigurations.setPendingRoleConfigurations;
  let obj = {};
  const intl = roleConnectionConfigurations(1212).intl;
  obj.title = intl.string(roleConnectionConfigurations(1212).t.Xs7PHX);
  obj.value = setPendingRoleConfigurations.currentOperator;
  obj.onChange = function onChange(arg0) {
    callback(roleConnectionConfigurations, arg0);
  };
  obj.hasIcons = false;
  obj = { value: roleConnectionConfigurations(4939).ConnectionConfigurationRuleOperator.OR };
  const intl2 = roleConnectionConfigurations(1212).intl;
  obj.label = intl2.string(roleConnectionConfigurations(1212).t.W3iY58);
  let tmp3 = locked;
  if (!locked) {
    tmp3 = arr.length < 2;
  }
  obj.disabled = tmp3;
  const items = [callback(roleConnectionConfigurations(7518).TableRadioRow, obj), ];
  obj = { value: roleConnectionConfigurations(4939).ConnectionConfigurationRuleOperator.AND };
  const intl3 = roleConnectionConfigurations(1212).intl;
  obj.label = intl3.string(roleConnectionConfigurations(1212).t.gHXS9A);
  obj.disabled = locked;
  items[1] = callback(roleConnectionConfigurations(7518).TableRadioRow, obj);
  obj.children = items;
  return closure_11(roleConnectionConfigurations(7519).TableRadioGroup, obj);
}
function renderRoleConnectionConfigurations(memo, arg1, locked, arg3, integrations) {
  let iter2;
  const _require = memo;
  const importDefault = arg1;
  const dependencyMap = locked;
  let set = integrations;
  function handleConfigurationChange(arg0, arg1) {
    let done;
    const items = [];
    const tmp = outer1_14(iter3);
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
      iter3 = iter3[arg1];
      if (null !== iter3) {
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
    callback(found);
  }
  const map = new Map();
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
  let tmp2 = _createForOfIteratorHelperLoose(map.values());
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
  const obj1 = { spacing: importDefault(689).space.PX_24 };
  arr = Array.from(map.values());
  obj1.children = arr.map((configurationItems) => outer1_10(callback(locked[20]), { configurationItems, onConfigurationChange: handleConfigurationChange, locked, integrations: set }, configurationItems[0].configuration.connectionType + ":" + configurationItems[0].index));
  return callback(_require(4541).Stack, obj1);
}
function AddConnectionButton(locked) {
  let View;
  let set;
  let _isNativeReflectConstruct;
  let dependencyMap;
  let importDefault;
  let require;
  ({ handleConnectionTapped: require, excludedConnections: importDefault, excludedApplications: dependencyMap, roleId: set, integrations: View, gameApplicationIds: _isNativeReflectConstruct } = locked);
  let obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.text = intl.string(require(1212) /* getSystemLocale */.t["OSvW5+"]);
  obj.variant = "secondary";
  obj.icon = callback(require(11254) /* CirclePlusIcon */.CirclePlusIcon, { size: "sm" });
  obj.disabled = locked.locked;
  obj.onPress = function onPress() {
    let obj = outer1_1(outer1_2[23]);
    obj = {
      addConnection(arg0) {
        return outer1_0(arg0, undefined);
      },
      excludedConnections: closure_1,
      excludedApplications: closure_2,
      integrations: closure_4,
      onCompleteApplication(arg0) {
        return outer1_0(outer2_8, arg0);
      }
    };
    let tmp3 = null;
    const combined = "SelectConnectionActionSheet-" + set;
    if (null != _isNativeReflectConstruct) {
      tmp3 = _isNativeReflectConstruct;
    }
    obj.gameApplicationIds = tmp3;
    obj.onCompleteIdentityApplication = function onCompleteIdentityApplication(arg0) {
      return outer1_0(outer2_9, arg0);
    };
    obj.openLazy(outer1_0(outer1_2[25])(outer1_2[24], outer1_2.paths), combined, obj);
  };
  return callback(require(4543) /* Button */.Button, obj);
}
({ GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE: closure_8, GUILD_ROLE_CONNECTION_APPLICATION_IDENTITY_CONNECTION_TYPE: closure_9 } = OperatorTypes);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = { formContent: { paddingTop: 16, paddingBottom: 0 } };
_createForOfIteratorHelperLoose = { display: "flex", flexDirection: "row", alignItems: "center", padding: 8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_WARNING, borderColor: require("_createForOfIteratorHelperLoose").colors.STATUS_WARNING, borderWidth: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
_createForOfIteratorHelperLoose.warningContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.warningText = { flex: 1, marginLeft: 10 };
_createForOfIteratorHelperLoose.headerTitleContainer = { display: "flex", flexDirection: "row", justifyContent: "space-between" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleEditConnectionsControls.tsx");

export default function GuildSettingsRolesEditConnectionsControls(guild) {
  let integrations;
  let locked;
  guild = guild.guild;
  const role = guild.role;
  ({ locked, integrations } = guild);
  let AND;
  let memo;
  let obj = guild(stateFromStoresArray[26]);
  const applicationIdentityLinkedRolesEnabled = obj.useApplicationIdentityLinkedRolesEnabled(guild.id);
  let obj1 = guild(stateFromStoresArray[27]);
  const applicationIdentityLinkedRolesEnabled1 = obj1.useApplicationIdentityLinkedRolesEnabled(guild.id, "guild_settings_roles_edit_connections");
  let obj2 = guild(stateFromStoresArray[28]);
  let items = [_isNativeReflectConstruct];
  const items1 = [role.id, guild.id];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const roleMemberCount = outer1_5.getRoleMemberCount(guild.id);
    let tmp2;
    if (null != roleMemberCount) {
      tmp2 = roleMemberCount[role.id];
    }
    return tmp2;
  }, items1);
  let obj3 = guild(stateFromStoresArray[28]);
  const items2 = [closure_6];
  stateFromStoresArray = obj3.useStateFromStoresArray(items2, () => {
    const editedRoleConnectionConfigurationsMap = outer1_6.getEditedRoleConnectionConfigurationsMap();
    let items = editedRoleConnectionConfigurationsMap.get(role.id);
    if (null == items) {
      items = [];
    }
    return items;
  });
  if (stateFromStoresArray.length > 1) {
    AND = guild(stateFromStoresArray[9]).ConnectionConfigurationRuleOperator.OR;
  } else {
    AND = guild(stateFromStoresArray[9]).ConnectionConfigurationRuleOperator.AND;
  }
  const items3 = [AND, stateFromStoresArray];
  memo = AND.useMemo(() => {
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
  const items4 = [memo];
  const memo1 = AND.useMemo(() => new Set(memo.map((connectionType) => connectionType.connectionType)), items4);
  const items5 = [memo];
  let num3 = 0;
  const memo2 = AND.useMemo(() => {
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
  obj = { contentContainerStyle: _createForOfIteratorHelperLoose().formContent, keyboardShouldPersistTaps: "handled" };
  obj = { spacing: role(stateFromStoresArray[8]).space.PX_24 };
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
          const result = guild(stateFromStoresArray[30]).updateRoleConnectionConfigurations(role.id, outer1_16(arg0, arg1));
        }
    };
    tmp16 = callback(AndOrRadios, obj2);
  }
  items6[1] = tmp16;
  let tmp19 = null;
  if (memo1.size > 0) {
    const id = role.id;
    tmp19 = renderRoleConnectionConfigurations(memo, (arg0) => {
      const result = guild(stateFromStoresArray[30]).updateRoleConnectionConfigurations(role.id, outer1_16(arg0, AND));
    }, locked, undefined, integrations);
  }
  items6[2] = tmp19;
  obj3 = {
    handleConnectionTapped(connectionType) {
      const items = [...memo];
      const obj = { connectionType, connectionMetadataField: undefined, applicationId: arg1, operator: undefined, value: undefined };
      items.push(obj);
      const result = guild(stateFromStoresArray[30]).updateRoleConnectionConfigurations(role.id, outer1_16(items, AND));
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
  obj.children = closure_11(guild(stateFromStoresArray[14]).Stack, obj);
  return callback(guild(stateFromStoresArray[29]).Form, obj);
};
