// Module ID: 20076
// Function ID: 20077
// Name: useCommandPermissionEntryDisplay
// Dependencies: [19, 1071, 21, 20077, 7096, 6144, 7146, 1112, 7536, 7554, 8557, 1186, 5099, 2]
// Exports: useChannelEntryDisplay, useRoleEntryDisplay, useUserEntryDisplay

// Module 20076 (useCommandPermissionEntryDisplay)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import UserUtilsDefault from "UserUtils" /* 5099 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 7096 */;
import TextIcon from "TextIcon" /* 7146 */;
import useRoleIconProps from "useRoleIconProps" /* 7536 */;
import RoleIconDefault from "RoleIcon" /* 7554 */;
import useCommandPermissionIdentifier from "useCommandPermissionIdentifier" /* 20077 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const ShieldUserIcon2 = tmp(8557);
const DEFAULT_ROLE_COLOR_HEX = Constants.DEFAULT_ROLE_COLOR_HEX;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_settings/integrations/permission/native/useCommandPermissionEntryDisplay.tsx");

export function useChannelEntryDisplay(guild, id) {
  let icon;
  let intl;
  let name;
  let tmp6;
  const obj = useCommandPermissionIdentifier;
  const commandPermissionChannel = obj.useCommandPermissionChannel(guild, id, utils_ChannelUtils.getChannelIconComponentWithGuild);
  ({ icon, name } = commandPermissionChannel);
  if (commandPermissionChannel.isAllChannels) {
    const obj2 = { icon: null, label: intl.string(intl2.t["7YqSGx"]) };
    ({ IconComponent: TextIcon.TextIcon });
    const Icon = tmp(6144).TableRow.Icon;
    intl = tmp(1112).intl;
    tmp6 = obj2;
  } else {
    tmp6 = null;
    if (null != icon) {
      tmp6 = null;
      if (null != name) {
        tmp6 = { icon: null, label: name, subLabel: tmp4 };
        const obj4 = { icon: null, label: name, subLabel: tmp4 };
      }
    }
  }
  return tmp6;
}
export function useRoleEntryDisplay(guild, id) {
  const obj = useCommandPermissionIdentifier;
  const commandPermissionRole = obj.useCommandPermissionRole(guild.id, id);
  const obj2 = useRoleIconProps;
  const obj3 = { guildId: guild.id, roleId: id, size: 24 };
  const roleIconProps = obj2.useRoleIconProps(obj3);
  let name;
  if (commandPermissionRole != null) {
    name = commandPermissionRole.name;
  }
  let tmp6 = null;
  if (null != name) {
    let tmp7Result;
    if (null != roleIconProps) {
      RoleIconDefault;
      const merged = Object.assign(roleIconProps);
      tmp7Result = <tmp11 size={24} />;
    } else {
      let colorString = commandPermissionRole.colorString;
      const ShieldUserIcon = ShieldUserIcon2.ShieldUserIcon;
      const tmp7 = jsx;
      if (colorString == null) {
        colorString = DEFAULT_ROLE_COLOR_HEX;
      }
      const obj5 = { size: "md", color: colorString };
      tmp7Result = tmp7(ShieldUserIcon, obj5);
    }
    tmp6 = { icon: tmp7Result, label: commandPermissionRole.name };
    const obj6 = { icon: tmp7Result, label: commandPermissionRole.name };
  }
  return tmp6;
}
export function useUserEntryDisplay(guild, id) {
  let nick;
  let user;
  let userTag;
  const obj = useCommandPermissionIdentifier;
  const commandPermissionUser = obj.useCommandPermissionUser(guild.id, id);
  ({ user, nick } = commandPermissionUser);
  let tmp5 = null;
  if (null != user) {
    const obj2 = { icon: null, label: nick, subLabel: userTag };
    if (nick == null) {
      nick = user.username;
    }
    userTag = undefined;
    if (tmp4) {
      const obj4 = UserUtilsDefault;
      userTag = obj4.getUserTag(user);
    }
    tmp5 = obj2;
  }
  return tmp5;
}
