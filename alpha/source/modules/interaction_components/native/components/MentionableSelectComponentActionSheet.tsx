// Module ID: 11429
// Function ID: 11430
// Name: MentionableSelectComponentActionSheet
// Dependencies: [19, 17, 2118, 2086, 5106, 1389, 1085, 21, 5090, 587, 558, 576, 6806, 8233, 11430, 5441, 1200, 6870, 6888, 8597, 8740, 1126, 5086, 11431, 11428, 2]

// Module 11429 (MentionableSelectComponentActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import Text_Text from "Text/Text" /* 5086 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 5441 */;
import RoleIconUtils from "RoleIconUtils" /* 6870 */;
import RoleIconDefault from "RoleIcon" /* 6888 */;
import SearchableSelectActionComponentUtils from "SearchableSelectActionComponentUtils" /* 8233 */;
import DiscordTagDefault from "DiscordTag" /* 8740 */;
import UserIcon from "UserIcon" /* 11431 */;
import react_mod from "react" /* 19 */;
import GuildRoleStore_mod from "GuildRoleStore" /* 2118 */;
import GuildStore from "GuildStore" /* 2086 */;
import PresenceStore from "PresenceStore" /* 5106 */;
import UserStore from "UserStore" /* 1389 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
let GuildRoleStore = GuildRoleStore_mod;
({ Fonts, DEFAULT_ROLE_COLOR_HEX: c9 } = Constants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { name: obj2, discriminator: obj3, roleCountContainer: { display: "flex", flexDirection: "row", flexGrow: 1, alignItems: "center", justifyContent: "flex-end", marginRight: 12 }, roleCountText: { paddingRight: 4 } };
obj2 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 12, lineHeight: 16 };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.TEXT_MUTED, fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 12 };
let closure_12 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function MentionableSelectComponentActionSheet(selectionActionComponent) {
  let allowEmpty;
  let channelId;
  let closure_5;
  let containerId;
  let guildId;
  let isSelected;
  let labelComponent;
  let onPressOptionItem;
  let onSubmit;
  let options;
  let selectedOptions;
  let setQuery;
  let submitSelection;
  let tmp5;
  const tmp2 = guildId;
  const tmp = selectionActionComponent;
  let obj = selectionActionComponent(guildId[11]);
  const cResult = obj.c(35);
  selectionActionComponent = selectionActionComponent.selectionActionComponent;
  ({ labelComponent, channelId } = selectionActionComponent);
  guildId = selectionActionComponent.guildId;
  ({ containerId, onSubmit, allowEmpty } = selectionActionComponent);
  const tmp4 = closure_12();
  let closure_3 = tmp4;
  if (cResult[0] !== guildId) {
    const guild = GuildStore.getGuild(guildId);
    cResult[0] = guildId;
    cResult[1] = guild;
    tmp5 = guild;
  } else {
    tmp5 = cResult[1];
  }
  let closure_4 = tmp5;
  let tmp8 = channelId;
  let id;
  let tmp9 = channelId(tmp2[12]);
  if (tmp5 != null) {
    id = tmp5.id;
  }
  const tmp9Result = tmp9(id, tmp(tmp2[13]).MIN_REREQUEST_TIME);
  GuildRoleStore = tmp9Result;
  if (cResult[2] === channelId) {
    let tmp12;
    if (cResult[3] === selectionActionComponent) {
      tmp12 = cResult[4];
    }
    if (cResult[5] === containerId) {
      if (cResult[6] === guildId) {
        if (cResult[7] === onSubmit) {
          if (cResult[8] === tmp12) {
            let tmp13;
            if (cResult[9] === selectionActionComponent) {
              tmp13 = cResult[10];
            }
            ({ options, selectedOptions, isSelected, onPressOptionItem, submitSelection, setQuery } = tmp8(tmp2[14])(tmp13));
            const tmp14 = tmp8(tmp2[14])(tmp13);
            if (cResult[11] === tmp5) {
              let tmp15;
              let tmp16;
              let tmp18;
              if (cResult[12] === guildId) {
                tmp15 = cResult[13];
              }
              if (cResult[14] !== tmp4) {
                function renderDescription(type) {
                  if (type.type === InteractionComponentTypes.SelectOptionType.USER) {
                    user = UserStore.getUser(type.value);
                    const obj = { user, usernameStyle: null, discriminatorStyle: null, nicknameStyle: null };
                    ({ name: obj.usernameStyle, discriminator: obj.discriminatorStyle, name: obj.nicknameStyle } = closure_3);
                    return authStore(DiscordTagDefault, obj);
                  }
                }
                cResult[14] = tmp4;
                cResult[15] = renderDescription;
                tmp16 = renderDescription;
              } else {
                tmp16 = cResult[15];
              }
              const _Symbol = Symbol;
              if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                function accessibilityLabel(type) {
                  let discriminator;
                  let discriminator1;
                  if (type.type === selectionActionComponent(guildId[15]).SelectOptionType.USER) {
                    let formatToPlainStringResult;
                    user = user.getUser(type.value);
                    let bot;
                    if (user != null) {
                      bot = user.bot;
                    }
                    const intl2 = tmp(tmp2[21]).intl;
                    const formatToPlainString = intl2.formatToPlainString;
                    const t = tmp(tmp2[21]).t;
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
                  } else if (type.type === selectionActionComponent(guildId[15]).SelectOptionType.ROLE) {
                    const intl = tmp(tmp2[21]).intl;
                    const obj = { roleName: type.label };
                    return intl.formatToPlainString(selectionActionComponent(guildId[21]).t.F6ejkk, obj);
                  }
                }
                cResult[16] = accessibilityLabel;
                tmp18 = accessibilityLabel;
              } else {
                tmp18 = cResult[16];
              }
              if (cResult[17] === tmp5) {
                if (cResult[18] === tmp9Result) {
                  let tmp19;
                  if (cResult[19] === tmp4) {
                    tmp19 = cResult[20];
                  }
                  if (cResult[21] === allowEmpty) {
                    if (cResult[22] === channelId) {
                      if (cResult[23] === isSelected) {
                        if (cResult[24] === labelComponent) {
                          if (cResult[25] === onPressOptionItem) {
                            if (cResult[26] === options) {
                              if (cResult[27] === tmp16) {
                                if (cResult[28] === tmp15) {
                                  if (cResult[29] === tmp19) {
                                    if (cResult[30] === selectedOptions) {
                                      if (cResult[31] === selectionActionComponent) {
                                        if (cResult[32] === setQuery) {
                                          let tmp20;
                                          if (cResult[33] === submitSelection) {
                                            tmp20 = cResult[34];
                                          }
                                          return tmp20;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  let obj2 = { onPressOptionItem, renderIcon: tmp15, renderDescription: tmp16, renderOptionSuffix: tmp19, selectionActionComponent, labelComponent: null, options, selectedCount: selectedOptions.length, selectedOptions, isSelected, submitSelection, onQueryChange: setQuery, itemAccessibilityLabel: tmp18, channelId, allowEmpty };
                  class L {
                    constructor(type) {
                      if (type.type === InteractionComponentTypes.SelectOptionType.USER) {
                        user = UserStore.getUser(type.value);
                        if (null == user) {
                          return null;
                        } else {
                          const isMobileOnlineResult = PresenceStore.isMobileOnline(user.id);
                          const isVROnlineResult = PresenceStore.isVROnline(user.id);
                          const status = PresenceStore.getStatus(user.id);
                          const obj = { user, isMobileOnline: isMobileOnlineResult, isVROnline: isVROnlineResult, status, guildId, size: native.AvatarSizes.XSMALL };
                          const Avatar = tmp(1200).Avatar;
                          return authStore(Avatar, obj);
                        }
                      } else if (type.type === InteractionComponentTypes.SelectOptionType.ROLE) {
                        let role;
                        if (null != closure_4) {
                          role = GuildRoleStore.getRole(tmp3.id, type.value);
                        }
                        if (null != closure_4) {
                          if (null != role) {
                            const tmpResult = RoleIconUtils;
                            if (tmpResult.canGuildUseRoleIcons(closure_4, role)) {
                              const tmpResult2 = RoleIconUtils;
                              const roleIconData = tmpResult2.getRoleIconData(role);
                              if (null != roleIconData) {
                                const obj2 = { src: null, unicodeEmoji: null, size: 24, name: role.name };
                                ({ customIconSrc: obj3.src, unicodeEmoji: obj3.unicodeEmoji } = roleIconData);
                                return authStore(RoleIconDefault, obj2);
                              }
                            }
                            let colorString;
                            const ShieldUserIcon = tmp(8597).ShieldUserIcon;
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
                    }
                  }
                  const tmp22 = closure_10(tmp8(tmp2[24]), obj2);
                  cResult[21] = allowEmpty;
                  cResult[22] = channelId;
                  cResult[23] = isSelected;
                  cResult[24] = labelComponent;
                  cResult[25] = onPressOptionItem;
                  class A {
                    constructor(query) {
                      const obj = SearchableSelectActionComponentUtils;
                      return obj.queryMentionables(selectionActionComponent.type, query, channelId);
                    }
                  }
                  cResult[26] = options;
                  cResult[27] = tmp16;
                  cResult[28] = tmp15;
                  cResult[29] = tmp19;
                  cResult[30] = selectedOptions;
                  cResult[31] = selectionActionComponent;
                  cResult[32] = setQuery;
                  cResult[33] = submitSelection;
                  cResult[34] = tmp22;
                  tmp20 = tmp22;
                }
              }
              function renderOptionSuffix(type) {
                let items;
                if (type.type === InteractionComponentTypes.SelectOptionType.ROLE) {
                  let role;
                  if (null != closure_4) {
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
              }
              class L {
                constructor(type) {
                  if (type.type === InteractionComponentTypes.SelectOptionType.USER) {
                    user = UserStore.getUser(type.value);
                    if (null == user) {
                      return null;
                    } else {
                      const isMobileOnlineResult = PresenceStore.isMobileOnline(user.id);
                      const isVROnlineResult = PresenceStore.isVROnline(user.id);
                      const status = PresenceStore.getStatus(user.id);
                      const obj = { user, isMobileOnline: isMobileOnlineResult, isVROnline: isVROnlineResult, status, guildId, size: native.AvatarSizes.XSMALL };
                      const Avatar = tmp(1200).Avatar;
                      return authStore(Avatar, obj);
                    }
                  } else if (type.type === InteractionComponentTypes.SelectOptionType.ROLE) {
                    let role;
                    if (null != closure_4) {
                      role = GuildRoleStore.getRole(tmp3.id, type.value);
                    }
                    if (null != closure_4) {
                      if (null != role) {
                        const tmpResult = RoleIconUtils;
                        if (tmpResult.canGuildUseRoleIcons(closure_4, role)) {
                          const tmpResult2 = RoleIconUtils;
                          const roleIconData = tmpResult2.getRoleIconData(role);
                          if (null != roleIconData) {
                            const obj2 = { src: null, unicodeEmoji: null, size: 24, name: role.name };
                            ({ customIconSrc: obj3.src, unicodeEmoji: obj3.unicodeEmoji } = roleIconData);
                            return authStore(RoleIconDefault, obj2);
                          }
                        }
                        let colorString;
                        const ShieldUserIcon = tmp(8597).ShieldUserIcon;
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
                }
              }
              cResult[17] = tmp5;
              cResult[18] = tmp9Result;
              cResult[19] = tmp4;
              cResult[20] = renderOptionSuffix;
              tmp19 = renderOptionSuffix;
            }
            class L {
              constructor(type) {
                if (type.type === InteractionComponentTypes.SelectOptionType.USER) {
                  user = UserStore.getUser(type.value);
                  if (null == user) {
                    return null;
                  } else {
                    const isMobileOnlineResult = PresenceStore.isMobileOnline(user.id);
                    const isVROnlineResult = PresenceStore.isVROnline(user.id);
                    const status = PresenceStore.getStatus(user.id);
                    const obj = { user, isMobileOnline: isMobileOnlineResult, isVROnline: isVROnlineResult, status, guildId, size: native.AvatarSizes.XSMALL };
                    const Avatar = tmp(1200).Avatar;
                    return authStore(Avatar, obj);
                  }
                } else if (type.type === InteractionComponentTypes.SelectOptionType.ROLE) {
                  let role;
                  if (null != closure_4) {
                    role = GuildRoleStore.getRole(tmp3.id, type.value);
                  }
                  if (null != closure_4) {
                    if (null != role) {
                      const tmpResult = RoleIconUtils;
                      if (tmpResult.canGuildUseRoleIcons(closure_4, role)) {
                        const tmpResult2 = RoleIconUtils;
                        const roleIconData = tmpResult2.getRoleIconData(role);
                        if (null != roleIconData) {
                          const obj2 = { src: null, unicodeEmoji: null, size: 24, name: role.name };
                          ({ customIconSrc: obj3.src, unicodeEmoji: obj3.unicodeEmoji } = roleIconData);
                          return authStore(RoleIconDefault, obj2);
                        }
                      }
                      let colorString;
                      const ShieldUserIcon = tmp(8597).ShieldUserIcon;
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
              }
            }
            cResult[11] = tmp5;
            cResult[12] = guildId;
            cResult[13] = L;
            tmp15 = L;
          }
        }
      }
    }
    let obj3 = { selectActionComponent: selectionActionComponent, containerId, guildId, queryOptions: tmp12, onSubmit };
    cResult[6] = guildId;
    cResult[7] = onSubmit;
    cResult[8] = tmp12;
    cResult[9] = selectionActionComponent;
    cResult[10] = obj3;
    tmp13 = obj3;
  }
  class A {
    constructor(query) {
      const obj = SearchableSelectActionComponentUtils;
      return obj.queryMentionables(selectionActionComponent.type, query, channelId);
    }
  }
  cResult[2] = channelId;
  cResult[3] = selectionActionComponent;
  cResult[4] = A;
  tmp12 = A;
}) : (function MentionableSelectComponentActionSheet(selectionActionComponent) {
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
  const tmp4 = channelId(guildId[12]);
  if (guild != null) {
    id = guild.id;
  }
  closure_5 = tmp4(id, selectionActionComponent(tmp3[13]).MIN_REREQUEST_TIME);
  let items = [selectionActionComponent, channelId];
  const callback = react.useCallback((query) => {
    const obj = SearchableSelectActionComponentUtils;
    return obj.queryMentionables(selectionActionComponent.type, query, channelId);
  }, items);
  let tmp7 = tmp2(tmp3[14])({ selectActionComponent: selectionActionComponent, containerId, guildId, queryOptions: callback, onSubmit });
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
        const Avatar = tmp(1200).Avatar;
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
          const ShieldUserIcon = tmp(8597).ShieldUserIcon;
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
    itemAccessibilityLabel: function accessibilityLabel(type) {
      let discriminator;
      let discriminator1;
      if (type.type === selectionActionComponent(guildId[15]).SelectOptionType.USER) {
        let formatToPlainStringResult;
        user = user.getUser(type.value);
        let bot;
        if (user != null) {
          bot = user.bot;
        }
        const intl2 = tmp(tmp2[21]).intl;
        const formatToPlainString = intl2.formatToPlainString;
        const t = tmp(tmp2[21]).t;
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
      } else if (type.type === selectionActionComponent(guildId[15]).SelectOptionType.ROLE) {
        const intl = tmp(tmp2[21]).intl;
        const obj = { roleName: type.label };
        return intl.formatToPlainString(selectionActionComponent(guildId[21]).t.F6ejkk, obj);
      }
    },
    channelId,
    allowEmpty
  };
  return closure_10(tmp2(tmp3[24]), obj);
});
const result = size.fileFinishedImporting("modules/interaction_components/native/components/MentionableSelectComponentActionSheet.tsx");

export default tmp5;
