// Module ID: 12181
// Function ID: 12182
// Name: AppLauncherRoleOption
// Dependencies: [32, 19, 4911, 21, 573, 12174, 5247, 12177, 2000, 12177, 2]
// Exports: default

// Module 12181 (AppLauncherRoleOption)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import AppLauncherRoleListActionSheet from "AppLauncherRoleListActionSheet" /* 12177 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 4911 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/app_launcher/native/options/role/AppLauncherRoleOption.tsx");

export default function AppLauncherRoleOption(option) {
  let autoFocus;
  let channel;
  let closure_8;
  let first;
  let hasError;
  let name;
  let onActionSheetDismiss;
  let onRolePress;
  option = option.option;
  ({ initialValue: importDefault, onRolePress } = option);
  ({ onActionSheetDismiss: _slicedToArray, channel } = option);
  const onPress = option.onPress;
  first = undefined;
  closure_8 = undefined;
  const guild_id = channel.guild_id;
  ({ autoFocus, hasError } = option);
  [first, closure_8] = channel.useState(() => {
    let roleId = null;
    if (null != importDefault) {
      roleId = null;
      if ("roleMention" === importDefault.type) {
        roleId = tmp.roleId;
      }
    }
    return roleId;
  });
  const tmp3 = option;
  let tmp4 = onRolePress;
  let obj = option(onRolePress[4]);
  const items = [onPress];
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (null != first) {
      let role;
      if (null != guild_id) {
        role = GuildRoleStore.getRole(tmp2, tmp);
      }
      return role;
    }
  });
  const items1 = [onRolePress, option.name, stateFromStores, first];
  const effect = channel.useEffect(() => {
    const tmp = null != first && null == stateFromStores;
    if (tmp) {
      onRolePress({ role: null });
    }
  }, items1);
  const obj2 = {
    option,
    hasError,
    selected: null != stateFromStores,
    selectedItemName: name,
    onPress: function handleRowPress() {
      if (onPress != null) {
        tmp();
      }
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      ActionSheetActionCreatorsDefault;
      const obj = {
        option,
        channel,
        onRolePress(role) {
          role = role.role;
          closure_1_8(role.id);
          onRolePress({ role });
        },
        onActionSheetDismiss: _slicedToArray
      };
      const tmp4 = asyncRequire(12177, dependencyMap.paths);
      openLazy(tmp4, AppLauncherRoleListActionSheet.APP_LAUNCHER_ROLE_LIST_ACTION_SHEET_KEY, obj);
    },
    leading: guild_id(tmp3(tmp4[9]).RoleIcon, { role: stateFromStores }),
    autoFocus
  };
  name = undefined;
  const tmp8 = require("AppLauncherSelectOptionFormRow");
  if (null != stateFromStores) {
    name = stateFromStores.name;
  }
  return guild_id(tmp8, obj2);
};
