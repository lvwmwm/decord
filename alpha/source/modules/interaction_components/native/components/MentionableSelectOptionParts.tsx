// Module ID: 12496
// Function ID: 12497
// Name: MentionableSelectOptionParts
// Dependencies: [19, 17, 4920, 5761, 1383, 1072, 21, 5014, 575, 6073, 1187, 7356, 7374, 9059, 9201, 5624, 12466, 1113, 2]
// Exports: mentionableOptionAccessibilityLabel, renderMentionableOptionDescription, renderMentionableOptionIcon, renderMentionableOptionSuffix

// Module 12496 (MentionableSelectOptionParts)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import Text_Text from "Text/Text" /* 5624 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 6073 */;
import RoleIconUtils from "RoleIconUtils" /* 7356 */;
import RoleIconDefault from "RoleIcon" /* 7374 */;
import DiscordTagDefault from "DiscordTag" /* 9201 */;
import UserIcon from "UserIcon" /* 12466 */;
import react from "react" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 4920 */;
import PresenceStore from "PresenceStore" /* 5761 */;
import UserStore from "UserStore" /* 1383 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let Fonts;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
function UserOptionTag(user) {
  user = user.user;
  const tmp = closure_10();
  const obj = { user, usernameStyle: tmp.name, discriminatorStyle: tmp.discriminator, nicknameStyle: tmp.name };
  return metroImportAll(DiscordTagDefault, obj);
}
function RoleMemberCount(count) {
  let items;
  count = count.count;
  const tmp = closure_10();
  const obj = { style: tmp.roleCountContainer, children: items };
  items = [, ];
  const obj2 = { style: tmp.roleCountText, variant: "text-sm/medium", color: "interactive-text-default", children: count };
  items[0] = metroImportAll(Text_Text.Text, obj2);
  items[1] = metroImportAll(UserIcon.UserIcon, { size: "xs" });
  return React4(View, obj);
}
const View = react_native.View;
({ Fonts, DEFAULT_ROLE_COLOR_HEX: metroImportDefault } = Constants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { name: obj2, discriminator: obj3, roleCountContainer: { display: "flex", flexDirection: "row", flexGrow: 1, alignItems: "center", justifyContent: "flex-end", marginRight: 12 }, roleCountText: { paddingRight: 4 } };
obj2 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 12, lineHeight: 16 };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.TEXT_MUTED, fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 12 };
let closure_10 = createStyles(obj);
const result = size.fileFinishedImporting("modules/interaction_components/native/components/MentionableSelectOptionParts.tsx");

export function renderMentionableOptionIcon(type, guild, guildId) {
  if (type.type === InteractionComponentTypes.SelectOptionType.USER) {
    const user = UserStore.getUser(type.value);
    if (null == user) {
      return null;
    } else {
      const isMobileOnlineResult = PresenceStore.isMobileOnline(user.id);
      const isVROnlineResult = PresenceStore.isVROnline(user.id);
      const status = PresenceStore.getStatus(user.id);
      const obj = { user, isMobileOnline: isMobileOnlineResult, isVROnline: isVROnlineResult, status, guildId, size: native.AvatarSizes.XSMALL };
      const Avatar = tmp(1187).Avatar;
      return metroImportAll(Avatar, obj);
    }
  } else if (type.type === InteractionComponentTypes.SelectOptionType.ROLE) {
    let role;
    if (null != guild) {
      role = GuildRoleStore.getRole(guild.id, type.value);
    }
    if (null != guild) {
      if (null != role) {
        const tmpResult = RoleIconUtils;
        if (tmpResult.canGuildUseRoleIcons(guild, role)) {
          const tmpResult2 = RoleIconUtils;
          const roleIconData = tmpResult2.getRoleIconData(role);
          if (null != roleIconData) {
            const obj2 = { src: null, unicodeEmoji: null, size: 24, name: role.name };
            ({ customIconSrc: obj3.src, unicodeEmoji: obj3.unicodeEmoji } = roleIconData);
            return metroImportAll(RoleIconDefault, obj2);
          }
        }
        let colorString;
        const ShieldUserIcon = tmp(9059).ShieldUserIcon;
        const tmp8 = metroImportAll;
        if (role != null) {
          colorString = role.colorString;
        }
        if (colorString == null) {
          colorString = metroImportDefault;
        }
        const obj4 = { color: colorString };
        return tmp8(ShieldUserIcon, obj4);
      }
    }
    return null;
  }
}
export function renderMentionableOptionDescription(type) {
  if (type.type === InteractionComponentTypes.SelectOptionType.USER) {
    const obj = { user: UserStore.getUser(type.value) };
    return metroImportAll(UserOptionTag, obj);
  }
}
export function renderMentionableOptionSuffix(type, guild, arg2) {
  if (type.type === InteractionComponentTypes.SelectOptionType.ROLE) {
    let role;
    if (null != guild) {
      role = GuildRoleStore.getRole(guild.id, type.value);
    }
    let tmp5 = null;
    if (null != role) {
      let tmp7;
      if (arg2 != null) {
        tmp7 = arg2[role.id];
      }
      tmp5 = tmp7;
    }
    if (null != tmp5) {
      const obj = { count: tmp5 };
      return metroImportAll(RoleMemberCount, obj);
    }
  }
}
export function mentionableOptionAccessibilityLabel(type) {
  let discriminator;
  let discriminator1;
  if (type.type === InteractionComponentTypes.SelectOptionType.USER) {
    let formatToPlainStringResult;
    const user = UserStore.getUser(type.value);
    let bot;
    if (user != null) {
      bot = user.bot;
    }
    const intl2 = tmp(1113).intl;
    const formatToPlainString = intl2.formatToPlainString;
    const t = tmp(1113).t;
    if (bot) {
      const obj2 = { username: type.label, discriminator };
      discriminator = undefined;
      const prop = t["zogo/8"];
      if (user != null) {
        discriminator = user.discriminator;
      }
      formatToPlainStringResult = formatToPlainString(prop, obj2);
    } else {
      const obj3 = { username: type.label, discriminator: discriminator1 };
      discriminator1 = undefined;
      const AydQ7a = t.AydQ7a;
      if (user != null) {
        discriminator1 = user.discriminator;
      }
      formatToPlainStringResult = formatToPlainString(AydQ7a, obj3);
    }
    return formatToPlainStringResult;
  } else if (type.type === InteractionComponentTypes.SelectOptionType.ROLE) {
    const intl = tmp(1113).intl;
    const obj = { roleName: type.label };
    return intl.formatToPlainString(intl3.t.F6ejkk, obj);
  }
}
