// Module ID: 6606
// Function ID: 6607
// Name: UserProfileRolesCard
// Dependencies: [19, 17, 2108, 2102, 1074, 21, 4836, 576, 6607, 2021, 6609, 6610, 4527, 1115, 6608, 6615, 6624, 4832, 6626, 5435, 504, 6627, 6628, 2]
// Exports: default

// Module 6606 (UserProfileRolesCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import Text_Text from "Text/Text" /* 4832 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import VerifiedRoleIconDefault from "VerifiedRoleIcon" /* 6624 */;
import RoleIconDefault from "RoleIcon" /* 6626 */;
import UserProfileRoleUtils from "UserProfileRoleUtils" /* 6627 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildRoleStore from "GuildRoleStore" /* 2102 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let size;
let unpackModuleId;
function RoleDot(color) {
  color = color.color;
  const style = [closure_12().roleDot, ];
  const tmp = React4;
  const tmp2 = View;
  if (color == null) {
    color = metroImportDefault;
  }
  style[1] = { backgroundColor: color };
  return tmp(tmp2, { style });
}
class RoleItem {
  constructor(role) {
    let intl;
    let tmp11Result;
    let tmp14;
    let tmp2;
    role = role.role;
    const guildId = role.guildId;
    let name;
    let colorString;
    let roleIconProps;
    let closure_5;
    let tmp = closure_12();
    if (role.name.length <= closure_8) {
      name = role.name;
    } else {
      const name1 = role.name;
      const tmp3 = globalThis;
      const _HermesInternal = HermesInternal;
      name = "" + name1.slice(0, tmp2) + "...";
    }
    if (colorString == null) {
      colorString = role.colorString;
    }
    let tmp4 = role;
    const tmp5 = name;
    let obj = role(name[8]);
    let obj2 = { guildId, roleId: role.id, size: 12 };
    roleIconProps = obj.useRoleIconProps(obj2);
    const tags = role.tags;
    let guild_connections;
    if (tags != null) {
      guild_connections = tags.guild_connections;
    }
    function renderContent() {
      let tmp3Result;
      let tmp8;
      const tmp = unpackModuleId;
      const tmp2 = authStore;
      if (closure_5) {
        const obj2 = { roleId: role.id, guildId, roleColor: colorString, size: 12, displayRoleIcon: false };
        colorString = undefined;
        const tmp11 = VerifiedRoleIconDefault;
        if (role != null) {
          colorString = role.colorString;
        }
        tmp3Result = tmp3(tmp11, obj2);
        tmp8 = tmp3;
      } else {
        const obj = { color: colorString };
        tmp3Result = tmp3(RoleDot, obj);
        tmp8 = tmp3;
      }
      const children = [tmp3Result, , ];
      const obj3 = { variant: "text-xs/medium", children: name };
      children[1] = tmp8(Text_Text.Text, obj3);
      let tmp8Result = null;
      if (null != roleIconProps) {
        const obj4 = {};
        const tmp19 = RoleIconDefault;
        const merged = Object.assign(tmp16);
        tmp8Result = tmp8(tmp19, obj4);
      }
      children[2] = tmp8Result;
      return tmp(tmp2, { children });
    }
    closure_5 = undefined !== guild_connections;
    const DeveloperMode = tmp4(tmp5[9]).DeveloperMode;
    const setting = DeveloperMode.useSetting();
    let obj3 = guildId(tmp5[10]);
    let items = [role.id, name];
    const tidaWebformEnabled = obj3.useExperiment({ location: "RoleItem" }, { autoTrackExposure: false }).tidaWebformEnabled;
    const items1 = [role, name, roleIconProps];
    const callback = colorString.useCallback(() => {
      const obj = ClipboardUtils;
      obj.copy(role.id);
      const obj2 = ToastUtils;
      obj2.roleIdCopied(name);
    }, items);
    let tmp11 = closure_9;
    if (setting) {
      let obj4 = { onPress: callback, onLongPress: tmp14, accessibilityRole: "button", accessibilityLabel: name, accessibilityHint: intl.string(tmp4(tmp5[13]).t.sMsaLg), style: tmp.role, children: renderContent() };
      tmp14 = undefined;
      const PressableHighlight = tmp4(tmp5[19]).PressableHighlight;
      if (setting) {
        if (tidaWebformEnabled) {
          tmp14 = tmp10;
        }
      }
      intl = tmp4(tmp5[13]).intl;
      tmp11Result = tmp11(PressableHighlight, obj4);
    } else {
      const obj5 = { style: tmp.role, children: renderContent() };
      tmp11Result = tmp11(roleIconProps, obj5);
    }
    return tmp11Result;
  }
}
function RolesList(guildMemberRoleIds) {
  guildMemberRoleIds = guildMemberRoleIds.guildMemberRoleIds;
  const guildId = guildMemberRoleIds.guildId;
  const tmp = closure_12();
  let obj = guildMemberRoleIds(504);
  const items = [GuildRoleStore];
  const items1 = [guildMemberRoleIds, guildId];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const manyRoles = GuildRoleStore.getManyRoles(guildId, guildMemberRoleIds);
    return manyRoles.sort(UserProfileRoleUtils.sortRolesByVerification);
  }, items1);
  let tmp2 = null;
  if (0 !== stateFromStoresArray.length) {
    const obj2 = {
      style: tmp.roleContainer,
      children: stateFromStoresArray.map((role) => {
          const obj = { role, guildId };
          return React4(RoleItem, obj, role.id);
        })
    };
    tmp2 = closure_9(View, obj2);
  }
  return tmp2;
}
const View = react_native.View;
({ DEFAULT_ROLE_COLOR_HEX: metroImportDefault, MAX_VISUAL_ROLE_LENGTH: metroImportAll } = Constants);
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { roleContainer: { flexDirection: "row", gap: 8, flexWrap: "wrap" }, role: obj2, roleDot: size };
obj2 = { flexDirection: "row", alignItems: "center", columnGap: 4, padding: 6, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
size = { borderRadius: nativeDefault.radii.round, height: 12, width: 12 };
let closure_12 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileRolesCard.tsx");

export default function UserProfileRolesCard(userId) {
  let intl;
  let obj3;
  userId = userId.userId;
  const guildId = userId.guildId;
  const style = userId.style;
  const items = [GuildMemberStore];
  const items1 = [userId, guildId];
  const obj = userId(504);
  const stateFromStores = obj.useStateFromStores(items, () => GuildMemberStore.getMember(guildId, userId), items1);
  let roles;
  if (stateFromStores != null) {
    roles = stateFromStores.roles;
  }
  if (roles == null) {
    roles = [];
  }
  let tmp4 = null;
  if (0 !== roles.length) {
    const obj2 = { title: intl.string(userId(1115).t["LPJmL/"]), style, children: closure_9(RolesList, obj3) };
    const tmp7 = guildId(6628);
    intl = tmp(1115).intl;
    obj3 = { guildId, guildMemberRoleIds: roles };
    tmp4 = closure_9(tmp7, obj2);
  }
  return tmp4;
};
export { RoleItem };
