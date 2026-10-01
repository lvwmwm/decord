// Module ID: 11663
// Function ID: 11664
// Name: AppLauncherRoleListActionSheet
// Dependencies: [32, 19, 6549, 2103, 2102, 1074, 21, 11661, 9033, 504, 6550, 5917, 4832, 5403, 5829, 4800, 11648, 11649, 2]
// Exports: default

// Module 11663 (AppLauncherRoleListActionSheet)
import Constants from "Constants" /* 1074 */;
import GuildRoleRecord from "GuildRoleRecord" /* 2103 */;
import GuildRoleMemberActionCreatorsAll from "GuildRoleMemberActionCreators" /* 6550 */;
import ShieldUserIcon2 from "ShieldUserIcon" /* 9033 */;
import AppLauncherOptionIconDefault from "AppLauncherOptionIcon" /* 11661 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildRoleMemberCountStore from "GuildRoleMemberCountStore" /* 6549 */;
import GuildRoleStore from "GuildRoleStore" /* 2102 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let c10;
let unpackModuleId;
class RoleIcon {
  constructor(role) {
    role = role.role;
    let str = "interactive-text-default";
    const tmp3 = AppLauncherOptionIconDefault;
    const ShieldUserIcon = ShieldUserIcon2.ShieldUserIcon;
    if (null != role) {
      str = "white";
    }
    const obj2 = { icon: authStore(ShieldUserIcon, { size: "sm", color: str }), wrapperStyle: {} };
    return authStore(tmp3, obj2);
  }
}
class RoleRow {
  constructor(guildRole) {
    let items2;
    let obj3;
    let tmp8;
    guildRole = guildRole.guildRole;
    const guildId = guildRole.guildId;
    const merged = Object.assign(guildRole, Object.assign({ guildRole: 0, guildId: 0 }));
    let tmp2 = guildRole;
    let obj = guildRole(504);
    const items = [GuildRoleMemberCountStore];
    const stateFromStores = obj.useStateFromStores(items, () => {
      const roleMemberCount = GuildRoleMemberCountStore.getRoleMemberCount(guildId);
      let tmp2;
      if (roleMemberCount != null) {
        tmp2 = roleMemberCount[guildRole.id];
      }
      return tmp2;
    });
    const items1 = [guildId];
    const tmp5 = isEveryoneRole(guildRole);
    const effect = react.useEffect(() => {
      const obj = GuildRoleMemberActionCreatorsAll;
      const memberCounts = obj.fetchMemberCounts(guildId);
    }, items1);
    const obj2 = { label: closure_10(guildRole(4832).Text, obj3), icon: closure_10(RoleIcon, { role: guildRole }), trailing: tmp8 };
    const TableRow = guildRole(5917).TableRow;
    tmp8 = null;
    obj3 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: guildRole.name };
    if (!tmp5) {
      tmp8 = null;
      if (null != stateFromStores) {
        const obj4 = { variant: "text-sm/normal", color: "text-muted", children: items2 };
        const Text = tmp2(4832).Text;
        items2 = [closure_10(tmp2(5403).GroupIcon, { size: "xxs", color: "text-muted" }), " ", stateFromStores];
        tmp8 = closure_11(Text, obj4);
      }
    }
    const merged1 = Object.assign(merged);
    return closure_10(TableRow, obj2, guildRole.id);
  }
}
let _slicedToArray = _slicedToArray_mod;
const isEveryoneRole = GuildRoleRecord.isEveryoneRole;
const DEFAULT_ROLE_COLOR_HEX = Constants.DEFAULT_ROLE_COLOR_HEX;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const AppLauncherRoleListActionSheet_str = "AppLauncherRoleListActionSheet";
const result = size.fileFinishedImporting("modules/app_launcher/native/options/role/AppLauncherRoleListActionSheet.tsx");

export default function AppLauncherRoleListActionSheet(channel) {
  let closure_4;
  let first;
  let items2;
  let onActionSheetDismiss;
  let tmp8Result;
  ({ onRolePress: require, onActionSheetDismiss } = channel);
  first = undefined;
  _slicedToArray = undefined;
  let ref;
  const guild_id = channel.channel.guild_id;
  const option = channel.option;
  [first, _slicedToArray] = ref.useState("");
  ref = ref.useRef(null);
  let tmp4 = require;
  let obj = require("get initialized");
  const items = [GuildRoleStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildRoleStore.getSortedRoles(guild_id));
  const items1 = [stateFromStores, first];
  const memo = ref.useMemo(() => stateFromStores.filter((id) => {
    let tmp = closure_1_3 === id.id;
    const str = closure_1_3;
    if (!tmp) {
      const str2 = id.name;
      const tmp4 = onActionSheetDismiss(first[14]);
      const trimmed = str.trim();
      tmp = tmp4(trimmed, str2.toLowerCase());
    }
    return tmp;
  }), items1);
  let obj2 = { option, onDismiss: onActionSheetDismiss, children: items2 };
  const length = memo.length;
  const AppLauncherCommandOptionActionSheet = require("AppLauncherCommandOptionActionSheet").AppLauncherCommandOptionActionSheet;
  items2 = [, ];
  const obj3 = {
    onChange(str) {
      closure_4(str.toLowerCase());
      const current = ref.current;
      if (current != null) {
        current.scrollToOffset({ offset: 0, animated: false });
      }
    }
  };
  items2[0] = closure_10(require("AppLauncherList").AppLauncherListSearchBar, obj3);
  const tmp7 = closure_11;
  if (0 === length) {
    tmp8Result = tmp8(tmp4(tmp5[17]).AppLauncherListEmptyState, {});
  } else {
    const obj4 = {
      ref,
      data: memo,
      renderItem(item) {
          item = item.item;
          const index = item.index;
          let obj = {
            guildId: guild_id,
            guildRole: item,
            onPress() {
              const obj = { role: item };
              require(obj);
              const obj2 = closure_1_1(first[15]);
              obj2.hideActionSheet(closure_1_12);
              onActionSheetDismiss();
            },
            start: 0 === index,
            end: index === memo.length - 1
          };
          return closure_1_10(RoleRow, obj);
        }
    };
    tmp8Result = tmp8(tmp4(tmp5[17]).AppLauncherList, obj4);
  }
  items2[1] = tmp8Result;
  return tmp7(AppLauncherCommandOptionActionSheet, obj2);
};
export const APP_LAUNCHER_ROLE_LIST_ACTION_SHEET_KEY = "AppLauncherRoleListActionSheet";
export { RoleIcon };
export { RoleRow };
