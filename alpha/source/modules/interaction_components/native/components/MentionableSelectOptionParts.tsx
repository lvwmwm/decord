// Module ID: 11379
// Function ID: 11380
// Name: MentionableSelectOptionParts
// Dependencies: [19, 17, 2119, 5108, 1390, 1085, 21, 5092, 587, 5445, 1200, 6883, 6901, 8621, 558, 576, 8765, 5088, 11380, 1126, 2]
// Exports: mentionableOptionAccessibilityLabel, renderMentionableOptionDescription, renderMentionableOptionIcon, renderMentionableOptionSuffix

// Module 11379 (MentionableSelectOptionParts)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import Text_Text from "Text/Text" /* 5088 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 5445 */;
import RoleIconUtils from "RoleIconUtils" /* 6883 */;
import RoleIconDefault from "RoleIcon" /* 6901 */;
import DiscordTagDefault from "DiscordTag" /* 8765 */;
import UserIcon from "UserIcon" /* 11380 */;
import react from "react" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 2119 */;
import PresenceStore from "PresenceStore" /* 5108 */;
import UserStore from "UserStore" /* 1390 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let Fonts;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
const View = react_native.View;
({ Fonts, DEFAULT_ROLE_COLOR_HEX: metroImportDefault } = Constants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { name: obj2, discriminator: obj3, roleCountContainer: { display: "flex", flexDirection: "row", flexGrow: 1, alignItems: "center", justifyContent: "flex-end", marginRight: 12 }, roleCountText: { paddingRight: 4 } };
obj2 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 12, lineHeight: 16 };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.TEXT_MUTED, fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 12 };
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserOptionTag(user) {
  const obj = react2;
  const cResult = obj.c(4);
  user = user.user;
  const tmp3 = closure_10();
  if (cResult[0] === tmp3.discriminator) {
    if (cResult[1] === tmp3.name) {
      let tmp4;
      if (cResult[2] === user) {
        tmp4 = cResult[3];
      }
      return tmp4;
    }
  }
  const obj2 = { user, usernameStyle: tmp3.name, discriminatorStyle: tmp3.discriminator, nicknameStyle: tmp3.name };
  const tmp5 = metroImportAll(DiscordTagDefault, obj2);
  cResult[0] = tmp3.discriminator;
  cResult[1] = tmp3.name;
  cResult[2] = user;
  cResult[3] = tmp5;
  tmp4 = tmp5;
}) : (function UserOptionTag(user) {
  user = user.user;
  const tmp = closure_10();
  const obj = { user, usernameStyle: tmp.name, discriminatorStyle: tmp.discriminator, nicknameStyle: tmp.name };
  return metroImportAll(DiscordTagDefault, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function RoleMemberCount(count) {
  let items;
  const obj = react2;
  const cResult = obj.c(7);
  count = count.count;
  const tmp4 = closure_10();
  if (cResult[0] === count) {
    let tmp5;
    let tmp8;
    if (cResult[1] === tmp4.roleCountText) {
      tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp10 = metroImportAll(UserIcon.UserIcon, { size: "xs" });
      cResult[3] = tmp10;
      tmp8 = tmp10;
    } else {
      tmp8 = cResult[3];
    }
    if (cResult[4] === tmp4.roleCountContainer) {
      let tmp11;
      if (cResult[5] === tmp5) {
        tmp11 = cResult[6];
      }
      return tmp11;
    }
    const obj2 = { style: tmp4.roleCountContainer, children: items };
    items = [tmp5, tmp8];
    const tmp14 = React4(View, obj2);
    cResult[4] = tmp4.roleCountContainer;
    cResult[5] = tmp5;
    cResult[6] = tmp14;
    tmp11 = tmp14;
  }
  const obj3 = { style: tmp4.roleCountText, variant: "text-sm/medium", color: "interactive-text-default", children: count };
  const tmp6 = metroImportAll(Text_Text.Text, obj3);
  cResult[0] = count;
  cResult[1] = tmp4.roleCountText;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function RoleMemberCount(count) {
  let items;
  count = count.count;
  const tmp = closure_10();
  const obj = { style: tmp.roleCountContainer, children: items };
  items = [, ];
  const obj2 = { style: tmp.roleCountText, variant: "text-sm/medium", color: "interactive-text-default", children: count };
  items[0] = metroImportAll(Text_Text.Text, obj2);
  items[1] = metroImportAll(UserIcon.UserIcon, { size: "xs" });
  return React4(View, obj);
});
const result = size.fileFinishedImporting("modules/interaction_components/native/components/MentionableSelectOptionParts.tsx");

export const renderMentionableOptionIcon = function renderMentionableOptionIcon(type, guild, guildId) {
  if (type.type === InteractionComponentTypes.SelectOptionType.USER) {
    const user = UserStore.getUser(type.value);
    if (null == user) {
      return null;
    } else {
      const isMobileOnlineResult = PresenceStore.isMobileOnline(user.id);
      const isVROnlineResult = PresenceStore.isVROnline(user.id);
      const status = PresenceStore.getStatus(user.id);
      const obj = { user, isMobileOnline: isMobileOnlineResult, isVROnline: isVROnlineResult, status, guildId, size: native.AvatarSizes.XSMALL };
      const Avatar = tmp(1200).Avatar;
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
        const ShieldUserIcon = tmp(8621).ShieldUserIcon;
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
};
export const renderMentionableOptionDescription = function renderMentionableOptionDescription(type) {
  if (type.type === InteractionComponentTypes.SelectOptionType.USER) {
    const obj = { user: UserStore.getUser(type.value) };
    return metroImportAll(closure_11, obj);
  }
};
export const renderMentionableOptionSuffix = function renderMentionableOptionSuffix(type, guild, arg2) {
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
      return metroImportAll(closure_12, obj);
    }
  }
};
export const mentionableOptionAccessibilityLabel = function mentionableOptionAccessibilityLabel(type) {
  let discriminator;
  let discriminator1;
  if (type.type === InteractionComponentTypes.SelectOptionType.USER) {
    let formatToPlainStringResult;
    const user = UserStore.getUser(type.value);
    let bot;
    if (user != null) {
      bot = user.bot;
    }
    const intl2 = tmp(1126).intl;
    const formatToPlainString = intl2.formatToPlainString;
    const t = tmp(1126).t;
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
    const intl = tmp(1126).intl;
    const obj = { roleName: type.label };
    return intl.formatToPlainString(intl3.t.F6ejkk, obj);
  }
};
