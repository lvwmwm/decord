// Module ID: 12089
// Function ID: 12090
// Name: AppLauncherRoleOption
// Dependencies: [32, 19, 4878, 21, 573, 12082, 5211, 12085, 1999, 12085, 2]
// Exports: default

// Module 12089 (AppLauncherRoleOption)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import AppLauncherRoleListActionSheet from "AppLauncherRoleListActionSheet" /* 12085 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 4878 */;
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
      const tmp4 = asyncRequire(12085, dependencyMap.paths);
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
