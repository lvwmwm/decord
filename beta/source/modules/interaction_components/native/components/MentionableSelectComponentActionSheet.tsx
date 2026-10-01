// Module ID: 11301
// Function ID: 11302
// Name: MentionableSelectComponentActionSheet
// Dependencies: [19, 17, 2102, 2067, 4876, 1372, 1074, 21, 4836, 576, 6548, 7577, 11302, 5067, 1177, 6608, 6626, 9033, 11300, 9094, 4832, 11303, 1115, 2]
// Exports: default

// Module 11301 (MentionableSelectComponentActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 5067 */;
import RoleIconUtils from "RoleIconUtils" /* 6608 */;
import RoleIconDefault from "RoleIcon" /* 6626 */;
import SearchableSelectActionComponentUtils from "SearchableSelectActionComponentUtils" /* 7577 */;
import DiscordTagDefault from "DiscordTag" /* 9094 */;
import UserIcon from "UserIcon" /* 11303 */;
import react_mod from "react" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 2102 */;
import GuildStore from "GuildStore" /* 2067 */;
import PresenceStore from "PresenceStore" /* 4876 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let user;

let Fonts;
let c10;
let c9;
let obj2;
let obj3;
let unpackModuleId;
let react = react_mod;
const View = react_native.View;
({ Fonts, DEFAULT_ROLE_COLOR_HEX: c9 } = Constants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { name: obj2, discriminator: obj3, roleCountContainer: { display: "flex", flexDirection: "row", flexGrow: 1, alignItems: "center", justifyContent: "flex-end", marginRight: 12 }, roleCountText: { paddingRight: 4 } };
obj2 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 12, lineHeight: 16 };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.TEXT_MUTED, fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 12 };
let closure_12 = createStyles(obj);
const result = size.fileFinishedImporting("modules/interaction_components/native/components/MentionableSelectComponentActionSheet.tsx");

export default function MentionableSelectComponentActionSheet(selectionActionComponent) {
  let allowEmpty;
  let closure_3;
  let containerId;
  let isSelected;
  let labelComponent;
  let onPressOptionItem;
  let onSubmit;
  let options;
  let setQuery;
  let submitSelection;
  selectionActionComponent = selectionActionComponent.selectionActionComponent;
  const channelId = selectionActionComponent.channelId;
  const guildId = selectionActionComponent.guildId;
  let closure_5;
  ({ labelComponent, containerId, onSubmit, allowEmpty } = selectionActionComponent);
  react = closure_12();
  const guild = GuildStore.getGuild(guildId);
  const tmp2 = channelId;
  const tmp3 = guildId;
  let id;
  const tmp4 = channelId(guildId[10]);
  if (guild != null) {
    id = guild.id;
  }
  closure_5 = tmp4(id, selectionActionComponent(tmp3[11]).MIN_REREQUEST_TIME);
  let items = [selectionActionComponent, channelId];
  const callback = react.useCallback((query) => {
    const obj = SearchableSelectActionComponentUtils;
    return obj.queryMentionables(selectionActionComponent.type, query, channelId);
  }, items);
  let tmp7 = tmp2(tmp3[12])({ selectActionComponent: selectionActionComponent, containerId, guildId, queryOptions: callback, onSubmit });
  const selectedOptions = tmp7.selectedOptions;
  const items1 = [guild, guildId];
  ({ options, isSelected, onPressOptionItem, submitSelection, setQuery } = tmp7);
  const callback1 = react.useCallback((type) => {
    if (type.type === InteractionComponentTypes.SelectOptionType.USER) {
      user = UserStore.getUser(type.value);
      if (null == user) {
        return null;
      } else {
        const isMobileOnlineResult = PresenceStore.isMobileOnline(user.id);
        const isVROnlineResult = PresenceStore.isVROnline(user.id);
        const status = PresenceStore.getStatus(user.id);
        const obj = { user, isMobileOnline: isMobileOnlineResult, isVROnline: isVROnlineResult, status, guildId, size: native.AvatarSizes.XSMALL };
        const Avatar = tmp(1177).Avatar;
        return authStore(Avatar, obj);
      }
    } else if (type.type === InteractionComponentTypes.SelectOptionType.ROLE) {
      let role;
      if (null != guild) {
        role = GuildRoleStore.getRole(tmp3.id, type.value);
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
              return authStore(RoleIconDefault, obj2);
            }
          }
          let colorString;
          const ShieldUserIcon = tmp(9033).ShieldUserIcon;
          const tmp8 = authStore;
          if (role != null) {
            colorString = role.colorString;
          }
          if (colorString == null) {
            colorString = React4;
          }
          const obj4 = { color: colorString };
          return tmp8(ShieldUserIcon, obj4);
        }
      }
      return null;
    }
  }, items1);
  let obj = {
    onPressOptionItem,
    renderIcon: callback1,
    renderDescription(type) {
      if (type.type === InteractionComponentTypes.SelectOptionType.USER) {
        user = UserStore.getUser(type.value);
        const obj = { user, usernameStyle: null, discriminatorStyle: null, nicknameStyle: null };
        ({ name: obj.usernameStyle, discriminator: obj.discriminatorStyle, name: obj.nicknameStyle } = closure_3);
        return authStore(DiscordTagDefault, obj);
      }
    },
    renderOptionSuffix(type) {
      let items;
      if (type.type === InteractionComponentTypes.SelectOptionType.ROLE) {
        let role;
        if (null != guild) {
          role = GuildRoleStore.getRole(tmp3.id, type.value);
        }
        let tmp7 = null;
        if (null != role) {
          let tmp9;
          if (closure_5 != null) {
            tmp9 = tmp8[role.id];
          }
          tmp7 = tmp9;
        }
        if (null != tmp7) {
          const obj = { style: closure_3.roleCountContainer, children: items };
          const obj2 = { style: closure_3.roleCountText, variant: "text-sm/medium", color: "interactive-text-default", children: tmp7 };
          items = [authStore(Text_Text.Text, obj2), authStore(UserIcon.UserIcon, { size: "xs" })];
          return unpackModuleId(View, obj);
        }
      }
    },
    selectionActionComponent,
    labelComponent,
    options,
    selectedCount: selectedOptions.length,
    selectedOptions,
    isSelected,
    submitSelection,
    onQueryChange: setQuery,
    itemAccessibilityLabel(type) {
      let discriminator;
      let discriminator1;
      if (type.type === selectionActionComponent(guildId[13]).SelectOptionType.USER) {
        let formatToPlainStringResult;
        user = user.getUser(type.value);
        let bot;
        if (user != null) {
          bot = user.bot;
        }
        const intl2 = tmp(tmp2[22]).intl;
        const formatToPlainString = intl2.formatToPlainString;
        const t = tmp(tmp2[22]).t;
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
      } else if (type.type === selectionActionComponent(guildId[13]).SelectOptionType.ROLE) {
        const intl = tmp(tmp2[22]).intl;
        const obj = { roleName: type.label };
        return intl.formatToPlainString(selectionActionComponent(guildId[22]).t.F6ejkk, obj);
      }
    },
    channelId,
    allowEmpty
  };
  return closure_10(tmp2(tmp3[18]), obj);
};
