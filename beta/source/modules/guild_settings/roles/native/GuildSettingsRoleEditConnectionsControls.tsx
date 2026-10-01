// Module ID: 17437
// Function ID: 17438
// Name: GuildSettingsRoleEditConnectionsControls
// Dependencies: [19, 17, 6549, 17410, 1074, 5720, 21, 4836, 576, 5719, 12, 6028, 4832, 1115, 5279, 5435, 2111, 5997, 6000, 17438, 5281, 10774, 4800, 17440, 1981, 17441, 17443, 504, 8053, 17424, 2]
// Exports: default

// Module 17437 (GuildSettingsRoleEditConnectionsControls)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants2 from "Constants" /* 1074 */;
import intl5 from "intl" /* 1115 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import ConnectionsUtils from "ConnectionsUtils" /* 5719 */;
import CircleErrorIcon2 from "CircleErrorIcon" /* 6028 */;
import CirclePlusIcon from "CirclePlusIcon" /* 10774 */;
import GuildSettingsRolesActionCreators from "GuildSettingsRolesActionCreators" /* 17424 */;
import GuildSettingsRoleEditConnectionConfigurationDefault from "GuildSettingsRoleEditConnectionConfiguration" /* 17438 */;
import react from "react" /* 19 */;
import GuildRoleMemberCountStore from "GuildRoleMemberCountStore" /* 6549 */;
import GuildSettingsRolesStore from "GuildSettingsRolesStore" /* 17410 */;
import Constants from "Constants" /* 5720 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault, map, set;

let c10;
let c9;
let closure_12;
let metroImportAll;
let obj2;
let unpackModuleId;
const f108116 = (connectionType) => "" + connectionType.connectionType + ":" + connectionType.applicationId;
function HeaderSection(arg0) {
  let Text3;
  let clearConnections;
  let format;
  let hasConnections;
  let hasMembers;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items2;
  let items3;
  let locked;
  let obj11;
  let obj12;
  let obj7;
  let q5f7tK;
  ({ clearConnections, locked, hasConnections, hasMembers } = arg0);
  const tmp = closure_13();
  let tmp2Result = null;
  const tmp3 = closure_12;
  if (hasMembers) {
    const obj = { style: tmp.warningContainer, children: items };
    const obj2 = { color: nativeDefault.colors.STATUS_WARNING, size: "sm" };
    const CircleErrorIcon = CircleErrorIcon2.CircleErrorIcon;
    items = [authStore(CircleErrorIcon, obj2), ];
    const obj3 = { variant: "text-xs/medium", style: tmp.warningText, children: intl.string(intl5.t["2aFeef"]) };
    const Text = Text_Text.Text;
    intl = intl5.intl;
    items[1] = authStore(Text, obj3);
    tmp2Result = tmp2(View, obj);
  }
  const items1 = [tmp2Result, ];
  const obj4 = { style: tmp.headerTitleContainer, children: items2 };
  const Stack = Stack_Stack.Stack;
  const obj5 = { variant: "text-md/semibold", children: intl2.string(intl5.t.nMir27) };
  const Text2 = Text_Text.Text;
  intl2 = intl5.intl;
  items2 = [authStore(Text2, obj5), ];
  let tmp13Result;
  const tmp12 = View;
  if (hasConnections) {
    const obj6 = { hitSlop: 8, onPress: clearConnections, disabled: locked, children: authStore(Text3, obj7) };
    const PressableOpacity = tmp10(5435).PressableOpacity;
    obj7 = { variant: "text-sm/medium", color: "text-feedback-critical", children: intl3.string(intl5.t.ntW1cc) };
    Text3 = tmp10(4832).Text;
    intl3 = tmp10(1115).intl;
    tmp13Result = tmp13(PressableOpacity, obj6);
  }
  const obj8 = { children: items1 };
  const obj9 = { children: items3 };
  items2[1] = tmp13Result;
  items3 = [unpackModuleId(tmp12, obj4), ];
  const obj10 = { variant: "text-sm/medium", children: format(q5f7tK, obj11) };
  const Text4 = tmp10(4832).Text;
  const intl4 = tmp10(1115).intl;
  format = intl4.format;
  obj11 = { helpdeskArticleUrl: obj12.getArticleURL(HelpdeskArticles.CONNECTION_DETAILS_ADMIN) };
  q5f7tK = tmp10(1115).t.q5f7tK;
  obj12 = HelpdeskUtilsDefault;
  items3[1] = authStore(Text4, obj10);
  items1[1] = unpackModuleId(Stack, obj9);
  return unpackModuleId(tmp3, obj8);
}
function AndOrRadios(setPendingRoleConfigurations) {
  let intl;
  let intl2;
  let intl3;
  let items2;
  let locked;
  let roleConnectionConfigurations;
  let tmp11;
  let values2;
  ({ locked, roleConnectionConfigurations } = setPendingRoleConfigurations);
  let closure_1 = setPendingRoleConfigurations.setPendingRoleConfigurations;
  const currentOperator = setPendingRoleConfigurations.currentOperator;
  if (ConnectionsUtils.ConnectionConfigurationRuleOperator.OR === ConnectionsUtils.ConnectionConfigurationRuleOperator.AND) {
    let items;
    if (0 === roleConnectionConfigurations.length) {
      items = [];
    } else {
      const items1 = [];
      HermesBuiltin.arraySpread(items1, roleConnectionConfigurations, 0);
      items = [items1];
    }
    values2 = items;
  } else {
    const _Object = Object;
    const obj = _modDef12;
    values2 = values(obj.groupBy(roleConnectionConfigurations, f108116));
  }
  const obj2 = {
    title: intl.string(intl5.t.Xs7PHX),
    value: currentOperator,
    onChange(arg0) {
      closure_1(roleConnectionConfigurations, arg0);
    },
    hasIcons: false,
    children: items2
  };
  const TableRadioGroup = tmp2(5997).TableRadioGroup;
  intl = tmp2(1115).intl;
  const obj3 = { value: ConnectionsUtils.ConnectionConfigurationRuleOperator.OR, label: intl2.string(intl5.t.W3iY58), disabled: tmp11 };
  const TableRadioRow = tmp2(6000).TableRadioRow;
  intl2 = tmp2(1115).intl;
  tmp11 = locked;
  const tmp9 = unpackModuleId;
  if (!tmp11) {
    tmp11 = values2.length < 2;
  }
  items2 = [authStore(TableRadioRow, obj3), ];
  const obj4 = { value: ConnectionsUtils.ConnectionConfigurationRuleOperator.AND, label: intl3.string(intl5.t.gHXS9A), disabled: locked };
  const TableRadioRow2 = tmp2(6000).TableRadioRow;
  intl3 = tmp2(1115).intl;
  items2[1] = authStore(TableRadioRow2, obj4);
  return tmp9(TableRadioGroup, obj2);
}
function renderRoleConnectionConfigurations(memo, arg1, locked, arg3, integrations) {
  let arr4;
  let closure_1;
  _require = memo;
  importDefault = arg1;
  dependencyMap = locked;
  function handleConfigurationChange(arg0, arg1) {
    let found;
    const items = [];
    for (const item10006 of memo) {
      let obj = {};
      let tmp = obj;
      let tmp2 = item10006;
      let push = items.push;
      let merged = Object.assign(item10006);
      let arr = push(obj);
      continue;
    }
    if (null == arg0) {
      const iter = memo[arg1];
      if (null !== iter) {
        if (null == iter.connectionMetadataField) {
          if (null == iter.operator) {
            if (null == iter.value) {
              found = items.filter((connectionType) => {
                let tmp2;
                if (null == iter.applicationId) {
                  tmp2 = connectionType.connectionType !== tmp.connectionType;
                } else {
                  tmp2 = connectionType.connectionType !== tmp.connectionType || connectionType.applicationId !== tmp.applicationId;
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
    closure_1(found);
  }
  map = new Map();
  const item = memo.forEach((connectionType, index) => {
    const combined = "" + connectionType.connectionType + ":" + connectionType.applicationId;
    if (map.has(combined)) {
      const value = obj.get(combined);
      if (value != null) {
        const obj2 = { index, configuration: connectionType };
        value.push(obj2);
      }
    } else {
      const items = [{ index, configuration: connectionType }];
      const obj3 = { index, configuration: connectionType };
      const result = obj.set(combined, items);
    }
  });
  const values = map.values();
  let iter = values[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let arr = nextResult;
    if (!nextResult.some((configuration) => null == configuration.configuration.connectionMetadataField && null == configuration.configuration.operator && null == configuration.configuration.value)) {
      let obj = { connectionMetadataField: undefined, operator: undefined, value: undefined };
      let merged = Object.assign(arr[0].configuration);
      let obj2 = { index: memo.push(obj) - 1, configuration: obj };
      let arr2 = arr.push(obj2);
    }
    continue;
  }
  let obj3 = {
    spacing: nativeDefault.space.PX_24,
    children: arr4.map((configurationItems) => {
      const obj = { configurationItems, onConfigurationChange: handleConfigurationChange, locked, integrations };
      return authStore(GuildSettingsRoleEditConnectionConfigurationDefault, obj, configurationItems[0].configuration.connectionType + ":" + configurationItems[0].index);
    })
  };
  const Stack = require("Stack/Stack").Stack;
  arr4 = Array.from(map.values());
  return closure_10(Stack, obj3);
}
function AddConnectionButton(locked) {
  let excludedApplications;
  let excludedConnections;
  let intl;
  let require;
  ({ handleConnectionTapped: require, excludedConnections: importDefault, excludedApplications: dependencyMap, roleId: react, integrations: View, gameApplicationIds: GuildRoleMemberCountStore } = locked);
  locked = locked.locked;
  let obj = {
    text: intl.string(intl5.t["OSvW5+"]),
    variant: "secondary",
    icon: closure_10(CirclePlusIcon.CirclePlusIcon, { size: "sm" }),
    disabled: locked,
    onPress() {
      let tmp4;
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      ActionSheetActionCreatorsDefault;
      const obj = {
        addConnection(arg0) {
          return closure_1_0(arg0, undefined);
        },
        excludedConnections: importDefault,
        excludedApplications: dependencyMap,
        integrations: View,
        onCompleteApplication(arg0) {
          return closure_1_0(closure_2_8, arg0);
        },
        gameApplicationIds: tmp4,
        onCompleteIdentityApplication(arg0) {
          return closure_1_0(closure_2_9, arg0);
        }
      };
      tmp4 = GuildRoleMemberCountStore;
      const tmp2 = asyncRequire(17440, dependencyMap.paths);
      const combined = "SelectConnectionActionSheet-" + react;
      if (GuildRoleMemberCountStore == null) {
        tmp4 = null;
      }
      openLazy(tmp2, combined, obj);
    }
  };
  const Button = components_Button_Button.Button;
  intl = intl5.intl;
  return closure_10(Button, obj);
}
const View = react_native.View;
const HelpdeskArticles = Constants2.HelpdeskArticles;
({ GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE: metroImportAll, GUILD_ROLE_CONNECTION_APPLICATION_IDENTITY_CONNECTION_TYPE: c9 } = Constants);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let obj = { formContent: { paddingTop: 16, paddingBottom: 0 }, warningContainer: obj2, warningText: { flex: 1, marginLeft: 10 }, headerTitleContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between" } };
obj2 = { display: "flex", flexDirection: "row", alignItems: "center", padding: 8, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING, borderColor: nativeDefault.colors.STATUS_WARNING, borderWidth: 1, borderRadius: nativeDefault.radii.xs };
let closure_13 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleEditConnectionsControls.tsx");

export default function GuildSettingsRolesEditConnectionsControls(guild) {
  let Stack;
  let gameApplicationIds;
  let items6;
  let locked;
  let obj6;
  let tmp12;
  guild = guild.guild;
  const role = guild.role;
  ({ locked, integrations } = guild);
  let stateFromStoresArray;
  let AND;
  let memo;
  let tmp2 = guild;
  const tmp3 = stateFromStoresArray;
  const tmp = closure_13();
  let obj = guild(stateFromStoresArray[25]);
  const applicationIdentityLinkedRolesEnabled = obj.useApplicationIdentityLinkedRolesEnabled(guild.id);
  let obj2 = guild(stateFromStoresArray[26]);
  const applicationIdentityLinkedRolesEnabled1 = obj2.useApplicationIdentityLinkedRolesEnabled(guild.id, "guild_settings_roles_edit_connections");
  let items = [GuildRoleMemberCountStore];
  let items1 = [role.id, guild.id];
  const obj3 = guild(stateFromStoresArray[27]);
  let num = obj3.useStateFromStores(items, () => {
    const roleMemberCount = GuildRoleMemberCountStore.getRoleMemberCount(guild.id);
    let tmp2;
    if (roleMemberCount != null) {
      tmp2 = roleMemberCount[role.id];
    }
    return tmp2;
  }, items1);
  let items2 = [GuildSettingsRolesStore];
  const obj4 = guild(stateFromStoresArray[27]);
  stateFromStoresArray = obj4.useStateFromStoresArray(items2, () => {
    const editedRoleConnectionConfigurationsMap = GuildSettingsRolesStore.getEditedRoleConnectionConfigurationsMap();
    let items = editedRoleConnectionConfigurationsMap.get(role.id);
    if (items == null) {
      items = [];
    }
    return items;
  });
  if (stateFromStoresArray.length > 1) {
    AND = tmp2(tmp3[9]).ConnectionConfigurationRuleOperator.OR;
  } else {
    AND = tmp2(tmp3[9]).ConnectionConfigurationRuleOperator.AND;
  }
  const items3 = [AND, stateFromStoresArray];
  memo = AND.useMemo(() => {
    let flatResult;
    if (AND === ConnectionsUtils.ConnectionConfigurationRuleOperator.OR) {
      flatResult = stateFromStoresArray.flat();
    } else {
      if (null != stateFromStoresArray) {
        if (stateFromStoresArray.length > 0) {
          flatResult = arr[0];
        }
      }
      flatResult = [];
    }
    return flatResult;
  }, items3);
  const items4 = [memo];
  const memo1 = AND.useMemo(() => {
    set = new Set(memo.map((connectionType) => connectionType.connectionType));
    return set;
  }, items4);
  const items5 = [memo];
  const memo2 = AND.useMemo(() => {
    const mapped = memo.map((applicationId) => {
      let str = applicationId.applicationId;
      if (str == null) {
        str = "";
      }
      return str;
    });
    set = new Set(mapped.filter((item) => "" !== item));
    return set;
  }, items5);
  if (num == null) {
    num = 0;
  }
  const obj5 = { contentContainerStyle: tmp.formContent, keyboardShouldPersistTaps: "handled", children: tmp12(Stack, obj6) };
  const Form = tmp2(tmp3[28]).Form;
  obj6 = { spacing: role(tmp3[8]).space.PX_24, children: items6 };
  Stack = tmp2(tmp3[14]).Stack;
  items6 = [, , , ];
  const obj7 = {
    clearConnections() {
      const obj = GuildSettingsRolesActionCreators;
      const result = obj.updateRoleConnectionConfigurations(role.id, []);
    },
    locked,
    hasConnections: memo1.size > 0,
    hasMembers: num > 0
  };
  items6[0] = closure_10(HeaderSection, obj7);
  let tmp11Result = null;
  tmp12 = closure_11;
  if (memo1.size > 0) {
    const obj8 = {
      locked,
      currentOperator: AND,
      roleConnectionConfigurations: memo,
      setPendingRoleConfigurations(arg0, arg1) {
          let values2;
          const updateRoleConnectionConfigurations = GuildSettingsRolesActionCreators.updateRoleConnectionConfigurations;
          const id = role.id;
          GuildSettingsRolesActionCreators;
          if (arg1 === ConnectionsUtils.ConnectionConfigurationRuleOperator.AND) {
            let items;
            if (0 === arg0.length) {
              items = [];
            } else {
              const items1 = [];
              HermesBuiltin.arraySpread(items1, arg0, 0);
              items = [items1];
            }
            values2 = items;
          } else {
            const _Object = Object;
            const obj = _modDef12;
            values2 = values(obj.groupBy(arg0, f108116));
          }
          const result = updateRoleConnectionConfigurations(id, values2);
        }
    };
    tmp11Result = tmp11(AndOrRadios, obj8);
  }
  items6[1] = tmp11Result;
  let tmp15 = null;
  if (memo1.size > 0) {
    let id = role.id;
    tmp15 = renderRoleConnectionConfigurations(memo, (arg0) => {
      let values2;
      const updateRoleConnectionConfigurations = GuildSettingsRolesActionCreators.updateRoleConnectionConfigurations;
      const id = role.id;
      GuildSettingsRolesActionCreators;
      if (AND === ConnectionsUtils.ConnectionConfigurationRuleOperator.AND) {
        let items;
        if (0 === arg0.length) {
          items = [];
        } else {
          const items1 = [];
          HermesBuiltin.arraySpread(items1, arg0, 0);
          items = [items1];
        }
        values2 = items;
      } else {
        const _Object = Object;
        const obj = _modDef12;
        values2 = values(obj.groupBy(arg0, f108116));
      }
      const result = updateRoleConnectionConfigurations(id, values2);
    }, locked, 0, integrations);
  }
  items6[2] = tmp15;
  const obj9 = {
    handleConnectionTapped(connectionType, applicationId) {
      let values2;
      const items = [...memo];
      const obj = { connectionType, connectionMetadataField: "Array", applicationId, operator: "dispatch", value: "r" };
      items.push(obj);
      const updateRoleConnectionConfigurations = GuildSettingsRolesActionCreators.updateRoleConnectionConfigurations;
      const id = role.id;
      GuildSettingsRolesActionCreators;
      if (AND === ConnectionsUtils.ConnectionConfigurationRuleOperator.AND) {
        let items1;
        if (0 === items.length) {
          items1 = [];
        } else {
          const items2 = [];
          HermesBuiltin.arraySpread(items2, items, 0);
          items1 = [items2];
        }
        values2 = items1;
      } else {
        const _Object = Object;
        const obj2 = _modDef12;
        values2 = values(obj2.groupBy(items, f108116));
      }
      const result = updateRoleConnectionConfigurations(id, values2);
    },
    excludedConnections: memo1,
    excludedApplications: memo2,
    roleId: role.id,
    integrations,
    gameApplicationIds,
    locked
  };
  const tmp20 = AddConnectionButton;
  if (applicationIdentityLinkedRolesEnabled) {
    gameApplicationIds = guild.gameApplicationIds;
  } else {
    gameApplicationIds = null;
  }
  if (!locked) {
    locked = tmp10;
  }
  items6[3] = closure_10(tmp20, obj9);
  return closure_10(Form, obj5);
};
